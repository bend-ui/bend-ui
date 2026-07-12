# Plan 002: Upgrade vulnerable production dependencies

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat f4449682..HEAD -- package.json pnpm-lock.yaml apps/website/package.json packages/*/package.json`
> If any in-scope file changed since this plan was written, compare the "Current state" facts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: `plans/001-restore-published-build-baseline.md`
- **Category**: security, migration
- **Planned at**: commit `f4449682`, 2026-06-14

## Why this matters

`pnpm audit --prod` reported 28 production dependency vulnerabilities at plan time, including 15 high severity advisories. The most important reachable cluster is `next`, which is used by the website and playground apps. This plan upgrades vulnerable production dependency ranges and verifies the workspace still builds.

## Current state

Root dependencies include:

```json
// package.json:31
"next": "16.1.7",
// package.json:37
"react-router-dom": "6.30.3"
```

`pnpm audit --prod` reported these high-signal production advisories:

- `next` direct dependency: multiple high advisories fixed in `>=16.2.6` according to audit output.
- `react-router` via `react-router-dom`: moderate advisory fixed in `>=6.30.4`.
- `glob` via `apps__website>fumadocs-mdx>vite>stylus>glob`: high advisory fixed in `>=10.5.0`.
- `immutable` via `next>sass>immutable`: high advisory fixed in `>=5.1.5`.
- `fast-uri` via `@pandacss/dev>@pandacss/mcp>@modelcontextprotocol/sdk>ajv>fast-uri`: high advisories fixed in `>=3.1.2`.

Important constraint: do not paste any secret values from config files into issues, plans, or commits. If dependency tooling reveals tokens, reference only file and credential type.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Dependency audit | `pnpm audit --prod` | exit 0, or only accepted non-runtime advisories remain documented |
| Package build | `pnpm build:packages` | exit 0 |
| App build | `pnpm build:apps` | exit 0 |
| Affected tests | `pnpm exec nx affected --target=test` | exit 0 |

## Scope

**In scope**:

- `package.json`
- `pnpm-lock.yaml`
- App/package `package.json` files only if required by the package manager to resolve vulnerable production dependency ranges

**Out of scope**:

- Refactoring app code for new framework APIs unless a minimal compatibility fix is required by the dependency upgrade
- Changing package export metadata; Plan 003 covers that
- Changing CI workflow; Plan 004 covers that
- Upgrading dev-only dependencies that are not part of the production audit unless needed to resolve the production advisory

## Git workflow

- Branch: `codex/002-upgrade-vulnerable-production-deps`
- Commit message suggestion: `chore: upgrade vulnerable production dependencies`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Refresh the audit and identify reachable fixes

Run `pnpm audit --prod`. Group advisories by top-level package and by whether they are reachable from a deployed app or published package.

Treat direct `next` advisories as high priority because the workspace has Next apps (`apps/website`, `apps/playground-panda`). Treat deeply transitive Panda/Fumadocs advisories as fixable through package upgrades or lockfile overrides only if the upgrade path is clean.

**Verify**: `pnpm audit --prod` prints the current advisory list; save no secret values.

### Step 2: Upgrade direct production dependencies first

Use pnpm workspace-aware commands to upgrade direct production dependencies. At minimum, bring:

- `next` to a version that satisfies the audit patched range, currently `>=16.2.6` from the audit output.
- `react-router-dom` to a version that pulls `react-router >=6.30.4`, unless it is unused and should be removed instead.

Prefer normal `pnpm update` / `pnpm add` flows over manual lockfile edits. If an upgrade requires a major version jump beyond what the repo is already using, STOP and report before proceeding.

**Verify**: `pnpm audit --prod` no longer reports direct `next` or `react-router` advisories.

### Step 3: Address transitive production advisories

For remaining production advisories, prefer upgrading the parent package (`fumadocs-mdx`, `@pandacss/dev`, or the relevant direct dependency) over lockfile overrides. Use `pnpm why <package>` to confirm paths before changing anything.

Only use `pnpm.overrides` if:

- the parent package has no compatible release,
- the override is narrow,
- `pnpm build:packages` and `pnpm build:apps` still pass.

**Verify**: `pnpm audit --prod` exits 0, or any remaining advisory is documented with why it is not reachable or not safely fixable in this plan.

### Step 4: Verify workspace behavior

Run the main build/test gates. If Plan 001 has not landed, do not proceed; this plan depends on a green package build baseline.

**Verify**:

- `pnpm build:packages` -> exit 0
- `pnpm build:apps` -> exit 0
- `pnpm exec nx affected --target=test` -> exit 0

## Test plan

- No new unit tests are expected for dependency upgrades.
- Verification is dependency audit plus package/app build and affected tests.
- If a framework upgrade requires code changes, add or update the smallest relevant existing test for that app/package.

## Done criteria

- [ ] `pnpm audit --prod` exits 0, or remaining advisories are explicitly documented as accepted with rationale.
- [ ] `pnpm build:packages` exits 0.
- [ ] `pnpm build:apps` exits 0.
- [ ] `pnpm exec nx affected --target=test` exits 0.
- [ ] `git diff --stat` is limited to dependency manifests/lockfile plus any minimal compatibility edits.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- The audit now reports a different direct vulnerable package that requires a major framework migration.
- A dependency upgrade requires broad source refactors.
- `pnpm audit --prod` reveals any credential or secret value; do not copy it.
- Build failures appear unrelated to dependency versions and Plan 001 has not landed.

## Maintenance notes

Reviewers should inspect lockfile changes for duplicate framework versions. After this lands, consider adding a scheduled or CI audit job with a clear policy for production-only advisories.
