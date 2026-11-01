# Interaction states and surface treatments (BEN-37)

The Design preset owns visual state values. Recipes consume the role-first token names established in [BEN-34](token-architecture.md), using the adapter-independent selectors in [ADR-0002](adr/0002-canonical-state-attribute-contract.md). The Structural preset and the React adapters keep their existing anatomy and behavior.

## Semantic roles

| Intent                | Tokens                                               | Contract                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Opaque surface        | `bg.page`, `bg.raised`, `bg.overlay`, `bg.sunken`    | Backgrounds describe visual elevation; no stacking order is implied.                                                                                                                |
| Solid neutral control | `fill`, `fill.hover`, `fill.active`, `fill.selected` | Rest, hover, press and persistent selection. Selected neutral fill uses step 300, preserving readable `text` in both modes.                                                         |
| Primary control       | `fill.primary`, `.hover`, `.active`, `.selected`     | Baseline steps 600/700/800/700 paired with `text.primary.inverse.strong`. Themes can override these roles and their foreground.                                                     |
| Danger control        | `fill.danger`, `.hover`, `.active`, `.selected`      | Baseline steps 700/800/900/800 paired with `text.danger.inverse.strong`.                                                                                                            |
| Translucent control   | `fill.translucent`, `.hover`, `.active`, `.selected` | Mix `text` at 8/12/16/20% into transparent in sRGB. The alpha affects the fill only; children retain full opacity.                                                                  |
| Boundary              | `stroke.weak`, `stroke.strong`                       | Weak structural edge for surfaces; strong boundary shared by solid and outline Inputs. The outline variant also adds a shadow.                                                      |
| Keyboard focus        | `stroke.focus`, layer style `focus`                  | Opaque 2px solid outline, offset 2px. Menu items inset the outline by 2px to keep it inside the popup.                                                                              |
| Unavailable           | opacity `state.disabled`, cursor `disabled`          | Existing 0.5 opacity and not-allowed cursor; enabled-only hover/press/selection rules do not apply. Disabled semantics and event suppression remain the primitive's responsibility. |
| Invalid               | border `danger`                                      | Root or nested Input invalid state keeps the danger boundary, including on hover.                                                                                                   |

Tone-first aliases remain compatible with role-first overrides. The historical `fill.primary.fill.hover` token remains available, but Button now uses the canonical `fill.primary.hover` spelling. `fill.*.focus` remains available for compatibility; focus is a separate outline rather than a fill replacement.

A Theme may replace the primary palette with a pale yellow or green. It must also provide a suitable on-primary foreground and state fills. Baseline state values do not establish contrast for arbitrary consumer themes.

## State mapping and combinations

| Condition                | Examples matched by ADR-0002                                                   | Treatment                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `_hover`                 | `:hover`, `data-hovered`                                                       | Temporary pointer feedback.                                                                                                                                                                |
| `_active` / `_pressed`   | `:active`, `data-active`, `data-pressed`, `aria-pressed="true"`                | Press fill. `_pressed` may represent a persistent toggle; only `_active` receives Button's motion.                                                                                         |
| `_selected` / `_checked` | `data-selected`, `aria-selected="true"`, `data-checked`, `aria-checked="true"` | Persistent selected fill; Menu selection also retains its native indicator.                                                                                                                |
| `_highlighted`           | `data-highlighted`                                                             | Menu keyboard navigation uses the hover fill even when the pointer is elsewhere. Checked/selected items retain their selection fill while highlighted; press temporarily takes precedence. |
| `_focusVisible`          | `:focus-visible`, `data-focus-visible`                                         | Focus outline coexists with fill and shadow.                                                                                                                                               |
| `_disabled`              | `:disabled`, `data-disabled`, `aria-disabled="true"`                           | Excludes enabled-only interaction rules.                                                                                                                                                   |

Pointer hover fills are gated by `@media (hover: hover)`; Menu keyboard highlighting remains available on every device.

Focus is additive: it never clears the surface's shadow or changes the control's fill. Selection and press can coexist with focus. Menu checkbox/radio indicators supply a non-color cue for persistent selection. Button's 0.96 active scale runs only under `prefers-reduced-motion: no-preference`; the fill remains the static press cue.

Input is compound: Base UI places `disabled`, read-only and invalid state on the actual input, while the root owns the boundary. Recipe-local `:has(input:…)` selectors let those states reach the root without adding adapter state synchronization. Root `_disabled` / `_invalid` remain supported. The shared border lives in the base recipe: a variant border shorthand would override state borders through Panda’s cascade layers. `_focusWithin` draws the compound Input outline for both pointer and keyboard focus; standalone `Input.Control` draws its own `_focusVisible` outline. Read-only inputs retain keyboard focus and text selection, with no editable hover treatment.

These rules describe styling. Do not add `aria-selected` to a plain Button solely to obtain a color: use the upstream primitive's appropriate semantics for toggles and selection. Applying a disabled attribute to an arbitrary layout root does not disable its descendants.

## Surface mapping

