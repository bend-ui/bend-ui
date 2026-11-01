# Contextual surfaces across portals (BEN-36)

The opt-in `SurfaceProvider` in `@bend-ui/base-ui` carries a logical visual scope through the React tree. A Dialog or Popover popup can then resolve its visual level after moving to a different DOM container. This prototype separates visual elevation from stacking order: it never assigns a `z-index`, changes a portal target, or replaces Base UI's focus and dismissal behavior.

## Existing system and boundary

The [Design preset layer styles](../packages/preset/src/layerStyles.ts) already provide surface backgrounds, borders and shadows. [Dialog](../packages/preset/src/recipes/dialog.ts) and [Popover](../packages/preset/src/recipes/popover.ts) recipes use `surface.overlay`. The operational [Surface](../packages/base-ui/src/components/Patterns/Patterns.tsx) also keeps its existing `elevation="none" | "raised"` recipe convention.

Those CSS rules alone do not preserve arbitrary DOM inheritance after a portal mounts elsewhere. React context does preserve logical ancestry. [SurfaceContext](../packages/base-ui/src/components/SurfaceContext/SurfaceContext.tsx) uses that distinction without reading computed styles or requiring a browser during render.

Existing consumers that do not select contextual behavior retain their recipe treatment. This is a Base UI prototype; Ark UI and React Aria portal adapters are outside its scope.

## Configuration

```tsx
import { Dialog, Surface, SurfaceProvider } from '@bend-ui/base-ui';

<SurfaceProvider
  level="page"
  theme="my-brand"
  colorMode="dark"
  surfaces={{
    raised: { backgroundColor: 'var(--colors-bg-raised)' },
    overlay: { boxShadow: '0 16px 40px rgb(0 0 0 / 0.25)' },
  }}
>
  <Surface contextual surfaceLevel="page">
    <Dialog.Root>
      <Dialog.Trigger>Open settings</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Positioner>
          <Dialog.Popup>
            <Dialog.Title>Settings</Dialog.Title>
            <Dialog.Description>Uses the raised visual scope.</Dialog.Description>
          </Dialog.Popup>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  </Surface>
</SurfaceProvider>;
```

`SurfaceProvider` renders no DOM node. Its `level` defaults to the enclosing provider's level, or `page`. Nested providers inherit unspecified appearance fields and merge explicit fields per level. `theme` and `colorMode` are explicit context values: pass them when portalled content must replay a Panda Theme or mode boundary that exists only around the trigger. The provider does not discover ambient DOM attributes, copy arbitrary CSS variables, or infer the user's color-mode preference.

The exported `SurfaceLevel` values are `page`, `raised` and `overlay`. A contextual descendant advances from `page` to `raised`, then to `overlay`; deeper descendants remain at `overlay`. `surfaceLevel` selects a specific level when automatic advancement is inappropriate. The example pins the outer Surface to `page` so the dialog advances once to `raised`.

`Surface` opts in with `contextual` or an explicit `surfaceLevel`. Dialog and Popover popups inside a provider participate automatically and provide the resolved scope to their React descendants, including nested portals. A popup outside a provider retains its existing treatment unless it explicitly selects a level.

`SurfaceAppearance` accepts `backgroundColor`, `color`, `borderColor` and `boxShadow` CSS values. Defaults reference existing semantic variables for the chosen background, text and border, plus the existing shadow variable. These are semantic roles rather than a generated depth palette: the bundled `bg.raised` and `bg.overlay` currently resolve to the same neutral step. Consumers can provide distinct appearances where the composition needs a stronger difference.

Explicit component `style` values take precedence over contextual appearance values. Existing class names and supported Base UI style/class callbacks remain available. The `theme` attribute and color-mode class are replayed on each contextual DOM surface, allowing the configured CSS variables to resolve locally after a portal changes DOM ancestry. Keep custom variables declared in that replayable Theme/mode scope; values declared only on an unrelated ancestor are not magically transported.

## Representative consumer proof

The isolated [configuration](../tools/fixtures/panda-consumer/surface-scenarios/panda.surfaces.config.ts) defines a `surface-proof` Theme with mode-specific background, text and border values. The [app](../tools/fixtures/panda-consumer/surface-scenarios/app.tsx) selects those variables through the provider's appearance map and renders:

- A page Surface and explicitly raised child Surface.
- A real portalled Dialog, with a nested Popover and nested Dialog.
- An explicitly selected page-level popup with a consumer style override.
- A Dialog portalled to a custom target outside the provider's DOM subtree.

The proof chooses neutral backgrounds with distinct lightness steps; it does not replace any default palette.

| Role    | Light             | Dark              |
| ------- | ----------------- | ----------------- |
| Page    | `oklch(0.98 0 0)` | `oklch(0.15 0 0)` |
| Raised  | `oklch(0.92 0 0)` | `oklch(0.22 0 0)` |
| Overlay | `oklch(0.86 0 0)` | `oklch(0.29 0 0)` |
| Text    | `oklch(0.15 0 0)` | `oklch(0.98 0 0)` |

Page, raised and overlay select progressively different shadows. Explicit test `z-index` values remain 41, 73 and 91 while visual levels change independently. No numeric depth value is used to derive stacking order.

## Validation evidence

The Base UI suite passes 26 tests across eight files, including eight contextual-surface regressions. Coverage includes legacy opt-in behavior, nested depth capping, real body and custom-container portals, forwarded refs and events, class/style callbacks, consumer overrides, and dynamic context changes. Server rendering is deterministic; a `hydrateRoot` regression reports no recoverable hydration mismatches and mounts the dialog portal after hydration. Base UI lint passes with 21 existing warnings. Library and specification typechecks pass, and final declaration generation passes with Panda style props and Base UI state callbacks retained on both popup APIs.

The isolated consumer passes installation from fresh package tarballs, TypeScript checking, Panda generation, a Vite production build and Chromium verification in both modes. The browser verifies logical levels, distinct backgrounds and shadows, body and custom-target portal ancestry, and the preserved explicit `z-index` values. All 14 sampled text/background pairs exceed 4.5:1; their measured range is 9.2961:1–18.5333:1.

| Sample            | Light contrast | Dark contrast |
| ----------------- | -------------- | ------------- |
| Page              | 18.5333:1      | 18.5333:1     |
| Raised            | 15.4803:1      | 16.2186:1     |
| Overlay           | 12.8893:1      | 13.3322:1     |
| Consumer override | 9.2961:1       | 9.2961:1      |

The verifier measures resolved browser colors; the seven surfaces in each mode include the body-portalled and custom-target content. These representative colors and measured text pairs establish the scope of the proof. They do not establish overall accessibility conformance or verify every recipe state.
