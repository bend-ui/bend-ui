# Component catalog matrix

The single central document that tracks, per package adapter, how up to date each
Bend UI component is. It covers Base UI, Ark UI, and React Aria together and is the
source of truth for "how up to date are we."

For each component it records:

- **Product intent**: whether the component is in scope, and at what tier.
- **Status**: whether the component meets the definition of `implemented` below.
- **Criteria**: which of the five `implemented` criteria it meets, one column each.

API drift is caught by TypeScript when the upstream version is bumped (adapters
extend upstream prop types), recorded per adapter as a **verified against upstream vX**
marker below. There is no separate drift detector.

## Summary

Audited from source on **2026-11-15**. Every row was re-checked against the adapter's
`src/components/` folder, its spec files, and the Docs site pages. Earlier marks were
not carried over.

| Adapter                            | Rows | `implemented` | `partial` |
| ---------------------------------- | ---: | ------------: | --------: |
| Base UI (`@bend-ui/base-ui`)       |   51 |            16 |        35 |
| Ark UI (`@bend-ui/ark-ui`), frozen |   42 |             0 |        42 |
| React Aria (`@bend-ui/react-aria`) |   52 |             0 |        52 |

The Docs site documents only the Base UI adapter, so no Ark UI or React Aria component
can be `implemented` today.

## Legend

### Product intent

| Value                | Meaning                                                                      |
| -------------------- | ---------------------------------------------------------------------------- |
| `v0`                 | In the initial v0 slice (Base UI first).                                     |
| `planned`            | Intended, sequenced after the current focus.                                 |
| `defer`              | Deliberately postponed; not current investment.                              |
| `exclude`            | Explicitly not a target.                                                     |
| `primitive-only`     | Low-level layout/utility primitive, not a styled product component.          |
| `covered-by-pattern` | Delivered through an operational pattern rather than a standalone component. |

### Status

| Value         | Meaning                                                                      |
| ------------- | ---------------------------------------------------------------------------- |
| `missing`     | No adapter implementation.                                                   |
| `partial`     | Present in the adapter, but fails one or more of the five criteria below.    |
| `implemented` | Meets **all five** criteria: styled, prop-driven, typed, tested, documented. |

Being present and exported is not enough. A component is `implemented` only when every
criterion column shows `✓`. The same rule applies to `primitive-only` and
`covered-by-pattern` rows.

### Criteria

| Criterion       | Meets it when                                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Styled**      | The component applies a Panda recipe or the styled system (`createSlotRecipeContext`, `withRecipe`, a recipe function, or the `bend` JSX factory). A plain re-export or a bare wrapper of the upstream component is not styled.                                                                                                          |
| **Prop-driven** | It renders only what it is given. No hardcoded demo labels, items, or content, and consumer content such as `children` is not discarded.                                                                                                                                                                                                 |
| **Typed**       | The adapter exports a props type for it (`<Name>Props` or part props), extending the upstream props where an upstream component exists.                                                                                                                                                                                                  |
| **Tested**      | A `*.spec.tsx` or `*.test.tsx` renders and asserts on it. Shared specs count (for example `compositions.spec.tsx`, `forms.spec.tsx`, `overlays-navigation.spec.tsx`). An assertion that only checks `Component === Component.Root` does not count. A smoke render counts and is flagged in Notes. See [Testing conventions](testing.md). |
| **Documented**  | It has a page on the Docs site (`apps/website/content/docs/components/`), or is covered by a page about a closely related component (noted per row).                                                                                                                                                                                     |

`✓` = meets the criterion, `—` = does not.

**Storybook** (has a `*.stories.tsx`) is tracked as an extra signal. It is not one of
the five criteria. Appearing in an adapter demo app is not tracked per component.

## Base UI — `@bend-ui/base-ui` (`packages/base-ui`)

**Verified against upstream:** `@base-ui/react` `1.6.0`.

