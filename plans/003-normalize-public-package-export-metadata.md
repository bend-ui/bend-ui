# Plan 003: Normalize public package export metadata

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat f4449682..HEAD -- packages/*/package.json packages/*/project.json packages/*/tsup.config.ts`
> If any in-scope file changed since this plan was written, compare the "Current state" excerpts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: `plans/001-restore-published-build-baseline.md`
- **Category**: dx, migration
- **Planned at**: commit `f4449682`, 2026-06-14

## Why this matters

Several packages are tagged or named like public packages, but their package metadata differs from the working pattern used by `@particles/react`, `@particles/base-ui`, and `@particles/ark`. Inconsistent `main`, `types`, `exports`, `files`, and `check-exports` metadata can produce packages that build locally but fail for consumers. Normalizing this boundary makes publishing safer and prepares CI export validation in Plan 004.

## Current state

Working package pattern:

```json
// packages/react/package.json:4
"type": "module",
"main": "./dist/index.cjs",
"module": "./dist/index.js",
"types": "./dist/index.d.ts",
"exports": {
  ".": {
    "source": "./src/index.ts",
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js",
    "require": "./dist/index.cjs"
  }
},
"sideEffects": false,
"files": ["dist"],
"scripts": {
  "check-exports": "attw --pack . --ignore-rules=cjs-resolves-to-esm",
  "build": "tsup"
}
```

Problem examples:

```json
// packages/ariakit/package.json:4
"main": "./index.js",
"types": "./index.d.ts",
"exports": {
  ".": {
    "import": "./index.mjs",
    "require": "./index.js"
  }
}
```

```json
// packages/react-utils/package.json:7
".": {
  "source": "./src/index.ts",
  "types": "./dist/index.d.ts",
  "import": "./dist/index.js",
  "require": "./dist/index.cjs"
}
```

```json
// packages/theme/package.json:8
".": {
  "source": "./src/index.ts",
  "types": "./dist/index.d.ts",
  "import": "./dist/index.js",
  "require": "./dist/index.cjs"
}
```

```json
// packages/cli/package.json:1
{
  "name": "@particles/cli",
  "version": "0.0.1",
  "type": "commonjs",
  "dependencies": { ... }
}
```

At plan time, `pnpm nx show projects --withTarget check-exports --json` returned `preset-base`, `react-utils`, `primitives`, `storybook-theme`, `base-ui`, `preset`, `radix`, `react`, `aria`, `ark`; it did not include `ariakit`, `theme`, or `cli`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| List export-check projects | `pnpm nx show projects --withTarget check-exports --json` | includes all intended public packages |
| Build public packages | `pnpm build:packages` | exit 0 |
| Check exports | `pnpm nx run-many --target=check-exports --projects=tag:npm:public` | exit 0 |
| Inspect one package | `pnpm nx show project <name> --json` | metadata matches package.json |

## Scope

**In scope**:

- `packages/ariakit/package.json`
- `packages/react-utils/package.json`
- `packages/theme/package.json`
- `packages/cli/package.json`
- Project files or tsup configs needed to expose build/check-exports targets consistently

**Out of scope**:

- Changing runtime source code, except if a package cannot build after Plan 001 and the fix is strictly metadata-related
- Publishing packages
- CI changes; Plan 004 wires checks into CI
- Redesigning package names or package ownership

## Git workflow

- Branch: `codex/003-normalize-public-package-metadata`
- Commit message suggestion: `fix: normalize package export metadata`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Define the public package set

Use `pnpm nx show projects --json` and `pnpm nx show project <name> --json` to list projects tagged `npm:public` or clearly named as publishable `@particles/*` packages. Confirm whether `ariakit`, `theme`, and `cli` are intended to be public. If any package is intentionally private/internal, document that and do not add publish metadata to it.

**Verify**: You have a short list of packages to normalize and no ambiguity remains. If ambiguity remains, STOP.

### Step 2: Normalize package entry metadata

For each in-scope public package, align package metadata with the established working pattern:

- `type` appropriate to emitted files (`module` for dual ESM/CJS packages using `.cjs` for CommonJS; keep CLI intentional if it emits only CJS)
- `main`
- `module` when ESM is emitted
- `types`
- `exports` object with `"."` key, not a top-level `"."` key
- `files: ["dist"]`
- `sideEffects: false` for side-effect-free libraries; do not set this on CLI if it is executable
- `scripts.build`
- `scripts.check-exports`

For `@particles/cli`, decide whether it should be importable, executable, or both. If executable, add `bin` metadata only if the built output has a proper executable entry and build verification passes.

**Verify**: `pnpm nx show project <name> --json` for each changed package shows expected package metadata and targets.

### Step 3: Ensure Nx exposes `check-exports`

If a package has a `check-exports` script but no Nx target, adjust package/project configuration so Nx infers or defines that target consistently. Prefer package scripts when they are already the workspace convention.

**Verify**: `pnpm nx show projects --withTarget check-exports --json` includes every normalized public package.

### Step 4: Build and validate exports

Build first, then run export checks. Export checks pack the package, so they must run after build output exists.

**Verify**:

- `pnpm build:packages` -> exit 0
- `pnpm nx run-many --target=check-exports --projects=tag:npm:public` -> exit 0

## Test plan

- No new unit tests are required for metadata-only changes.
- The export check is the regression test.
- If CLI `bin` metadata is added, add a smoke command such as `node packages/cli/dist/index.js --help` only if the CLI supports non-interactive help without prompting. If it does not, STOP and report that CLI command behavior needs Plan 007 first.

## Done criteria

- [ ] Public packages have consistent `main` / `module` / `types` / `exports` / `files` metadata.
- [ ] No package uses a top-level `"."` key instead of `"exports": { ".": ... }`.
- [ ] `pnpm build:packages` exits 0.
- [ ] `pnpm nx run-many --target=check-exports --projects=tag:npm:public` exits 0.
- [ ] `git diff --stat` is limited to package/project/tsup metadata files plus `plans/README.md`.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- A package's public/private status is unclear.
- Export normalization requires runtime source changes unrelated to package boundaries.
- The CLI needs behavior changes before it can safely expose `bin` metadata.
- Export checks fail because of dependency vulnerabilities or build failures from Plans 001/002.

## Maintenance notes

After this lands, Plan 004 should wire export validation into CI. Reviewers should inspect packed package contents with `npm pack --dry-run` or the `attw` output for at least one changed package.
