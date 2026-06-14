# Plan 006: Remove React foundation through Base UI low-level migration

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 58f42845..HEAD -- packages/base-ui/src/components packages/base-ui/src/utils packages/ark/src packages/aria/src packages/react packages/primitives package.json nx.json tsconfig.base.json packages/base-ui/package.json packages/base-ui/tsup.config.ts packages/base-ui/tsconfig.json CONTEXT.md docs/adr/0001-prove-component-source-registry-through-base-ui.md`
> If any in-scope file changed since this plan was written, compare the "Current state" facts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: L
- **Risk**: MEDIUM
- **Depends on**: `plans/001-restore-published-build-baseline.md`, `plans/005-add-wrapper-characterization-tests.md`
- **Category**: architecture
- **Planned at**: commit `58f42845`, 2026-06-14

## Why this matters

`@bend-ui/react` currently mixes runtime foundation helpers, polymorphic styled elements, and low-level public components. That makes Base UI convenient today but conflicts with the generation/ejection direction: ejected components should become local source and should not depend on `@bend-ui/react`. These packages have not been released to npm, so `@bend-ui/react` and `@bend-ui/primitives` can be removed after active workspace imports are migrated.

## Current state

Resolved vocabulary and decision context:

- `CONTEXT.md` defines **component source registry** as internal canonical source and metadata for component templates, not a public runtime dependency.
- `docs/adr/0001-prove-component-source-registry-through-base-ui.md` records that Base UI should prove the first low-level slice before registry tooling is built, and that `@bend-ui/react` and `@bend-ui/primitives` can be removed because there are no npm consumers.
- Base UI still imports `Button`, `Input`, `Badge`, `Stack`, `Text`, `IconButton`, `bend`, `HTMLBendUIProps`, `withRecipe`, and `withParts` from `@bend-ui/react`.
- Ark and Ariakit also reference old foundation packages. Ark must remain viable as a support target; Ariakit should remain in the workspace for possible future support but must not keep a dependency on `@bend-ui/react` or `@bend-ui/primitives`.
- Radix and the Radix playground are removal targets rather than migration targets.
- `@bend-ui/primitives` is only directly consumed by `@bend-ui/react` in active package code. Its useful pieces are small enough to inline locally where needed.
- `@bend-ui/react-utils` should remain in the workspace for possible future use, but should not become a replacement runtime foundation.
- Base UI already has some components using Panda's generated `createStyleContext` from `@bend-ui/styled-system/jsx`, including `Tabs`, `Table`, `Sidebar`, `Switch`, `Meter`, `ScrollArea`, and `NavigationMenu`.
- `packages/base-ui/src/components/index.ts` currently re-exports several low-level components from `@bend-ui/react`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Inspect Base UI project | `pnpm nx show project base-ui --json` | project config JSON |
| Base UI tests | `pnpm nx run base-ui:test` | exit 0 |
| Base UI build | `pnpm nx run base-ui:build` | exit 0 |
| Export validation | `pnpm nx run base-ui:check-exports` | exit 0 |
| Focused package tests | `pnpm nx run-many --target=test --projects=base-ui,ark,aria` | exit 0 |
| Workspace project list | `pnpm nx show projects --json` | removed packages absent after deletion |

## Scope

**In scope**:

- Add or rewrite Base UI-local low-level components for `Button`, `IconButton`, `Input`, `Badge`, `Stack`, `Text`, `Heading`, and `Card`.
- Replace Base UI public re-exports from `@bend-ui/react` for that slice.
- Migrate the first slice away from `bend`, `withRecipe`, `withParts`, and universal `asChild`.
- Replace remaining active Base UI helper imports from `@bend-ui/react` with Panda-generated helpers, Base UI-local code, or tiny package-local helpers.
- Remove active workspace dependencies on `@bend-ui/react` and `@bend-ui/primitives`.
- Delete `packages/react` and `packages/primitives` after imports, package manifests, tsconfig path aliases, and Nx references are gone.
- Preserve `packages/react-utils` unless it becomes unused configuration noise during cleanup; if unused, leave it as an intentionally retained package rather than deleting it.
- Remove stale app or package tsconfig aliases for `@bend-ui/react-utils` when those projects do not import it.
- Prefer Panda-generated `@bend-ui/styled-system/jsx`, `@bend-ui/styled-system/css`, recipes, and patterns directly.
- Add focused characterization tests for the migrated public exports.

**Out of scope**:

- Building the component source registry tooling.
- Fully modernizing Ark, React Aria, or Ariakit component internals beyond removing `@bend-ui/react` and `@bend-ui/primitives` dependencies.
- Rewriting complex adapter modules such as `Select`, `Dialog`, `Combobox`, `Menu`, `Toast`, `Tooltip`, or `Popover` unless a tiny import update is required.
- Changing recipe definitions in `packages/preset-base` or `packages/preset` except for a narrow bug discovered during migration.

## Git workflow

- Branch: `codex/006-remove-react-foundation`
- Commit message suggestion: `refactor: remove react foundation packages`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Confirm public surface and dependency graph

Run the drift check and inspect Base UI's project config. List all imports from `@bend-ui/react` and `@bend-ui/primitives` under active workspace package sources and group them into:

- low-level component imports included in this plan,
- styling/helper imports replaceable with Panda-generated helpers,
- tiny utility imports to inline locally,
- Radix imports that should be deleted with the Radix package and playground.
- Ariakit references that should be cleaned without deleting the Ariakit package.

**Verify**: the grouped list matches the scope above. If Base UI no longer imports the first-slice components from `@bend-ui/react`, update this plan before proceeding.

### Step 2: Add Base UI-local low-level components

Create Base UI-owned implementations for:

- `Button` and `IconButton`
- `Input`
- `Badge`
- `Stack`
- `Text` and `Heading`
- `Card`

Rewrite them into the target shape rather than copying `packages/react` as-is. Avoid imports from `@bend-ui/react`. Use Panda's generated helpers directly, and use Panda's generated `createStyleContext` for slot recipes such as `Card`.

Do not preserve universal `asChild` as a Bend UI feature. For plain DOM components, use simple React components or Panda styled elements. For Base UI primitives, use Base UI's native composition API.

**Verify**: `pnpm nx run base-ui:test` exits 0.

### Step 3: Replace first-slice re-exports and imports

Update `packages/base-ui/src/components/index.ts` so the first-slice components are exported from Base UI-local modules, not from `@bend-ui/react`.

Update Base UI components and stories that import first-slice components from `@bend-ui/react` so they import from local Base UI component modules or package-local barrels.

**Verify**: `rg 'from .@bend-ui/react.|export .*@bend-ui/react' packages/base-ui/src` shows no first-slice component imports or re-exports.

### Step 4: Replace remaining active helper imports

Replace remaining active imports from `@bend-ui/react`:

- Use Panda-generated `createStyleContext` instead of `withRecipe`, `withParts`, or custom style context helpers.
- Use simple package-local components or Panda styled elements instead of `bend`.
- Inline tiny utility types only where they earn their keep; avoid recreating a new shared foundation package.
- Replace `@bend-ui/primitives` context usage with local React context code where needed.

Do not preserve universal `asChild` or generic polymorphic helpers as a workspace-level abstraction.

**Verify**: `rg '@bend-ui/react|@bend-ui/primitives' packages/base-ui packages/ark packages/aria apps -g '*.{ts,tsx,json}'` returns no active dependency that would block package deletion.

### Step 5: Add characterization tests for the migrated slice

Add focused tests that prove the public Base UI module behavior:

- components render without crashing,
- important roles/labels/text render,
- compound parts are exposed where relevant,
- variant props reach the recipe surface without asserting generated Panda class names,
- `IconButton` preserves accessible naming behavior.

Prefer tests near each component. Avoid snapshots and exact DOM-depth assertions.

**Verify**: `pnpm nx run base-ui:test` exits 0.

### Step 6: Delete React foundation packages

Delete `packages/react` and `packages/primitives`. Remove their package-manager workspace entries, Nx project references, tsconfig path aliases, package manifest dependencies, tsup externals, and README references.

Delete `packages/radix` and `apps/playground-panda-radix` if they still depend on `@bend-ui/react` or otherwise block removal.

Keep `packages/ariakit`, but remove its dependency on `@bend-ui/react` and `@bend-ui/primitives`. If Ariakit has no meaningful implementation left after dependency cleanup, leave a minimal package shell only if it continues to build and its future status is obvious from local docs.

Keep `packages/react-utils`, but remove stale tsconfig aliases from apps or packages that do not import it. Do not add `@bend-ui/react-utils` to Base UI as part of this migration unless a helper has earned that shared home.

**Verify**:

- `pnpm nx show projects --json` does not include `react` or `primitives`.
- `rg '@bend-ui/react|@bend-ui/primitives|packages/react|packages/primitives|@bend-ui/radix|packages/radix|playground-panda-radix' . -g '*.{ts,tsx,json,md}'` only returns historical notes in this plan or ADR.

### Step 7: Build and package-check active packages

Run build and export checks after the migration.

**Verify**:

- `pnpm nx run base-ui:build` exits 0.
- `pnpm nx run base-ui:check-exports` exits 0.
- `pnpm nx run-many --target=test --projects=base-ui,ark,aria` exits 0.

## Test plan

- Unit/component tests for the migrated low-level Base UI slice.
- Existing Base UI tests continue passing.
- Base UI build and export validation continue passing.
- Active adapter tests continue passing after `@bend-ui/react` and `@bend-ui/primitives` are removed.

## Done criteria

- [ ] Base UI exports local `Button`, `IconButton`, `Input`, `Badge`, `Stack`, `Text`, `Heading`, and `Card` implementations.
- [ ] The migrated slice has no imports from `@bend-ui/react`.
- [ ] Base UI no longer re-exports those first-slice components from `@bend-ui/react`.
- [ ] Active workspace packages no longer import `@bend-ui/react` or `@bend-ui/primitives`.
- [ ] `packages/react` and `packages/primitives` are deleted.
- [ ] `packages/react-utils` remains in the workspace and is not used as a replacement foundation package.
- [ ] Stale `@bend-ui/react-utils` tsconfig aliases are removed from projects that do not import it.
- [ ] `packages/radix` and `apps/playground-panda-radix` are deleted.
- [ ] `packages/ariakit` remains in the workspace without depending on `@bend-ui/react` or `@bend-ui/primitives`.
- [ ] Nx and TypeScript configuration no longer reference `react` or `primitives` projects.
- [ ] New or updated tests cover the migrated public component behavior.
- [ ] `pnpm nx run base-ui:test` exits 0.
- [ ] `pnpm nx run base-ui:build` exits 0.
- [ ] `pnpm nx run base-ui:check-exports` exits 0.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- Preserving a first-slice component's current public API requires rebuilding universal `asChild` or the `bend` factory inside Base UI.
- Panda's generated helpers cannot express a migrated slot component without substantial local helper code.
- Migrating the first slice requires broad recipe changes in `packages/preset-base` or `packages/preset`.
- Active Ark or React Aria support cannot compile without reintroducing a shared runtime foundation package.
- Ariakit cannot remain in the workspace without rebuilding a shared runtime foundation package.

## Maintenance notes

After this plan lands, create the component source registry from the proven Base UI source shape. Do not build registry tooling around the old `@bend-ui/react` foundation shape.
