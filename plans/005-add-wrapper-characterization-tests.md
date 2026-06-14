# Plan 005: Add wrapper characterization tests for active component packages

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat f4449682..HEAD -- packages/base-ui/src/components packages/ark/src/components packages/base-ui/vite.config.ts packages/ark/vite.config.ts packages/base-ui/tsconfig.spec.json packages/ark/tsconfig.spec.json`
> If any in-scope file changed since this plan was written, compare the "Current state" facts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P2
- **Effort**: M-L
- **Risk**: LOW
- **Depends on**: `plans/001-restore-published-build-baseline.md`
- **Category**: tests
- **Planned at**: commit `f4449682`, 2026-06-14

## Why this matters

The highest-churn UI packages expose dozens of wrapper components but have very few executable component tests. Base UI has 41 component folders and only two component specs; Ark has 39 component folders and only one component spec. Storybook is useful for review, but characterization tests catch API and render regressions earlier and make future wrapper refactors safer.

## Current state

Base UI export surface:

```ts
// packages/base-ui/src/components/index.ts:13
export * from './Accordion';
export * from './AlertDialog';
export * from './Autocomplete';
export * from './Avatar';
export * from './Badge';
export * from './Button';
// ...continues through Patterns
```

Ark export surface:

```ts
// packages/ark/src/components/index.ts:3
export * from './Accordion';
export * from './AngleSlider';
export * from './Avatar';
export * from './Carousel';
// ...continues through ScrollArea
```

Existing tests to model:

- `packages/base-ui/src/components/Button/Button.spec.tsx`
- `packages/base-ui/src/components/Accordion/Accordion.test.tsx`
- `packages/ark/src/components/Avatar/Avatar.spec.tsx`

Recent git churn is concentrated around `packages/base-ui/src/components/Sidebar/Sidebar.tsx`, `packages/base-ui/src/components/Tabs/Tabs.tsx`, `packages/base-ui/src/components/Sidebar/Sidebar.stories.tsx`, and demo flows in `apps/vite-base-ui`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Base UI tests | `pnpm nx run base-ui:test` | exit 0 |
| Ark tests | `pnpm nx run ark:test` | exit 0 |
| Focused package tests | `pnpm nx run-many --target=test --projects=base-ui,ark` | exit 0 |
| Optional visual smoke | `pnpm e2e:base-ui:visual` | exit 0 if browsers are installed |

## Scope

**In scope**:

- New or updated `*.spec.tsx` / `*.test.tsx` files under `packages/base-ui/src/components/**`
- New or updated `*.spec.tsx` / `*.test.tsx` files under `packages/ark/src/components/**`
- Test setup/config only if required for the new tests

**Out of scope**:

- Component implementation changes, except for tiny accessibility/testability fixes discovered by a failing characterization test
- Snapshot-heavy visual assertions
- E2E app coverage expansion
- Adding tests for all 80 wrapper components in one pass

## Git workflow

- Branch: `codex/005-wrapper-characterization-tests`
- Commit message suggestion: `test: add wrapper characterization coverage`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Select a small high-value test slice

Add tests for 4-6 components total, prioritizing:

- `packages/base-ui/src/components/Sidebar`
- `packages/base-ui/src/components/Tabs`
- `packages/base-ui/src/components/Select` or `Dialog`
- `packages/ark/src/components/Sidebar`
- `packages/ark/src/components/Tabs` or `Select`

Use existing tests for structure. Prefer assertions that prove public wrapper contracts:

- component renders without crashing,
- key compound parts are exposed,
- important ARIA roles/labels are present,
- variant/class data attributes are passed through when part of the wrapper contract,
- controlled/uncontrolled basics work for interactive primitives where practical.

**Verify**: `pnpm nx run-many --target=test --projects=base-ui,ark` -> exit 0.

### Step 2: Avoid brittle implementation assertions

Do not assert generated Panda class names or exact DOM depth. Assert accessible roles, text, labels, and exported compound properties.

If a component cannot be tested without a complex provider or browser API, skip it and choose the next component. Record the skipped component in the PR description.

**Verify**: Re-run `pnpm nx run-many --target=test --projects=base-ui,ark` -> exit 0.

### Step 3: Add a coverage ratchet note, not a hard threshold

If the repo has no coverage threshold for these packages, do not add one in this plan. Instead, add a short maintenance note in the test file or PR description identifying the next 3-5 components to cover.

**Verify**: No config-only coverage threshold changes were added.

## Test plan

- New tests: 4-6 wrapper characterization tests under the component folders.
- Existing patterns: model file structure after `Button.spec.tsx`, `Accordion.test.tsx`, and `Avatar.spec.tsx`.
- Verification: `pnpm nx run-many --target=test --projects=base-ui,ark` passes.

## Done criteria

- [ ] At least 4 new meaningful component tests exist across `base-ui` and `ark`.
- [ ] Tests assert public wrapper behavior, not generated CSS internals.
- [ ] `pnpm nx run base-ui:test` exits 0.
- [ ] `pnpm nx run ark:test` exits 0.
- [ ] No broad component implementation refactors are included.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- Existing test setup cannot render Base UI or Ark primitives without substantial configuration work.
- Meaningful tests require changing component APIs.
- Test failures reveal a real component bug larger than a tiny accessibility/testability fix; file a separate implementation plan instead of fixing broadly here.

## Maintenance notes

Reviewers should look for durable tests: roles, labels, and exported API shape are good; exact DOM nesting and generated class names are brittle. A later plan can expand this into a package-wide coverage ratchet after the first characterization slice proves stable.