This is the v0 focus and the most complete adapter. It covers the current Base UI
primitive set and adds Bend-authored components that Base UI does not ship (Button,
Badge, Card, Table, IconButton, SegmentedControl, layout primitives, and the
AppShell/Sidebar operational patterns).

| Component        | Intent             | Status      | Styled | Prop-driven | Typed | Tested | Documented | Storybook | Notes                                                                  |
| ---------------- | ------------------ | ----------- | :----: | :---------: | :---: | :----: | :--------: | :-------: | ---------------------------------------------------------------------- |
| Accordion        | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| AlertDialog      | v0                 | partial     |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                                        |
| AppShell         | covered-by-pattern | partial     |   ✓    |      ✓      |   —   |   —    |     —      |     ✓     | Props type lives in `@bend-ui/core`; not re-exported.                  |
| Autocomplete     | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Avatar           | v0                 | partial     |   ✓    |      ✓      |   ✓   |   —    |     ✓      |     ✓     |                                                                        |
| Badge            | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Box              | primitive-only     | partial     |   ✓    |      ✓      |   ✓   |   —    |     —      |     —     |                                                                        |
| Button           | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Card             | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     —     |                                                                        |
| Checkbox         | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| CheckboxGroup    | v0                 | partial     |   —    |      ✓      |   ✓   |   ✓    |     —      |     ✓     | Bare upstream wrapper; test is a smoke render.                         |
| Collapsible      | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Combobox         | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| ContextMenu      | v0                 | partial     |   ✓    |      ✓      |   —   |   —    |     —      |     ✓     | Spec only checks `ContextMenu === ContextMenu.Root`.                   |
| Dialog           | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Drawer           | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Field            | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Fieldset         | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Form             | v0                 | partial     |   —    |      ✓      |   ✓   |   ✓    |     —      |     ✓     | Bare upstream wrapper; test is a smoke render.                         |
| Grid             | primitive-only     | partial     |   ✓    |      ✓      |   ✓   |   —    |     —      |     —     |                                                                        |
| Heading          | primitive-only     | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     —     | Shown on the Components overview page, no page of its own.             |
| IconButton       | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     —     | Documented on the Button page.                                         |
| Input            | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Menu             | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Menubar          | v0                 | partial     |   ✓    |      ✓      |   —   |   ✓    |     —      |     ✓     | Test is a smoke render.                                                |
| Meter            | v0                 | partial     |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                                        |
| NavigationMenu   | v0                 | partial     |   ✓    |      ✓      |   —   |   ✓    |     ✓      |     ✓     | Documented on the Navigation page.                                     |
| NumberField      | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Paragraph        | primitive-only     | partial     |   ✓    |      ✓      |   ✓   |   —    |     —      |     —     |                                                                        |
| Patterns         | covered-by-pattern | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Popover          | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| PreviewCard      | v0                 | partial     |   ✓    |      ✓      |   —   |   —    |     —      |     ✓     | Spec only checks `PreviewCard === PreviewCard.Root`.                   |
| Progress         | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Radio            | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| ScrollArea       | v0                 | partial     |   ✓    |      ✓      |   ✓   |   —    |     ✓      |     ✓     |                                                                        |
| SegmentedControl | v0                 | partial     |   ✓    |      ✓      |   —   |   —    |     —      |     ✓     |                                                                        |
| Select           | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Separator        | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Sidebar          | covered-by-pattern | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Slider           | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Stack            | primitive-only     | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     —     |                                                                        |
| Switch           | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Table            | v0                 | partial     |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                                        |
| Tabs             | v0                 | partial     |   ✓    |      ✓      |   —   |   ✓    |     ✓      |     ✓     |                                                                        |
| Text             | primitive-only     | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     —     |                                                                        |
| Textarea         | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |
| Toast            | v0                 | partial     |   ✓    |      ✓      |   —   |   —    |     —      |     ✓     | Exports `ToastComponent`, not a props type; spec only checks identity. |
| Toggle           | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     | Test is a smoke render.                                                |
| ToggleGroup      | v0                 | partial     |   ✓    |      ✓      |   —   |   ✓    |     —      |     ✓     | Test is a smoke render.                                                |
| Toolbar          | v0                 | partial     |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                                        |
| Tooltip          | v0                 | implemented |   ✓    |      ✓      |   ✓   |   ✓    |     ✓      |     ✓     |                                                                        |

