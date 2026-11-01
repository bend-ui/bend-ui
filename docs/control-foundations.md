# Control and text foundations (BEN-38)

The Design preset owns these defaults. The Structural preset still owns anatomy and minimal layout; adapters consume the same recipes. See [token architecture](token-architecture.md) for override precedence and [ADR-0002](adr/0002-canonical-state-attribute-contract.md) for state selectors.

## Control density

Button, Input and Select share `sm`, `md` and `lg`, defaulting to `md`.

| Size | Minimum outer height      | Inline padding | Gap          | Desktop text   |
| ---- | ------------------------- | -------------- | ------------ | -------------- |
| `sm` | `sizes.control.sm` = 2rem | `spacing.sm`   | `spacing.xs` | 0.875rem / 1.5 |
| `md` | `sizes.control` = 2.5rem  | `spacing.md`   | `spacing.sm` | 0.875rem / 1.5 |
| `lg` | `sizes.control.lg` = 3rem | `spacing.lg`   | `spacing.sm` | 1rem / 1.5     |

Heights include the one-pixel border on each edge. Use minimum heights so wrapped Button/Select labels and enlarged text can grow. Input's inner minimum height subtracts those two border pixels. Input addons use the same horizontal padding as their wrapper. Select's `size` is selected on its recipe provider; its portalled dropdown has a separate recipe context.

All three use the same `control.sm/md/lg` text styles. Small and medium controls use 1rem text below Panda's `sm` breakpoint, keeping editable text at 16px with the default browser font size. Heights and text use rem so browser font preferences scale them together. Compact controls are not a promise of a 44px touch target; use `lg` or add space around controls in touch-oriented layouts.

Theme personalities override `sizes.control.DEFAULT`; small and large stay 0.5rem below/above it through CSS references. For example, Volt yields 28/36/44px and Nebula yields 36/44/52px at a 16px root font. Keep `DEFAULT` when extending this token tree so its siblings survive:

```ts
semanticTokens: {
  sizes: { control: { DEFAULT: { value: '2.75rem' } } },
  radii: { control: { value: '0.5rem' } },
}
```

Put this under `theme.extend` for global defaults, or under `themes[name]` to override values supplied by that Theme. Existing `radii.md` consumer overrides still flow through `radii.base` to `radii.control` unless the selected Theme supplies its own control radius.

## Typography

`html, body` use `textStyle: 'body'`. Font families remain `body`, `heading` and `code`, preserving existing font-variable fallbacks and Theme personality fonts. No additional font download is introduced.

| Text style         | Size              | Unitless line height | Weight         |
| ------------------ | ----------------- | -------------------- | -------------- |
| `body`             | 1rem              | 1.5                  | normal (400)   |
| `body.sm`          | 0.875rem          | 1.5                  | normal (400)   |
| `headline`         | 2.25rem           | 1.2                  | bold (700)     |
| `title`            | 1.5rem            | 1.25                 | semibold (600) |
| `subtitle`         | 1.125rem          | 1.5                  | semibold (600) |
| `caption`          | 0.8125rem         | 1.5                  | normal (400)   |
| `control.sm/md/lg` | see density table | 1.5                  | medium (500)   |

`letterSpacings.heading` defaults to -0.02em and remains Theme-owned. Text styles express visual roles; they do not select semantic heading levels. Caption changes from the historical 24px/56px heavy display treatment to supporting text; audit any consumer that used it as a display style.

## Shape and concentric corners

All three controls use `radii.control`, whose baseline aliases `radii.base` → `radii.md` (6px). `radii.surface` aliases `lg` (8px), and `radii.overlay` aliases `xl` (12px). Theme personalities retain their explicit control/surface/overlay choices, including pill controls. Button's existing `isRounded` override remains available.

For concentric nested surfaces, subtract the physical inset from the outer radius and clamp at zero:

```tsx
<Box borderRadius="surface" padding="sm">
  <Box borderRadius="inset">Nested surface</Box>
</Box>
```

`radii.inset` is `max(0px, calc({radii.surface} - {spacing.sm}))`. It only describes that spacing. For a different padding or outer radius, use the corresponding formula rather than blindly reusing the alias. Select dropdowns apply this rule to items inside their `spacing.sm` padding, using the overlay radius. CSS still clamps radii to an element's box; concentric geometry is not a rule for independent controls floating in an unrelated container.

## Focus

Button's `_focusVisible` and Input/Select's `_focusWithin` consume the existing `focus` layer style. Input keeps the native input outline suppressed inside its compound root, and Select's control carries the outline around the complete trigger. The shared layer retains the existing `focusRing` shadow and 4px primary-tinted outline at a 2px offset. Do not animate focus appearance. BEN-37 owns contrast measurement and any further changes to state colors; this issue preserves that boundary.

## Motion

Baseline durations are `fast` 120ms, `normal` 180ms and `slow` 260ms. `easings.enter` and `easings.exit` alias the existing `easings.default` curve; Theme personalities can override these roles and durations. The historical emphasized curves remain available for consumer compatibility. `transitions.base` combines the normal duration and default easing. Named disclosure/fade animations now reference duration/easing roles instead of fixed timings, so personality motion settings affect them.

Frequent control interaction stays immediate: Button no longer shrinks by 10% on press, and Input no longer declares an invalid `colors` transition property. Select dropdown entry/exit uses the named fade animations. No new animation dependency is needed. Continuous progress and skeleton animations retain their normal timing when reduced motion is not requested.

With `prefers-reduced-motion: reduce`, the preset's global CSS limits animation and transition durations to 0.01ms, limits animation iterations to one, and makes scrolling immediate, including pseudo-elements. The `!important` declarations prevent Theme timing and recipe shorthand from restoring travel or continuous loops. The tiny duration preserves completion events used by disclosure lifecycles; it is not a visible animation. This policy applies throughout a document using the Design preset's global CSS, including consumer-defined CSS motion; consumers needing a different policy should replace the global rule deliberately.

## Verification

`pnpm nx run-many -t test,lint,typecheck,build -p preset,preset-base` passes: 66 tests, no type errors, both package builds, and only the existing unused-variable warnings in the two ESLint configs. `foundations.spec.ts` compiles the composed preset through Panda and checks size references, Theme overrides, clamped radii, resolved aliases and reduced-motion output. The public Select metadata is updated and covered by the existing composed-recipe contract tests.

A Chromium check against generated CSS and representative slot markup confirmed equal outer heights, radii and text sizes for Button/Input/Select at every size in default, Stratus, Volt and Nebula. It also confirmed the Input focus outline, 16px editable text at a 375px viewport, and reduced animation/transition durations and iteration count. This is recipe rendering evidence, not a full adapter interaction or contrast audit. Safari, Firefox, real touch devices, and every Theme personality were not visually verified.
