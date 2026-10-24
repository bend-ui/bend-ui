# Base UI composition with Panda v2

BEN-33 validates the existing factory against Panda CSS 2.2.0 and Base UI
1.6.0. Keep the generated Panda contexts and Base UI's native composition model
(ADR-0001); a replacement universal factory is unnecessary for this slice.

## Context choices

| Boundary              | Context                                                         | Responsibility                                                                                                              |
| --------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Single recipe         | `createRecipeContext(recipe).withContext(Component)`            | Apply one recipe, merge `PropsProvider` defaults and forward refs.                                                          |
| Styled compound root  | `createSlotRecipeContext(recipe).withProvider(Component, slot)` | Consume variant props, style the root and provide styles to descendants. Button uses this.                                  |
| Non-DOM compound root | `createSlotRecipeContext(recipe).withRootProvider(Component)`   | Preserve upstream state/control props while providing slot styles without adding a DOM wrapper. Select and Dialog use this. |
| Compound part         | `withContext(Component, slot)`                                  | Read the nearest provider, apply its slot classes and forward the ref.                                                      |

Import both native context factories from `@bend-ui/styled-system/jsx`.
The `createRecipeContext` exported by `@bend-ui/core` and re-exported by
`@bend-ui/base-ui` is a legacy helper with a different `withProvider`/`withPart`
API. It is not Panda's single-recipe context. Existing attribute-only parts and
Dialog's Backdrop still use legacy `withParts`/`withRecipe`; BEN-33 does not
require a migration of every adapter.

The internal `createCompoundComponent`/`createButton` helpers also remain for
existing callers. Their slot definitions select `withProvider` or `withContext`
and accept default props; they do not expose non-DOM root providers or
`forwardProps`. Button, Select and Dialog already call Panda's native contexts
directly, which provide those capabilities. Keep that adapter pattern for these
components; no extension of the internal runtime factory is needed here.

## Prop ownership and composition

- Recipe variants belong to the provider. Button's `size` reaches Label and Icon
  through context and is consumed before rendering the DOM. Dialog's `size`
  belongs on `Dialog.Root` and styles the portalled Popup.
- Style props such as `padding` become classes. Native component props and
  event handlers remain upstream-owned. Use `forwardProps` for names that
  collide with style props or slot variants.
- For example, `withContext(RenderButton, { forwardProps: ['translate'] })`
  preserves HTML `translate="no"`. Put CSS translation in
  `css={{ translate: '1px' }}`. A slot provider with a boolean `disabled` variant
  uses `forwardProps: ['disabled']` to retain Base UI's disabled behavior as well
  as its slot styles.
- Use Base UI's `render` prop and `useRender` for element composition. Refs reach
  the rendered element, including a ref supplied on an element passed to
  `render`. Retain `nativeButton={false}` when composing Button onto an anchor.
- React context crosses portals. Select deliberately has separate control and
  dropdown recipes; the dropdown provider lives on Positioner. Dialog shares
  one root context with its portalled Positioner, Popup, Title and Description.
- Panda supplies wrapper display names such as `withContext(RenderButton)`.
  Keep explicit public component names where adapters already define them.
- **TypeScript limitation:** TS 6 reports TS2590 when comparing the complete
  single-recipe fixture signature with a forwarded style-name collision. A
  named interface equivalent to that signature also exceeds the union limit.
  The runtime fixture uses a local assertion to a small interface containing
  only its tested props. Factory options remain checked through explicit
  component/forwarded-key type parameters. This validates runtime forwarding;
  it does not establish that Panda's full inferred signature is usable in every
  consumer. Button, Select and Dialog retain their existing public types, and
  no new production type facade is introduced for this limitation.

## Verification

`packages/base-ui/src/components/factory.spec.tsx` renders real Panda contexts
and Base UI components without mocking them. It covers:

- Single-recipe context defaults, explicit overrides, native/style prop
  collisions, `useRender`, refs, default props and display names.
- A slot variant that also controls native disabled behavior through
  `forwardProps`, including inherited Label styling.
- Button compound parts, variant propagation, consumer classes, style-prop
  consumption, events and anchor composition.
- Select option selection, slot classes, Popup defaults, refs and a real portal.
- Dialog open/close, Button trigger composition, root variants across a real
  portal, accessible naming/description, Backdrop and Popup refs.

These are DOM and class-contract checks in jsdom. Actual CSS appearance and
floating geometry remain covered by the browser/Storybook workflow.

Run the focused suite with:

```sh
pnpm nx run base-ui:test --testFiles=src/components/factory.spec.tsx
pnpm nx run base-ui:typecheck
```
