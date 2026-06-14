# Plan 001: Restore the published package build baseline

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat f4449682..HEAD -- packages/react/src/utils/split-props.ts packages/react/tsup.config.ts packages/react/package.json packages/cli/src/index.ts packages/cli/tsconfig.json packages/cli/tsconfig.lib.json packages/cli/tsup.config.ts packages/cli/package.json`
> If any in-scope file changed since this plan was written, compare the "Current state" excerpts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: S-M
- **Risk**: MED
- **Depends on**: none
- **Category**: bug, dx
- **Planned at**: commit `f4449682`, 2026-06-14

## Why this matters

This repo publishes TypeScript packages. At plan time, `pnpm nx run react:build` fails during declaration generation, and `pnpm nx run cli:build` fails during declaration generation. A green build baseline must come before packaging cleanup, export validation, or broader test work because release checks cannot be trusted while core package builds are red.

## Current state

- `packages/react/src/utils/split-props.ts` exports `extractProps`; tsup declaration generation reports TS7056 on the inferred return type at line 4.
- `packages/react/tsup.config.ts` builds declarations with `dts: true` and uses `tsconfig.lib.json`.
- `packages/cli/src/index.ts` uses `process.exit(1)` in the top-level error handler.
- `packages/cli/tsconfig.json` sets `types` to only `["vitest"]`; `packages/cli/tsconfig.lib.json` adds `types: ["node"]`, but tsup currently uses `tsconfig.json`, so declaration build reports TS2591 for `process`.

Relevant excerpts:

```ts
// packages/react/src/utils/split-props.ts:4
export const extractProps = <P extends Props, R extends Recipe<P>>(
  props: P,
  recipe: R,
) => {
  type CssResult = ReturnType<typeof splitCssProps<P>>;
  const [cssProps, otherProps] = splitCssProps(props) as CssResult;
  const { css: cssProp, ...styleProps } = cssProps;
  const [variantProps, localProps] = recipe.splitVariantProps(otherProps as P);

  return { cssProp, styleProps, variantProps, localProps };
};
```

```ts
// packages/cli/src/index.ts:53
run().catch((error) => {
  console.error(error);
  p.outro('An error occurred while running the command.');
  process.exit(1);
});
```

Repo conventions to match:

- Use Nx commands via pnpm, as stated in `CLAUDE.md`.
- Existing build targets are project-level Nx targets; verify fixes with `pnpm nx run <project>:build`.
- Commit messages in recent history use conventional style, e.g. `fix(ark): tighten sidebar and scroll area APIs`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| React build | `pnpm nx run react:build` | exit 0, no TS7056 |
| CLI build | `pnpm nx run cli:build` | exit 0, no TS2591 |
| Affected package build | `pnpm build:packages` | exit 0 |
| Tests for touched packages | `pnpm nx run-many --target=test --projects=react,cli` | exit 0 |

## Scope

**In scope**:

- `packages/react/src/utils/split-props.ts`
- `packages/react/tsup.config.ts` only if needed for declaration behavior
- `packages/cli/tsconfig.json`
- `packages/cli/tsconfig.lib.json`
- `packages/cli/tsup.config.ts`
- `packages/cli/package.json` only if needed for package metadata consistency

**Out of scope**:

- Reworking component APIs in `packages/react/src/components/**`
- Changing CLI UX or command parsing behavior; that is covered by a separate finding
- Dependency upgrades; those belong to Plan 002
- Export metadata cleanup; that belongs to Plan 003

## Git workflow

- Branch: `codex/001-restore-build-baseline`
- Commit message suggestion: `fix: restore package build baseline`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Make `extractProps` declaration-friendly

Add an explicit exported return type for `extractProps` in `packages/react/src/utils/split-props.ts`. Keep runtime behavior unchanged. Prefer a small local type alias that names the returned shape:

- `cssProp`
- `styleProps`
- `variantProps`
- `localProps`

Use the existing `Props` and `Recipe` types from `./types`; do not relax the function to `any` unless TypeScript forces an internal cast. If an internal cast is needed, keep it inside this utility and do not leak `any` to consumers.

**Verify**: `pnpm nx run react:build` -> exit 0 and no TS7056.

### Step 2: Point the CLI declaration build at Node-aware TypeScript config

Inspect `packages/cli/tsup.config.ts`. It currently omits `tsconfig`, so tsup uses `packages/cli/tsconfig.json`, whose `types` excludes Node. Configure tsup to use `tsconfig.lib.json`, or otherwise make the declaration build see Node types without removing Vitest types from tests.

Do not remove `process.exit(1)` from the CLI error handler just to silence the type error; the problem is the declaration build's TypeScript config.

**Verify**: `pnpm nx run cli:build` -> exit 0 and no TS2591.

### Step 3: Verify package-level and affected builds

Run the focused tests and package build. If unrelated packages fail, capture the failure and STOP unless the failure is caused by files in this plan's scope.

**Verify**:

- `pnpm nx run-many --target=test --projects=react,cli` -> exit 0
- `pnpm build:packages` -> exit 0

## Test plan

- No new tests are required unless changing runtime behavior becomes necessary.
- Existing tests to preserve: `packages/react/src/components/**/*.spec.tsx`, `packages/cli/src/commands/add.spec.ts`.
- Primary verification is declaration-producing package builds because both failures are build/type emission failures.

## Done criteria

- [ ] `pnpm nx run react:build` exits 0.
- [ ] `pnpm nx run cli:build` exits 0.
- [ ] `pnpm nx run-many --target=test --projects=react,cli` exits 0.
- [ ] `pnpm build:packages` exits 0, or any remaining failure is documented as out of scope and unrelated to this plan.
- [ ] `git diff --stat` shows only in-scope files plus `plans/README.md`.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- `extractProps` live code differs materially from the excerpt above.
- Fixing TS7056 requires redesigning the styled-system recipe or component factory types.
- Fixing CLI TS2591 requires changing CLI command behavior.
- `pnpm build:packages` exposes unrelated package failures after both focused builds pass.

## Maintenance notes

Reviewers should focus on whether the fix preserves public typings instead of masking them. Future tsup config changes should keep declaration generation wired to the library tsconfig for Node-facing packages.
