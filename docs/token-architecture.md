# Token architecture (BEN-34)

Status: verified token architecture and consumer contract, 31 October 2026. This document describes the implemented BEN-34 behavior and its validation evidence.

Use the vocabulary in [CONTEXT.md](../CONTEXT.md): the **Design preset** owns visual decisions, a **Theme** is registered under Panda `themes`, and **Color mode** is a separate light/dark axis. The Structural preset owns anatomy and minimal layout. [ADR-0002](adr/0002-canonical-state-attribute-contract.md) remains the state selector contract.

## Existing ownership

| Layer | Source | Responsibility |
| --- | --- | --- |
| Core values | [tokens](../packages/preset/src/tokens/index.ts) | Color values, fonts, animations and easings. Named OKLCH palettes live in [theme-colors.ts](../packages/preset/src/tokens/theme-colors.ts). |
| Semantic roles | [semanticTokens](../packages/preset/src/semanticTokens/index.ts) | Meaningful color, spacing, size, typography, shape and elevation aliases. |
| Tone generation | [define-tone.ts](../packages/preset/src/utils/define-tone.ts) | Generates fill/text/stroke/icon roles and merges leaf overrides. |
| Theme | [create-theme.ts](../packages/preset/src/themes/create-theme.ts), [personalities.ts](../packages/preset/src/themes/personalities.ts) | Selects palettes; personalities also set typography, density, shape, elevation and motion. |
| Recipe | [recipes](../packages/preset/src/recipes/index.ts) | Maps semantic roles and state conditions to component slots. |
| Consumer | [createBendPreset](../packages/preset/src/index.ts) | Composes structural/design defaults with a consumer extension. |

`packages/theme` contains additional token assets; the runtime Design preset entry point above is the source traced by this assessment. Reconcile any public ownership claim for those assets before treating them as a second authoritative token system.

## Naming and alias contract

The current [color roles](../packages/preset/src/semanticTokens/colors.ts) are `bg`, `fill`, `text`, `stroke`, and `icon`. Keep `stroke` as the implementation name while documenting that it supplies CSS border colors; a rename to `border` needs an explicit compatibility decision. `borders` is a separate Panda token category.

Background roles describe surfaces (`page`, `raised`, `overlay`, `sunken`, `alternate`, `inverse`). Fill roles describe control treatments. Text, stroke and icon roles describe foreground intent. Tone names are `neutral`, `primary`, `danger`, `warning`, `success`, and `info`. Recipes should use these roles when their meaning fits, with literal product values confined to the Design preset or an intentional consumer replacement.

Role-first paths own values: `colors.fill.primary`, `colors.text.primary`, `colors.stroke.primary`, and `colors.icon.primary`. Tone-first paths such as `colors.primary.fill` are compatibility aliases that reference the corresponding canonical leaf. Neutral tone-first roles point directly to the unqualified neutral role (`colors.neutral.fill` → `colors.fill`). Override the role-first path so both spellings follow the change. An explicit override of a compatibility alias intentionally affects only that alias.

`DEFAULT` denotes the containing token, so the reference for `colors.primary.fill.DEFAULT` is `{colors.fill.primary}`, without a `.DEFAULT` segment. Role strength, state and inverse qualifiers remain nested below the role. Personality Themes now override these canonical paths rather than copying independent tone-first values. The historical `colors.fill.primary.fill.hover` spelling remains for recipe compatibility; new consumers should use `colors.fill.primary.hover`.

The minimal component-alias inventory is:

| Alias | Existing consumer | Guidance |
| --- | --- | --- |
| `colors.input.fill` | No direct source usage found in packages/apps outside generated output | Compatibility-only alias of `colors.fill.weak`; use the shared role for new recipes. |
| `colors.input.stroke` | `borders.input`, used by the Textarea outline recipe | Retain as the existing input-border customization seam. It currently does not control Input's outline recipe, which uses `borders.weak`. |
| `colors.divider.stroke` | `borders.divider`; no direct recipe usage of that border token found | Compatibility-only divider seam; use `colors.stroke.weak` for new shared rules unless independent divider styling is required. |

