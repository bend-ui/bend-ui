# Base UI Component TODOs

Small component improvements noticed while wiring the dental-management demo.
Keep these as independent follow-up slices so each can be designed, tested, and
documented on its own.

## 1. Align `Dialog.Trigger` With `Button`

- Merge `DialogPrimitive.Trigger.Props` with the visual `ButtonProps` type.
- Support common button props such as `icon`, `variant`, and sizing without
  requiring callers to hand-compose trigger content.
- Add a story showing an icon trigger and a text trigger.

## 2. Improve `Avatar` Ergonomics

- Add first-class `alt`, `fallback`, `size`, and possibly `shape` props.
- Ensure images fill the avatar with `object-fit: cover`.
- Generate accessible initials fallback examples in Storybook.

## 3. Add A Recipe-Backed `Badge`

- Create a small status/label component for operational UI.
- Start with tones such as `neutral`, `success`, `warning`, `danger`, and
  `info`.
- Use it in examples for patient status, invoice status, and table metadata.

## 4. Add A Styled `Table` Wrapper

- Provide `Table.Root`, `Table.Header`, `Table.Body`, `Table.Row`,
  `Table.Cell`, and `Table.HeaderCell`.
- Include density variants for data-heavy admin screens.
- Add stories for selectable rows, trailing actions, and status cells.

## 5. Tighten `ScrollArea` Defaults

- Review root, viewport, and content sizing defaults after the child-rendering
  fix.
- Make common `height: 100%` usage work without page-level guesswork.
- Add stories for constrained panels, sidebars, and table/list content.

## 6. Document Layout Patterns For `Input`

- Add examples that show inputs inside layout wrappers for width control.
- Consider an `InputGroup` or search-field composition if repeated in demos.
- Keep layout concerns outside the core `Input` implementation.

## 7. Add A Shared Surface Pattern

- Explore a recipe-backed surface/card variant for dark operational screens.
- Capture common panel styling: background, radius, inset highlight, and soft
  shadow.
- Use it to reduce repeated page-level Panda props in demos.

## 8. Add Segmented Filter Controls

- Create a compact segmented control pattern for table filters and queue tabs.
- Support controlled/uncontrolled active value, icon-less text tabs, and dense
  dashboard sizing.
- Use it for patient queue filters, billing status filters, and approval queue
  tabs.

## 9. Add A Metric/KPI Card Pattern

- Provide a small recipe-backed metric card for dashboard totals.
- Include slots for icon, value, label, detail, and optional trend/tone.
- Add examples for active patients, revenue, appointment counts, and alerts.

## 10. Add Timeline/List Item Patterns

- Create reusable primitives or examples for appointment timelines and
  operational list rows.
- Cover leading time/avatar/icon, title, description, metadata, and status
  action areas.
- Use it to reduce hand-built schedule rows and patient queue rows.

## 11. Add Action Row / Button List Examples

- Document full-width action rows built from `Box asChild` and native buttons.
- Consider a small `ActionItem` component if this pattern repeats in dashboards,
  command panels, and quick-action sections.
- Ensure button-style composition does not leak Panda-only props to DOM nodes.

## 12. Document Responsive Panda Prop Limits

- Add notes or examples for layout-critical responsive grid values.
- Show when to prefer Panda props, generated recipes, or explicit `style` for
  dynamic/complex `gridTemplateColumns` values.
- Include a reminder to run `pnpm nx run vite-base-ui:prepare` after adding new
  Panda class patterns to demos.
