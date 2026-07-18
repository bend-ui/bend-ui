# Component catalog matrix

The single central document that tracks, per package adapter, how up to date each
Bend UI component is. It covers Base UI, Ark UI, and React Aria together and is the
source of truth for "how up to date are we."

For each component it records three axes:

- **Product intent** — whether the component is in scope, and at what tier.
- **Implementation progress** — how far the adapter implementation has gotten.
- **Quality coverage** — how well the component is verified and shown.

API drift is caught by TypeScript when the upstream version is bumped (adapters
extend upstream prop types), recorded per adapter as a **verified against upstream vX**
marker below. There is no separate drift detector.

> **Seed status.** This matrix was seeded on 2026-07-18 from an audit of the adapter
> `src/components/` folders against upstream component lists. Rows reflect what exists
> on disk plus measurable signals (Storybook stories, unit/spec tests, docs pages).
> Product-intent tiers are a first-draft classification and should be refined as
> product decisions land. Update a row whenever you touch a component.

## Legend

### Product intent

| Value | Meaning |
|---|---|
| `v0` | In the initial v0 slice (Base UI first). |
| `planned` | Intended, sequenced after the current focus. |
| `defer` | Deliberately postponed; not current investment. |
| `exclude` | Explicitly not a target. |
| `primitive-only` | Low-level layout/utility primitive, not a styled product component. |
| `covered-by-pattern` | Delivered through an operational pattern rather than a standalone component. |

### Implementation progress

| Value | Meaning |
|---|---|
| `missing` | No adapter implementation. |
| `partial` | Present but incomplete (missing parts, variants, or wiring). |
| `implemented` | Present and exported from the adapter. |

### Quality coverage

Coverage is tracked as independent signals rather than a single rung, mapping to the
`untested` → `tested` → `storybook` → `documented` → `demoed` ladder:

- **Tested** — has a unit/spec test (`*.test.tsx` / `*.spec.tsx`). A component with no
  test and nothing else is `untested`.
- **Storybook** — has a `*.stories.tsx` in Storybook.
- **Documented** — has a page on the Docs site (`apps/website`).
- **Demoed** — appears in an adapter demo app. _Not yet tracked per component; the Base
  UI demo (`apps/vite-base-ui`) exercises many components but the mapping has not been
  audited._

`✓` = present, `—` = absent.

## Base UI — `@bend-ui/base-ui` (`packages/base-ui`)

**Verified against upstream:** `@base-ui/react` `1.6.0`.

This is the v0 focus and the most complete adapter. It covers the current Base UI
primitive set and adds Bend-authored components that Base UI does not ship (Button,
Badge, Card, Table, IconButton, SegmentedControl, layout primitives, and the
AppShell/Sidebar operational patterns).

| Component | Intent | Progress | Tested | Storybook | Documented |
|---|---|---|:--:|:--:|:--:|
| Accordion | v0 | implemented | ✓ | ✓ | — |
| AlertDialog | v0 | implemented | — | ✓ | — |
| AppShell | covered-by-pattern | implemented | — | ✓ | — |
| Autocomplete | v0 | implemented | — | ✓ | — |
| Avatar | v0 | implemented | — | ✓ | ✓ |
| Badge | v0 | implemented | — | ✓ | — |
| Box | primitive-only | implemented | — | — | — |
| Button | v0 | implemented | ✓ | ✓ | ✓ |
| Card | v0 | implemented | — | — | — |
| Checkbox | v0 | implemented | — | ✓ | — |
| CheckboxGroup | v0 | implemented | — | ✓ | — |
| Collapsible | v0 | implemented | — | ✓ | — |
| Combobox | v0 | implemented | — | ✓ | — |
| ContextMenu | v0 | implemented | — | ✓ | — |
| Dialog | v0 | implemented | — | ✓ | — |
| Drawer | v0 | implemented | — | ✓ | — |
| Field | v0 | implemented | — | ✓ | — |
| Fieldset | v0 | implemented | — | ✓ | — |
| Form | v0 | implemented | — | ✓ | — |
| Grid | primitive-only | implemented | — | — | — |
| Heading | primitive-only | implemented | — | — | — |
| IconButton | v0 | implemented | — | — | — |
| Input | v0 | implemented | — | ✓ | — |
| Menu | v0 | implemented | — | ✓ | — |
| Menubar | v0 | implemented | — | ✓ | — |
| Meter | v0 | implemented | — | ✓ | — |
| NavigationMenu | v0 | implemented | — | ✓ | — |
| NumberField | v0 | implemented | — | ✓ | — |
| Paragraph | primitive-only | implemented | — | — | — |
| Patterns | covered-by-pattern | implemented | — | ✓ | — |
| Popover | v0 | implemented | — | ✓ | — |
| PreviewCard | v0 | implemented | — | ✓ | — |
| Progress | v0 | implemented | — | ✓ | — |
| Radio | v0 | implemented | — | ✓ | — |
| ScrollArea | v0 | implemented | — | ✓ | — |
| SegmentedControl | v0 | implemented | — | ✓ | — |
| Select | v0 | implemented | — | ✓ | — |
| Separator | v0 | implemented | — | ✓ | — |
| Sidebar | covered-by-pattern | implemented | — | ✓ | — |
| Slider | v0 | implemented | — | ✓ | — |
| Stack | primitive-only | implemented | — | — | — |
| Switch | v0 | implemented | — | ✓ | — |
| Table | v0 | implemented | — | ✓ | — |
| Tabs | v0 | implemented | — | ✓ | — |
| Text | primitive-only | implemented | — | — | — |
| Toast | v0 | implemented | — | ✓ | — |
| Toggle | v0 | implemented | — | ✓ | — |
| ToggleGroup | v0 | implemented | — | ✓ | — |
| Toolbar | v0 | implemented | — | ✓ | — |
| Tooltip | v0 | implemented | — | ✓ | — |

