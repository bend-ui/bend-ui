# Plan 007: Plan upstream adapter component catalogs

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report; do not improvise. When done, update this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 12796e8c..HEAD -- CONTEXT.md docs/adr packages/base-ui/src/components packages/ark/src/components packages/aria/src packages/base-ui/package.json packages/ark/package.json packages/aria/package.json plans/006-migrate-base-ui-low-level-components.md`
> If any in-scope file changed since this plan was written, compare the "Current state" facts against the live code before proceeding; on mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: `plans/006-migrate-base-ui-low-level-components.md`
- **Category**: architecture
- **Planned at**: commit `12796e8c`, 2026-06-14

## Why this matters

Bend UI should not force Base UI, Ark UI, and React Aria Components into one fake component catalog. Each package adapter should expose an adapter-native component catalog that follows its upstream primitive library's names, composition model, and API shape while sharing Bend UI visual intent through recipes where appropriate. The planning work should start from upstream catalogs, then map to Bend recipes and implementation status.

## Current state

Resolved vocabulary and decision context:

- `CONTEXT.md` defines **adapter-native component catalog** as the set of Bend-styled components an adapter exposes by following its upstream primitive library's names, composition model, and API shape.
- `docs/adr/0001-prove-component-source-registry-through-base-ui.md` records that component creation plans should start from each upstream primitive library's catalog, not a Bend-first parity matrix.
- The supported adapter direction is Base UI, Ark UI, and React Aria Components.
- Implementation should start with Base UI as the v0 adapter, while Ark UI and React Aria Components are mapped and classified before their implementation work begins.
- The catalog matrix should track product intent, implementation progress, and quality coverage separately.

Current workspace inventory is only a seed, not the source of truth:

- `packages/base-ui/src/components` currently contains modules such as Accordion, AlertDialog, Autocomplete, Avatar, Button, Checkbox, Combobox, Dialog, Field, Menu, Meter, NavigationMenu, NumberField, Popover, Select, Slider, Switch, Table, Tabs, Toast, Toggle, Toolbar, and Tooltip.
- `packages/ark/src/components` currently contains modules such as Accordion, AngleSlider, Avatar, Carousel, Checkbox, Clipboard, ColorPicker, Combobox, DatePicker, Dialog, Drawer, Editable, Field, FileUpload, Menu, Pagination, Popover, RadioGroup, Select, Switch, Tabs, Toast, ToggleGroup, and Tooltip.
- `packages/aria/src/components` currently contains modules such as Button, Calendar, Checkbox, CheckboxGroup, ColorPicker, ComboBox, DatePicker, DateRangePicker, Dialog, Disclosure, GridList, Input, ListBox, Menu, Meter, Modal, NumberField, Popover, RadioGroup, SearchField, Select, Slider, Switch, Table, Tabs, TagGroup, TextArea, TextField, Toast, ToggleButton, Toolbar, Tooltip, and Tree.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Inspect Base UI project | `pnpm nx show project base-ui --json` | project config JSON |
| Inspect Ark project | `pnpm nx show project ark --json` | project config JSON |
| Inspect Aria project | `pnpm nx show project aria --json` | project config JSON |
| List current Base UI modules | `find packages/base-ui/src/components -mindepth 1 -maxdepth 1 -type d -exec basename {} \\; | sort` | current module list |
| List current Ark modules | `find packages/ark/src/components -mindepth 1 -maxdepth 1 -type d -exec basename {} \\; | sort` | current module list |
| List current Aria modules | `find packages/aria/src/components -mindepth 1 -maxdepth 1 -type d -exec basename {} \\; | sort` | current module list |
| Verify package builds if catalog scripts are added | `pnpm nx run-many --target=build --projects=base-ui,ark,aria` | exit 0 |

## Scope

**In scope**:

- Create an upstream-first catalog matrix for Base UI, Ark UI, and React Aria Components.
- Generate or verify upstream component catalogs from installed package exports, upstream docs, or type declarations for the exact package versions in this workspace.
- Compare upstream catalogs against current adapter modules.
- Classify each upstream component with catalog intent and implementation progress.
- Identify the Base UI v0 implementation slice as follow-up work orders.
- Identify missing recipe mappings and recipe gaps without implementing them.

**Out of scope**:

- Implementing component wrappers.
- Building component source registry tooling.
- Forcing cross-adapter component parity.
- Reviving Radix or making Ariakit a current support target.
- Changing recipes, package exports, or adapter source code except for documentation generated by this plan.

## Status vocabulary

Use two separate axes.

Catalog intent:

- `v0`: implement for the Base UI v0 slice.
- `planned`: belongs in the adapter-native catalog, but not v0.
- `defer`: useful later, but blocked by missing recipe, unclear API, or low immediate product value.
- `exclude`: intentionally not part of Bend UI, even if upstream exposes it.
- `primitive-only`: expose or document upstream behavior lightly, but do not create a Bend-styled wrapper yet.
- `covered-by-pattern`: not a standalone component because Bend UI will express it as an operational pattern or composed module.

Implementation progress:

- `missing`
- `partial`
- `implemented`

Quality coverage:

- `untested`
- `tested`
- `storybook`
- `documented`
- `demoed`

Base UI v0 quality bar:

- every `v0` row must be `implemented`,
- every `v0` row must have wrapper-contract `tested` coverage,
- every `v0` row must have `storybook` coverage,
- docs-priority rows should be `documented`,
- demo app rows should be `demoed`.
- `tested`
- `documented`

## Matrix shape

Create the matrix as a documentation artifact under `plans/` unless the executor and operator choose a more durable docs location.

Recommended table columns:

- Adapter
- Upstream package version
- Upstream component
- Bend export name
- Catalog intent
- Implementation progress
- Quality coverage
- Current module path
- Structural recipe mapping
- Design recipe mapping
- Adapter condition mapping
- Source registry readiness
- Notes

Source registry readiness values:

- `ready-soon`: plain component or simple wrapper; likely easy to sync/generate.
- `adapter-bound`: tied deeply to upstream primitives; generate later from adapter-specific source.
- `blocked`: missing recipe, unclear API, or too unstable.
- `not-applicable`: operational pattern, provider, hook, or primitive-only export.

## Git workflow

- Branch: `codex/007-upstream-adapter-catalogs`
- Commit message suggestion: `docs: plan upstream adapter catalogs`
- Do not push or open a PR unless the operator asks.

## Steps

### Step 1: Verify upstream package versions and local resolvability

Read `packages/base-ui/package.json`, `packages/ark/package.json`, and `packages/aria/package.json`. Confirm the installed versions of:

- `@base-ui/react`
- `@ark-ui/react`
- `react-aria-components`

If package exports cannot be resolved from the root workspace because of pnpm layout or install state, use package-local resolution, lockfile entries, or official upstream docs for the exact installed versions.

**Verify**: the catalog document records each upstream package version and how the upstream catalog was sourced.

### Step 2: Generate or verify upstream catalogs

For each upstream library, produce a component list from the best available source:

- package exports or type declarations when locally available,
- official docs for the installed version when local exports are not enough,
- existing adapter imports only as a fallback seed, not as the source of truth.

Do not manually invent missing upstream components from memory. If a catalog source is incomplete, mark the source limitation in notes.

**Verify**: each adapter lane has a cited catalog source and a component list.

### Step 3: Compare upstream catalogs to current adapter modules

Compare each upstream component list to the current workspace modules:

- `packages/base-ui/src/components`
- `packages/ark/src/components`
- `packages/aria/src/components`

Record whether each upstream component is missing, partial, or implemented. Separately record quality coverage such as untested, tested, storybook, documented, or demoed.

**Verify**: current modules that do not map cleanly to an upstream component are listed with notes instead of being silently dropped, and code progress is not conflated with test/docs/story/demo coverage.

### Step 4: Classify catalog intent

Assign catalog intent for every upstream component:

- Start with Base UI as the v0 implementation lane.
- Mark Ark UI and React Aria Components as planned, defer, exclude, primitive-only, or covered-by-pattern unless they are already implemented.
- Prefer upstream-native naming and composition. Do not rename components only to match another adapter.

**Verify**: there is no "parity required" status or other Bend-first cross-adapter status.

### Step 4.5: Apply the Base UI v0 quality bar

For Base UI rows marked `v0`, record the current gap to the v0 quality bar: implementation, wrapper-contract tests, Storybook coverage, docs-priority documentation, and demo usage where applicable.

**Verify**: every Base UI `v0` row has explicit quality-bar gap notes.

### Step 5: Map recipes and recipe gaps

For each component, map recipe ownership separately:

- structural recipe mapping for `@bend-ui/preset-base`,
- design recipe mapping for `@bend-ui/preset`,
- adapter condition mapping for library-specific state selectors or data attributes.

If no recipe exists, mark one of:

- recipe needed,
- use existing related recipe,
- defer until design direction exists,
- primitive-only.

Do not add recipe implementation work in this plan. Capture it as follow-up.

**Verify**: Base UI v0 rows have structural recipe, design recipe, and adapter condition mappings or explicit recipe-gap notes.

### Step 6: Classify source registry readiness

Assign source registry readiness for each row. Treat this as guidance for future component source registry work, not as a blocker for Base UI v0 implementation.

**Verify**: every row has one of `ready-soon`, `adapter-bound`, `blocked`, or `not-applicable`.

### Step 7: Produce Base UI follow-up work orders

From rows where adapter is Base UI and catalog intent is `v0`, create follow-up implementation plan files under `plans/`. Organize those plans by upstream component category, with recipe gaps called out inside each plan rather than driving the grouping. Keep slices small enough for review:

- low-level and layout,
- forms,
- overlays,
- menus and navigation,
- collections and selection,
- feedback and status,
- operational patterns if applicable.

Reference existing plans where relevant, especially Plan 006.

Do not create Ark UI or React Aria Components implementation plans in this step. Those adapters should remain mapped and classified until Base UI has the first implementation lane moving.

**Verify**: every Base UI v0 missing or partial row appears in exactly one follow-up plan or in Plan 006.

## Done criteria

- [ ] Upstream package versions and catalog sources are recorded.
- [ ] Base UI, Ark UI, and React Aria Components have upstream-first catalog lanes.
- [ ] Every row has catalog intent and implementation progress.
- [ ] Every implemented or partial row has quality coverage.
- [ ] Every Base UI `v0` row has explicit quality-bar gap notes.
- [ ] Existing adapter modules are compared against upstream catalogs.
- [ ] Structural recipe, design recipe, and adapter condition mappings or recipe-gap notes exist for Base UI v0 rows.
- [ ] Every row has source registry readiness.
- [ ] Base UI v0 follow-up implementation plan files are created or explicitly covered by Plan 006.
- [ ] No cross-adapter parity requirement is introduced.
- [ ] `plans/README.md` status row updated.

## STOP conditions

Stop and report if:

- Upstream catalogs cannot be verified from package exports, official docs, or type declarations.
- The installed package versions differ materially from the package manifests or lockfile.
- A component cannot be classified without deciding a new product concept that belongs in `CONTEXT.md`.
- The matrix reveals a hard-to-reverse adapter boundary decision that should be captured in an ADR before continuing.

## Maintenance notes

Treat the catalog matrix as a living planning artifact. It should guide component creation and recipe work, but it should not become a promise of cross-adapter parity.