These aliases remain to preserve consumers. No new per-component aliases are needed for BEN-34. Retiring one requires a consumer migration decision; its presence alone is not grounds for expanding the token API.

## Color mode and Theme resolution

[createColorScale](../packages/preset/src/utils/create-color-scale.ts) creates an eleven-step alias ramp, plus `DEFAULT`; it does not generate new color values. [createNeutralScale](../packages/preset/src/utils/create-neutral-scale.ts) explicitly maps neutral 50 to palette 50 in light mode and 950 in dark mode, continuing the reversal around unchanged 500. Semantic backgrounds and neutral foregrounds inherit that mode behavior through their neutral aliases.

The legacy Theme factory uses this mode-aware neutral ramp while its primary/status ramps use direct aliases. Its `errorColor` and `defaultErrorColor` options now configure the canonical `danger` ramp. The historical `error` ramp aliases `danger`, retaining existing token consumers. Personality Themes use [createDuotoneNeutralScale](../packages/preset/src/utils/create-duotone-neutral-scale.ts): light mode draws background steps from the light palette and foreground steps from the dark palette; dark mode reverses the resulting semantic shade assignments. This differs from reversing one palette and is intentional personality behavior.

The acceptance contract is independent selection of Theme personality and Color mode, with readable control text, visible focus and distinguishable surfaces in each combination. Source inspection establishes alias behavior, not contrast compliance. Record measured foreground/background pairs and rendered examples before claiming this contract passes.

## Override precedence and proof

The [Design preset entry point](../packages/preset/src/index.ts) composes the Structural preset, then adds visual values through `theme.extend`. `createBendPreset(consumerPreset)` places the consumer preset after Bend defaults. This is the intended configuration merge order. A selected Theme also supplies semantic values at its Theme scope; a global alias override alone is insufficient evidence that the selected Theme cannot override that same alias.

For additive recipe customization, use `theme.extend.recipes` or `theme.extend.slotRecipes`; direct `theme.recipes`/`theme.slotRecipes` supplies replacements. The [BEN-31 consumer evidence](panda-recipe-customization.md) documents the verified distinction and the separate contracts of consumer-generated types versus published component props. Preserve namespaces, required slots and used variants for a compatible replacement.

To customize all Themes' defaults, extend canonical semantic tokens in the consumer's `theme.extend.semanticTokens`. To customize values that a selected Theme also defines, put the corresponding override under that Theme's `themes[name].semanticTokens`. Keep both axes explicit: selecting a Theme should not silently change the user's Color mode.

The repeatable [consumer token scenario](../tools/fixtures/panda-consumer/token-scenarios/panda.tokens.config.ts) supplies a global teal fill and 19px radii, then a selected `consumer-proof` Theme with purple fill and 23px radii:

```ts
// Inside the consumer Panda config:
theme: {
  extend: {
    semanticTokens: {
      colors: {
        fill: {
          DEFAULT: { value: '#0f766e' },
          primary: { DEFAULT: { value: '#0f766e' } },
        },
      },
      radii: { md: { value: '19px' }, lg: { value: '19px' } },
    },
  },
},
themes: {
  'consumer-proof': {
    semanticTokens: {
      colors: {
        fill: {
          DEFAULT: { value: '#7c3aed' },
          primary: { DEFAULT: { value: '#7c3aed' } },
        },
      },
      radii: { md: { value: '23px' }, lg: { value: '23px' } },
    },
  },
},
```

`fill` covers the neutral Input/Select treatment; `fill.primary` covers the primary Button treatment. Both `md` and `lg` are changed because the existing recipes consume different radius steps. This preserves the current recipe API rather than pretending `radii.base` controls every component. The [browser verifier](../tools/scripts/verify-token-consumer.mjs) checks unchanged packed Button/Input/Select components, their computed fills and radii, and the reverse compatibility alias in both Color modes, with and without the selected Theme.