**Base UI summary:** 16 of 51 components implemented. The rest are `partial`:

- Missing only a Docs page: Accordion, Autocomplete, Collapsible, Combobox, Drawer,
  Fieldset, Heading, NumberField, Patterns, Progress, Sidebar, Slider, Stack, Text,
  Toggle, Toolbar.
- Missing only a test: Avatar, ScrollArea.
- Missing only an exported props type: NavigationMenu, Tabs.
- Failing more than one criterion: AlertDialog, Box, Grid, Meter, Paragraph, Table
  (test, docs); Menubar, ToggleGroup (props type, docs); AppShell, ContextMenu,
  PreviewCard, SegmentedControl, Toast (props type, test, docs); CheckboxGroup, Form
  (styling, docs).

## Ark UI — `@bend-ui/ark-ui` (`packages/ark-ui`)

> **Experimental and frozen** (decision D1). Keep it building and tested. Do not add
> components or invest in it unless that decision changes. Product intent is `defer`
> for every non-primitive, non-pattern row.

**Verified against upstream:** `@ark-ui/react` `^5.37.2`.

| Component   | Intent             | Status  | Styled | Prop-driven | Typed | Tested | Documented | Storybook | Notes                                                 |
| ----------- | ------------------ | ------- | :----: | :---------: | :---: | :----: | :--------: | :-------: | ----------------------------------------------------- |
| Accordion   | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| AngleSlider | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     | Spec only checks `AngleSlider === AngleSlider.Root`.  |
| AppShell    | covered-by-pattern | partial |   ✓    |      ✓      |   —   |   —    |     —      |     —     | Props type lives in `@bend-ui/core`; not re-exported. |
| Avatar      | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| Button      | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     —     |                                                       |
| Carousel    | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     | Spec only checks identity.                            |
| Checkbox    | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| ClientOnly  | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| Clipboard   | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| Collapsible | defer              | partial |   —    |      ✓      |   —   |   ✓    |     —      |     ✓     | Bare upstream re-export.                              |
| Collection  | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| ColorPicker | defer              | partial |   —    |      ✓      |   —   |   —    |     —      |     ✓     | Bare upstream re-export; spec only checks identity.   |
| Combobox    | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Command     | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| DatePicker  | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     | Spec only checks identity.                            |
| Dialog      | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Drawer      | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Editable    | defer              | partial |   —    |      ✓      |   —   |   —    |     —      |     ✓     | Bare upstream re-export; spec only checks identity.   |
| Environment | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| Field       | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Fieldset    | defer              | partial |   —    |      ✓      |   —   |   —    |     —      |     ✓     | Bare upstream re-export; spec only checks identity.   |
| FileUpload  | defer              | partial |   —    |      ✓      |   —   |   —    |     —      |     ✓     | Bare upstream re-export; spec only checks identity.   |
| FocusTrap   | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| Format      | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| HoverCard   | defer              | partial |   —    |      ✓      |   ✓   |   ✓    |     —      |     ✓     | Composes upstream parts with no recipe.               |
| Input       | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     —     |                                                       |
| Locale      | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| Menu        | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| Pagination  | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| Popover     | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Portal      | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| Presence    | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain upstream re-export.                             |
| RadioGroup  | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| ScrollArea  | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     —     |                                                       |
| Select      | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |
| Sidebar     | covered-by-pattern | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Switch      | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Tabs        | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Toast       | defer              | partial |   ✓    |      ✓      |   ✓   |   —    |     —      |     ✓     |                                                       |
| Toggle      | defer              | partial |   —    |      ✓      |   —   |   —    |     —      |     ✓     | Bare upstream re-export; spec only checks identity.   |
| ToggleGroup | defer              | partial |   ✓    |      ✓      |   —   |   —    |     —      |     ✓     | Spec only checks identity.                            |
| Tooltip     | defer              | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     |                                                       |

