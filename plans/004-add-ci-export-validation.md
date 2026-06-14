# Plan 004: Add CI export validation for public packages

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat f4449682..HEAD -- package.json nx.json .github/workflows/build.yml packages/*/package.json packages/*/project.json`
> If any in-scope file changed since this plan was written, compare the "Current state" excerpts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/001-restore-published-build-baseline.md`, `plans/003-normalize-public-package-export-metadata.md`
- **Category**: dx
- **Planned at**: commit `f4449682`, 2026-06-14

## Why this matters

The repo already uses `@arethetypeswrong/cli` through package-level `check-exports` scripts, but CI does not run those checks. That leaves a gap where package entrypoint regressions can merge even if source builds. Once Plans 001 and 003 make builds and metadata green, CI should enforce the package consumer surface.

## Current state

Root scripts:

```json
// package.json:7
"build": "nx run-many --target=build --all=true",
"build:affected": "nx affected --target=build",
"build:packages": "nx affected --target=build --projects=tag:ui,tag:utils,tag:preset",
"lint": "nx run-many --target=lint --all=true",
"test": "nx run-many --target=test --all=true"
```

Current CI:

```yaml
# .github/workflows/build.yml:31
- name: Build affected packages
  run: pnpm build:packages

- name: Test affected packages
  run: pnpm exec nx affected --target=test
```

At plan time, `pnpm nx show projects --withTarget check-exports --json` returned only some projects with `check-exports`. Plan 003 must normalize that before this plan runs.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Build packages | `pnpm build:packages` | exit 0 |
| Export checks | `pnpm nx run-many --target=check-exports --projects=tag:npm:public` | exit 0 |
| Workflow syntax sanity | `pnpm exec nx affected --target=test` | exit 0 |

## Scope

**In scope**:

- `package.json`
- `.github/workflows/build.yml`
- `nx.json` only if target defaults are needed for caching `check-exports`

**Out of scope**:

- Package metadata fixes; Plan 003 owns those
- Dependency upgrades; Plan 002 owns those
- Adding a release workflow or publishing packages
- Running visual or Storybook CI

## Git workflow

- Branch: `codex/004-add-ci-export-validation`
- Commit message suggestion: `ci: validate public package exports`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Add a root package export-check script

Add a root script that runs export checks for public packages. Prefer a script like:

```json
"check-exports": "nx run-many --target=check-exports --projects=tag:npm:public"
```

If tag filtering does not select the intended packages after Plan 003, use the smallest explicit project list and document why.

**Verify**: `pnpm check-exports` -> exit 0.

### Step 2: Wire export validation into CI after package build

Update `.github/workflows/build.yml` so export checks run after package build and before or alongside tests. The checks require built `dist` output, so do not place them before the build step.

Suggested shape:

```yaml
- name: Check public package exports
  run: pnpm check-exports
```

**Verify**: Read the workflow and confirm the order is install -> build packages -> check exports -> test affected packages.

### Step 3: Add Nx cache defaults if useful

If `check-exports` is expensive or already inferred as an Nx target, add a narrow `targetDefaults.check-exports` entry to `nx.json` with cache enabled and inputs matching package source, package metadata, and built output. If uncertain, skip this step; correctness is more important than cache tuning.

**Verify**: `pnpm check-exports` -> exit 0.

## Test plan

- No source tests are needed.
- The CI script itself is verified by running `pnpm check-exports` locally.
- If workflow lint tooling exists in the repo, run it; otherwise do not introduce a new dependency.

## Done criteria

- [ ] Root `package.json` has a `check-exports` script.
- [ ] `.github/workflows/build.yml` runs export checks after package build.
- [ ] `pnpm build:packages` exits 0.
- [ ] `pnpm check-exports` exits 0.
- [ ] `pnpm exec nx affected --target=test` exits 0.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- `pnpm check-exports` fails because Plan 003 has not been completed.
- Export checks require network access or publishing.
- CI changes require secrets or repository settings not visible in code.

## Maintenance notes

Reviewers should keep this check focused on package shape. Do not let it grow into a release workflow; release/publish policy should be handled separately.