## Verification and completion evidence

The preset's complete Nx test target passes 43 tests, including the new [token contract regressions](../packages/preset/src/themes/token-contract.spec.ts). These verify all eleven danger shades and DEFAULT for an `errorColor: purple` / `defaultErrorColor: 700` Theme, legacy error references, recursive compatibility alias paths for all six tones, and neutral light/dark reversal. Preset lint and typecheck pass; lint retains an existing unused `nx` warning in its ESLint configuration.

Source inventory and regressions establish alias ownership, status naming, mode mapping and preservation of the minimal existing component aliases. Fresh packed-consumer validation passed package installation, Panda codegen and CSS generation, consumer TypeScript checking and a Vite production build. Chromium then verified every combination below against unchanged packed Button, Input and Select components:

| Color mode | Selected Theme | Computed fill on all three controls | Computed radius | Reverse primary fill alias |
| --- | --- | --- | --- | --- |
| Light | None | `rgb(15, 118, 110)` | `19px` | `#0f766e` |
| Dark | None | `rgb(15, 118, 110)` | `19px` | `#0f766e` |
| Light | `consumer-proof` | `rgb(124, 58, 237)` | `23px` | `#7c3aed` |
| Dark | `consumer-proof` | `rgb(124, 58, 237)` | `23px` | `#7c3aed` |

This establishes the observed precedence: Bend defaults < global consumer extension < selected Theme values for aliases defined at each layer. The reverse alias follows the canonical role-first override in all four cases. The complete chained Nx consumer verification did not finish through its launcher; the individual stages above were resumed successfully against the fresh packed installation. This evidence does not claim completion of unrelated recipe scenarios in that chained target. Contrast measurements and portal surface behavior belong to BEN-35–37; BEN-34 establishes their role names and resolution contract.

## Work boundaries

- **BEN-34:** Owns token names, alias ownership, mode contracts and consumer override guidance. Factory validation in BEN-33 is complete; Linear records no explicit blocker for BEN-34.
- **BEN-35:** Owns OKLCH ramp generation and neutral tint configuration. The current alias ramp is a starting point; palette quality and measured contrast remain its deliverables.
- **BEN-36:** Owns contextual surface/elevation behavior across nested content and portals. It must define how semantic surface roles travel to portal content and keep elevation separate from stacking order.
- **BEN-37:** Owns hover, pressed, selected, focus and disabled treatments. It should consume BEN-34 role names and preserve ADR-0002 selectors, with measured contrast and keyboard focus evidence.
- **BEN-38:** Owns typography, density, radii and motion defaults, including reduced motion. Existing empty semantic duration/easing tables and personality-specific values need reconciliation into a documented baseline.

These are proposed execution boundaries, not new dependency links in Linear. Agree the BEN-34 naming contract before downstream work introduces additional aliases; downstream prototypes can proceed with their assumptions recorded.

## Nested danger Theme regression

`createTheme` redeclares danger roles and compatibility aliases at the selected Theme scope, where CSS variable references resolve. The legacy `error.DEFAULT` references `{colors.danger}` so a canonical default override propagates. The packed-consumer regression verifies nested purple danger Button fill and invalid Textarea recipe border in light/dark, plus a separate `danger.DEFAULT: #123456` override resolving through the legacy alias. Consumer CSS generation, typechecking and production build pass.

## Interaction treatment follow-up (BEN-37)

[Interaction states and surfaces](interaction-states.md) defines the shared state mapping. Primary fill defaults now use step 600, with 700 hover/selection and 800 active states; danger uses 700, 800 and 900 respectively; the danger stroke and legacy error palette default remain at their configured steps. This changes default control colors while preserving the role names, compatibility aliases and Theme override seams verified above.