**Base UI summary:** 50 components implemented · 2 tested · 42 with Storybook · 2 documented.
Biggest gaps: unit tests (only Accordion and Button) and Docs-site pages (only Avatar and
Button). Untested/unstoried items are layout/typography primitives plus Card and IconButton.

## Ark UI — `@bend-ui/ark` (`packages/ark`)

> **Pending rename (issue #110):** this adapter is scheduled to become
> `@bend-ui/ark-ui` (`packages/ark-ui`), which is why `CONTEXT.md` already uses the
> target name. Update this heading and package references once the rename lands.

**Verified against upstream:** `@ark-ui/react` `^5.37.2`.

Sequenced after the Base UI v0 slice. Keep it building, but do not invest until Ark UI
adapter work resumes. The full missing-vs-upstream audit is pending; rows below reflect
what is implemented today.

| Component | Intent | Progress | Tested | Storybook | Documented |
|---|---|---|:--:|:--:|:--:|
| Accordion | planned | implemented | — | ✓ | — |
| AngleSlider | planned | implemented | — | ✓ | — |
| AppShell | covered-by-pattern | implemented | — | — | — |
| Avatar | planned | implemented | ✓ | ✓ | — |
| Button | planned | implemented | — | — | — |
| Carousel | planned | implemented | — | ✓ | — |
| Checkbox | planned | implemented | — | ✓ | — |
| ClientOnly | primitive-only | implemented | — | — | — |
| Clipboard | planned | implemented | — | ✓ | — |
| Collapsible | planned | implemented | — | ✓ | — |
| Collection | primitive-only | implemented | — | — | — |
| ColorPicker | planned | implemented | — | ✓ | — |
| Combobox | planned | implemented | — | ✓ | — |
| Command | planned | implemented | — | ✓ | — |
| DatePicker | planned | implemented | — | ✓ | — |
| Dialog | planned | implemented | — | ✓ | — |
| Drawer | planned | implemented | — | ✓ | — |
| Editable | planned | implemented | — | ✓ | — |
| Environment | primitive-only | implemented | — | — | — |
| Field | planned | implemented | — | ✓ | — |
| Fieldset | planned | implemented | — | ✓ | — |
| FileUpload | planned | implemented | — | ✓ | — |
| FocusTrap | primitive-only | implemented | — | — | — |
| Format | primitive-only | implemented | — | — | — |
| HoverCard | planned | implemented | — | ✓ | — |
| Input | planned | implemented | — | — | — |
| Locale | primitive-only | implemented | — | — | — |
| Menu | planned | implemented | — | ✓ | — |
| Pagination | planned | implemented | — | ✓ | — |
| Popover | planned | implemented | — | ✓ | — |
| Portal | primitive-only | implemented | — | — | — |
| Presence | primitive-only | implemented | — | — | — |
| RadioGroup | planned | implemented | — | ✓ | — |
| ScrollArea | planned | implemented | — | — | — |
| Select | planned | implemented | — | ✓ | — |
| Sidebar | covered-by-pattern | implemented | — | ✓ | — |
| Switch | planned | implemented | — | ✓ | — |
| Tabs | planned | implemented | — | ✓ | — |
| Toast | planned | implemented | — | ✓ | — |
| Toggle | planned | implemented | — | ✓ | — |
| ToggleGroup | planned | implemented | — | ✓ | — |
| Tooltip | planned | implemented | — | ✓ | — |

**Ark UI summary:** 42 components implemented · 1 tested · 30 with Storybook · 0 documented.

## React Aria — `@bend-ui/aria` (`packages/aria`)

> **Pending rename (issue #110):** this adapter is scheduled to become
> `@bend-ui/react-aria` (`packages/react-aria`), which is why `CONTEXT.md` already uses
> the target name. Update this heading and package references once the rename lands.

**Verified against upstream:** `react-aria-components` `^1.19.0`.

Sequenced after the Base UI v0 slice; a dedicated React Aria demo app is added when the
adapter is prioritized. The full missing-vs-upstream audit is pending; rows below reflect
what is implemented today.

| Component | Intent | Progress | Tested | Storybook | Documented |
|---|---|---|:--:|:--:|:--:|
| AppShell | covered-by-pattern | implemented | — | — | — |
| Autocomplete | planned | implemented | — | — | — |
| Breadcrumbs | planned | implemented | ✓ | ✓ | — |
| Button | planned | implemented | ✓ | ✓ | — |
| Calendar | planned | implemented | — | — | — |
| Checkbox | planned | implemented | ✓ | ✓ | — |
| CheckboxGroup | planned | implemented | ✓ | ✓ | — |
| ColorArea | planned | implemented | — | — | — |
| ColorField | planned | implemented | — | — | — |
| ColorPicker | planned | implemented | — | — | — |
| ColorSlider | planned | implemented | — | — | — |
| ColorSwatch | planned | implemented | — | — | — |
| ColorSwatchPicker | planned | implemented | — | — | — |
| ColorWheel | planned | implemented | — | — | — |
| ComboBox | planned | implemented | — | — | — |
| DateField | planned | implemented | — | — | — |
| DatePicker | planned | implemented | — | — | — |
| DateRangePicker | planned | implemented | — | — | — |
| Dialog | planned | implemented | — | — | — |
| Disclosure | planned | implemented | — | — | — |
| DropZone | planned | implemented | — | — | — |
| FileTrigger | planned | implemented | — | — | — |
| Form | planned | implemented | — | — | — |
| GridList | planned | implemented | — | — | — |
| Group | primitive-only | implemented | — | — | — |
| Hooks | primitive-only | implemented | — | — | — |
| Input | planned | implemented | ✓ | ✓ | — |
| Label | primitive-only | implemented | — | — | — |
| Link | planned | implemented | — | — | — |
| ListBox | planned | implemented | — | — | — |
| Menu | planned | implemented | — | — | — |
| Meter | planned | implemented | — | — | — |
| Modal | planned | implemented | ✓ | ✓ | — |
| NumberField | planned | implemented | — | — | — |
| Popover | planned | implemented | — | — | — |
| Primitives | primitive-only | implemented | — | — | — |
| ProgressBar | planned | implemented | — | — | — |
| Providers | primitive-only | implemented | — | — | — |
| Radio | planned | implemented | ✓ | ✓ | — |
| RadioGroup | planned | implemented | — | — | — |
| RangeCalendar | planned | implemented | — | — | — |
| SearchField | planned | implemented | — | — | — |
| Select | planned | implemented | — | — | — |
| Separator | planned | implemented | — | — | — |
| Slider | planned | implemented | — | — | — |
| Switch | planned | implemented | — | — | — |
| Table | planned | implemented | — | — | — |
| Tabs | planned | implemented | — | — | — |
| TagGroup | planned | implemented | — | — | — |
| TextArea | planned | implemented | — | — | — |
| TextField | planned | implemented | — | — | — |
| TimeField | planned | implemented | — | — | — |
| Toast | planned | implemented | — | — | — |
| ToggleButton | planned | implemented | — | — | — |
| Toolbar | planned | implemented | — | — | — |
| Tooltip | planned | implemented | — | — | — |
| Tree | planned | implemented | — | — | — |

**React Aria summary:** 57 components implemented · 7 tested · 7 with Storybook · 0 documented.

## Ariakit — `@bend-ui/ariakit` (`packages/ariakit`)

Parked. Not a current support target unless explicitly revived (upstream
`@ariakit/react` `^0.4.34`). Only `AppShell` and `Select` exist; not tracked here.

## How to update

- When you add, change, or remove a component, update its row (or add one) in the
  relevant adapter table in the same change.
- When you bump an upstream version, re-check the adapter against the upstream component
  list, resolve any TypeScript prop-type breakage, and update that adapter's
  **verified against upstream** marker.
- Keep the vocabulary aligned with `CONTEXT.md`. If you need a new intent or coverage
  value, add it to `CONTEXT.md` first, then use it here.
