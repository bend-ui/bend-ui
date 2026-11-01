# Generated OKLCH ramps (BEN-35)

This opt-in prototype generates a primary ramp and a restrained neutral ramp without replacing Bend's existing named Themes. Theme selection and Color mode remain separate axes, as defined in [CONTEXT.md](../CONTEXT.md). [Token architecture](token-architecture.md) defines semantic role ownership and consumer override precedence.

## Configuration

The public `@bend-ui/preset` API exposes `createOklchRamp` for individual Panda token ramps and `createTheme` for semantic Theme integration:

```ts
import { defineConfig } from '@pandacss/dev';
import { createBendPreset, createOklchRamp, createTheme } from '@bend-ui/preset';

const brandRamp = createOklchRamp({ hue: 262, chroma: 0.2, curve: 1.1 });

export default defineConfig({
  presets: [createBendPreset()],
  staticCss: { themes: ['brand-neutral', 'warm-neutral'] },
  themes: {
    'brand-neutral': createTheme({
      generatedColors: { primary: { hue: 262, chroma: 0.2 } },
    }),
    'warm-neutral': createTheme({
      generatedColors: {
        primary: { hue: 262, chroma: 0.2 },
        neutralTint: { hue: 85, chroma: 0.012 },
      },
    }),
  },
});
```

`brandRamp` is an eleven-step token map suitable for an explicitly named core palette. `createTheme` registers generated values directly as semantic primary and neutral ramps, so existing recipes resolve them without scanning or changing component implementations. Supply `generatedColors` to opt in; existing named-palette options retain their behavior when it is absent.

Omitting `neutralTint.hue` derives the neutral hue from the brand. Supply an independent hue to preserve a warm or cool neutral identity while changing the primary hue. Neutral chroma defaults to `0.012` and accepts values from `0` through `0.04`; larger values throw an error. This bound limits the tint rather than copying saturated brand chroma into surfaces and text. Zero chroma produces an untinted neutral ramp.

## Algorithm

The implementation lives in [create-oklch-ramp.ts](../packages/preset/src/utils/create-oklch-ramp.ts), with Theme composition in [create-theme.ts](../packages/preset/src/themes/create-theme.ts). The output labels are `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, and `950`, ordered from light to dark. OKLCH lightness spans `0.98` to `0.12` with a continuous power curve (default exponent `1.1`). The chroma envelope follows a sine curve, reducing saturation toward the extreme light and dark ends while retaining the selected hue.

Each step checks sRGB gamut. A binary search reduces chroma while keeping lightness and hue fixed, followed by a check of the rounded CSS value. This avoids relying on browser clipping to repair out-of-gamut colors. Values are serialized as OKLCH; gamut targeting is sRGB, without a separate P3 enhancement.

For index `i` from 0 through 10, set `t = i / 10`, then `L = round3(0.98 - 0.86 × t^curve)` and requested `C = chroma × sin(πt)`. The search runs 24 iterations; after rounding chroma to three decimals it decrements by `0.001` until the serialized color is in gamut. Hue is normalized modulo 360 and rounded to three decimals. Endpoints have zero chroma; their retained hue coordinate carries no visible tint.

Primary chroma defaults to `0.16` and accepts `0..0.4`. Curve accepts `0.5..2` and defaults to `1.1`. Hue must be finite; non-finite values and out-of-range chroma/curve values throw. Neutral generation fixes curve to `1.1`, so changing the primary curve does not reshape an independently selected neutral ramp.

The curve describes perceptual lightness, not measured relative luminance. Smooth lightness and constant hue alone do not prove readable text. Contrast must be measured for the chosen foreground/background pair after the semantic mapping is applied.

The generated primary ramp stays direct in both modes, matching the existing primary-palette contract. The generated neutral ramp maps semantic 50 to the lightest generated step in light mode and the darkest in dark mode, reversing the remaining assignments around 500. Consequently `bg.page` and neutral text roles adapt to mode without changing brand identity. The eleven values are shared; dark mode changes their role mapping rather than generating an unrelated palette.

## Representative controls

The [packed consumer config](../tools/fixtures/panda-consumer/ramp-scenarios/panda.ramps.config.ts) and [control app](../tools/fixtures/panda-consumer/ramp-scenarios/app.tsx) render existing Button, Input and Select components under `brand-neutral` and `independent-neutral`. They retain component code and recipes, overriding only semantic role values:

| Role | Fixture mapping | Purpose |
| --- | --- | --- |
| Page | `bg.page` → neutral 50 | Mode-aware canvas. |
| Normal text | `text` → neutral 900 | Input, Select and body text. |
| Neutral control fill | `fill` → neutral 200 | Input and Select surfaces. |
| Primary fill | `fill.primary` → primary 700 | Button action treatment. |
| Primary text | `text.primary.inverse.strong` → `oklch(0.98 0 0)` | Stable light text against the dark primary step in both modes. |
| Control boundary | `stroke` / `stroke.weak` → neutral 600 | Input and Select borders. |

Choosing a darker primary step and a fixed light on-primary foreground is deliberate. Reusing mode-reversed neutral 50 as Button text would darken that text in dark mode while the primary fill stays unchanged. The fixture validates a coherent role mapping, rather than claiming every pairing of ramp steps is accessible.

## Verified results

On 1 November 2026, preset validation passed 62 tests, lint and typecheck. Fresh packed installation and the consumer baseline CSS/type/production build passed. The generated-ramp scenario then passed Panda code/CSS generation, consumer TypeScript checking, Vite production build and Chromium verification after correcting the preset's missing production declaration for `deepmerge`.

The [browser verifier](../tools/scripts/verify-ramp-consumer.mjs) reads actual computed foreground/background colors, converts them through an sRGB canvas, linearizes the resulting channels and calculates relative-luminance contrast ratios. All twelve normal-text pairs exceed the fixture's `4.5:1` minimum:

| Mode | Neutral tint | Button text / fill | Input text / fill | Select text / fill | Input/Select border / inner fill |
| --- | --- | --- | --- | --- | --- |
| Light | Brand-derived, hue 262 | 9.01:1 | 10.59:1 | 10.59:1 | 3.75:1 |
| Light | Independent, hue 85 | 9.01:1 | 10.54:1 | 10.54:1 | 3.76:1 |
| Dark | Brand-derived, hue 262 | 9.01:1 | 10.20:1 | 10.20:1 | 4.35:1 |
| Dark | Independent, hue 85 | 9.01:1 | 10.30:1 | 10.30:1 | 4.41:1 |

The Button computes to foreground `oklch(0.98 0 0)` and fill `oklch(0.399 0.162 262)` in every combination. Input/Select neutral text and fill change with Color mode and retain the selected neutral hue. Source tests independently cover eleven-step ordering, gamut after formatting, option validation and tint independence.

The Button's border-to-inner-fill ratio is `2.15:1`, reported as an observation rather than a passing boundary assertion. These border measurements compare the inner fill only; they do not measure the component against its surrounding surface. The text checks therefore establish these specific text pairings, not whole-component or whole-library conformance.

This proof supplies an explicit on-primary text role, neutral text/fill mappings and boundary roles. It retains the existing recipe shapes and radius choices; it does not introduce a new shape system or claim that every default state has been reviewed. Hover, pressed, selected, focus and disabled treatment remain BEN-37 work.

## Boundaries

This prototype does not replace the existing personality catalog or change default recipes. BEN-36 owns contextual surface roles across portals; BEN-37 owns the full hover, pressed, selected, focus and disabled treatment matrix. Contrast proof for the default controls here is a bounded acceptance check, not a claim of whole-library accessibility conformance.