| Layer style           | Background         | Border | Shadow     |
| --------------------- | ------------------ | ------ | ---------- |
| `surface`             | `bg.page`          | `weak` | None added |
| `surface.raised`      | `bg.raised`        | `weak` | `raised`   |
| `surface.overlay`     | `bg.overlay`       | `weak` | `overlay`  |
| `surface.sunken`      | `bg.sunken`        | `base` | `none`     |
| `surface.translucent` | `fill.translucent` | `weak` | None added |

Raised and overlay shadow tokens have explicit light/dark defaults. Personality Themes can supply their own existing shadow values. Top-level `raised` and `overlay` layer styles use the same roles; the raised edge no longer references the undefined `subtle` border token.

Translucency requires a known backing surface: measure the composited foreground/background pair, especially over photos, gradients or overlapping alpha layers. This treatment introduces no blur and does not lower content opacity. For portal scope inheritance, retain [BEN-36's SurfaceProvider contract](contextual-surfaces.md); these styles neither transport DOM variables nor assign z-index.

## Recipe examples

These abbreviated examples show the mapping used by the full recipes, rather than replacement recipes to paste wholesale. Preserve the full slot and variant contract when replacing a recipe.

```ts
// Button primary root; the recipe also keeps its existing sizes and slots.
{
  color: 'text.primary.inverse.strong',
  backgroundColor: 'fill.primary',
  _focusVisible: { layerStyle: 'focus' },
  _notDisabled: {
    _hover: { backgroundColor: 'fill.primary.hover' },
    _active: { backgroundColor: 'fill.primary.active' },
    _pressed: { backgroundColor: 'fill.primary.active' },
    _selected: { backgroundColor: 'fill.primary.selected' },
  },
  _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
}
```

```ts
// Outline Input root. The full recipe includes nested input state selectors.
{
  color: 'text',
  backgroundColor: 'fill',
  border: 'strong',
  _focusWithin: { layerStyle: 'focus' },
  _invalid: { border: 'danger' },
  _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
}
```

```ts
// Menu item and checkboxItem share this mapping; radio items use item.
{
  color: 'text',
  _notDisabled: {
    _hover: { backgroundColor: 'fill.translucent.hover' },
    _highlighted: { backgroundColor: 'fill.translucent.hover' },
    _selected: { backgroundColor: 'fill.translucent.selected' },
    _checked: { backgroundColor: 'fill.translucent.selected' },
    _active: { backgroundColor: 'fill.translucent.active' },
    _pressed: { backgroundColor: 'fill.translucent.active' },
  },
  _focusVisible: { layerStyle: 'focus', outlineOffset: '-2px' },
  _disabled: { color: 'text.disabled', cursor: 'disabled' },
}
```

## Verification

The composed-preset regressions verify focus/shadow separation, mode-specific elevation shadows, enabled-only Button treatments and Menu slot coverage. The [packed consumer scenario](../tools/fixtures/panda-consumer/interaction-scenarios/app.tsx) and [browser verifier](../tools/scripts/verify-interaction-consumer.mjs) exercise actual packed Base UI components with consumer-generated CSS. Run with:

```sh
BEND_VERIFY_INTERACTIONS=1 BEND_VERIFY_TOKENS=1 pnpm nx run panda-consumer:verify
pnpm nx run-many -t test,lint,typecheck -p preset
```

The verifier checks default and proton Themes in light/dark, text contrast at rest/hover/press, persistent selection, opaque and alpha surfaces, Input boundaries, disabled/read-only behavior, Tab focus and disabled Input/Button skipping, Menu arrow navigation through focusable disabled actions without activation and Escape focus return, preserved elevation on focus, reduced motion and forced-colors outlines. Text pairs must reach 4.5:1 and Input boundaries/focus outlines 3:1. Alpha backgrounds are composited over ancestor backgrounds before measurement. Disabled text is excluded from text-contrast thresholds. Native disabled Menu Items remain arrow-key focusable: they use `text.disabled` at full element opacity and retain the focus outline. Their outline is included in the focus contrast checks.

The table lists the lowest text contrast measured for each Button state across the four sampled Theme and mode combinations (default and proton, light and dark).

| Button variant | Rest    | Hover   | Pressed |
| -------------- | ------- | ------- | ------- |
| Primary        | 5.78:1  | 7.24:1  | 8.99:1  |
| Secondary      | 13.34:1 | 9.36:1  | 6.78:1  |
| Tertiary       | 16.65:1 | 12.91:1 | 11.87:1 |
| Danger         | 5.87:1  | 7.64:1  | 9.16:1  |
| Inverse        | 16.65:1 | 15.94:1 | 15.94:1 |

The lowest values for the other sampled surfaces are 9.36:1 for a selected Button, 8.99:1 for a toggled Button, 13.34:1 for Input text, 13.13:1 for a translucent Button, 11.40:1 for a Menu item, and 8.77:1 for a checked Menu item. Focus outlines measured between 13.97:1 and 16.35:1 against their backgrounds.

This proof covers the sampled Themes and states. It does not establish conformance for every component, personality, consumer override or arbitrary backdrop.