**Ark UI summary:** 0 of 42 components implemented. No Ark UI component has a Docs
page. Ten rows miss only that page: Avatar, Button, Checkbox, Clipboard, Command,
Input, Menu, Pagination, Select, Tooltip. Rows marked "bare upstream re-export" expose
the upstream component without a recipe.

**Style-context audit (2026-07-19):** Every Ark UI component that imports a
generated recipe now uses the generated `createSlotRecipeContext` contract. The
remaining `withRecipe` uses apply only the regular backdrop recipe, and the
remaining `withParts` uses are parts that are not generated recipe slots.

## React Aria — `@bend-ui/react-aria` (`packages/react-aria`)

**Verified against upstream:** `react-aria-components` `^1.19.0`.

Sequenced after the Base UI v0 slice; a dedicated React Aria demo app is added when the
adapter is prioritized. The full missing-vs-upstream audit is pending. Most rows are
plain `react-aria-components` re-exports: they are neither styled nor typed by Bend UI,
so they cannot be `implemented`.

| Component         | Intent             | Status  | Styled | Prop-driven | Typed | Tested | Documented | Storybook | Notes                                                                               |
| ----------------- | ------------------ | ------- | :----: | :---------: | :---: | :----: | :--------: | :-------: | ----------------------------------------------------------------------------------- |
| AppShell          | covered-by-pattern | partial |   ✓    |      ✓      |   —   |   —    |     —      |     —     | Uses the `@bend-ui/core` app shell recipe; props type not re-exported.              |
| Autocomplete      | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Button            | planned            | partial |   ✓    |      ✓      |   ✓   |   ✓    |     —      |     ✓     | Spec is a bare smoke render.                                                        |
| Calendar          | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Checkbox          | planned            | partial |   ✓    |      —      |   ✓   |   ✓    |     —      |     ✓     | Discards `children`: the label passed by the consumer is replaced by the indicator. |
| ColorArea         | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ColorField        | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ColorPicker       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ColorSlider       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ColorSwatch       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ColorSwatchPicker | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ColorWheel        | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ComboBox          | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| DateField         | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| DatePicker        | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| DateRangePicker   | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Dialog            | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Disclosure        | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| DropZone          | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| FileTrigger       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Form              | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| GridList          | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Group             | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Hooks             | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Label             | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Link              | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ListBox           | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Menu              | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Meter             | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| NumberField       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Popover           | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Primitives        | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ProgressBar       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Providers         | primitive-only     | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| RadioGroup        | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| RangeCalendar     | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| SearchField       | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Select            | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Separator         | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Slider            | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Switch            | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Table             | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Tabs              | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| TagGroup          | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| TextArea          | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| TextField         | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| TimeField         | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Toast             | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| ToggleButton      | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Toolbar           | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Tooltip           | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |
| Tree              | planned            | partial |   —    |      ✓      |   —   |   —    |     —      |     —     | Plain `react-aria-components` re-export.                                            |

**React Aria summary:** 0 of 52 components implemented. Only Button and Checkbox apply
a recipe, and neither has a Docs page. The remaining rows are upstream re-exports or
the core app shell.

## How to update

- When you add, change, or remove a component, update its row (or add one) in the
  relevant adapter table in the same change. Set the status to `implemented` only when
  all five criteria columns are `✓`, and update the summary counts.
- When you bump an upstream version, re-check the adapter against the upstream component
  list, resolve any TypeScript prop-type breakage, and update that adapter's
  **verified against upstream** marker.
- Keep the vocabulary aligned with `CONTEXT.md`. If you need a new intent or status
  value, add it to `CONTEXT.md` first, then use it here.
