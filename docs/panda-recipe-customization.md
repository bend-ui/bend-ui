# Native recipe customization (BEN-31)

This spike extends the [packed-consumer check](panda-published-consumer.md). It installs the built Bend packages into a separate app, then validates three configurations: the original token override, recipe extension, and whole-recipe replacement. No library source is scanned and no published component API is changed.

Run all three cases with:

```sh
pnpm nx run panda-consumer:verify
```

The generated app directory is printed and preserved. Each customization case has its own client build (`dist-extend`, `dist-replace`) and SSR contract build. The original token-only build stays in `dist`. The same target runs in CI.

## What the two configurations prove

| Contract                  | Extension                                                                                | Replacement                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Ordinary recipe           | `theme.extend.recipes.text` adds `billboard`, retaining `body` and `headline`            | `theme.recipes.text` keeps only `body` and `billboard`                                       |
| Button slot recipe        | `theme.extend.slotRecipes.button` retains existing variants and adds `editorial`/`jumbo` | `theme.slotRecipes.button` replaces the definition, removing `danger`, `sm`, and `isRounded` |
| Existing published Button | `primary`/`lg` uses the consumer's rose background                                       | `primary`/`lg` uses the consumer's blue background                                           |
| Local Button              | Uses consumer-generated props and runtime for the new variants                           | Uses the replacement's generated props and runtime                                           |
| Compound rule             | `editorial` + `jumbo` adds a 5px root border and label tracking                          | The same combination adds a 9px root border and different label tracking                     |
| Sibling recipe            | Card remains available                                                                   | Card remains available                                                                       |

Button is a slot recipe, so customizing it under ordinary `recipes` would target the wrong category. Both modes keep the `Button` class namespace and the `root`, `label`, `icon`, and `spinner` slots. These names are used by the packed component runtime and must remain compatible for drop-in styling. The replacement deliberately retains the packed runtime's `secondary`/`md` defaults.

The fixture's `RecipeButton` is a small consumer-owned native button, with props derived from its local `ButtonVariantProps`. It splits variant props before rendering and applies the generated root and label classes. It is a test of local ownership and typing, not a new Bend public component or a replacement Base UI adapter.

## Generated types and published props are different contracts

Consumer codegen knows the merged configuration. It accepts `editorial` and `jumbo` in both modes. Extension retains inherited values; replacement rejects removed values. Negative TypeScript checks fail if those boundaries change.

The already-published Button declaration cannot change when an app runs codegen. It continues to reject `editorial` and `jumbo`. It also continues to accept `danger`/`sm` even when the consumer replacement removes those CSS rules. This is why a replacement must preserve every variant the app still uses, or the app must constrain its component props locally.

Runtime metadata has the same boundary. A compound added by the consumer for existing `primary`/`lg` values is emitted by the local generated helper, but the packed Button does not emit that new compound class. The SSR contract asserts this difference. Changing only TypeScript props cannot make the packed runtime learn new compounds. Consumer-generated compound recipe types also reject responsive variant objects, matching the generated runtime's restriction.

Use the published Button for overrides that preserve its slots, namespace, defaults, and runtime selection contract. For new variants or compounds, use a consumer-owned component wired to the consumer's generated recipe and chosen primitive, with props derived from that recipe. The fixture demonstrates the minimal native-button form. BEN-39 can apply the same approach to the reference Base UI component API.

Do not widen published props with `string`, cast away the mismatch, or use module augmentation to imply that the package runtime has changed. Native Panda configuration already handles the merge/replacement and type generation needed here; no Panda Box comparison is required for this spike.

## Verification

The packed-consumer target checks emitted CSS selectors and declarations, generated variant maps, rendered slot classes, compound matching and nonmatching combinations, preservation of the Card sibling, compile-time acceptance/rejection, and production client/SSR builds. The SSR contract bundles the installed Bend packages so it exercises their runtime instead of reading declarations alone.

Panda reports `design_system_artifact_conflict` warnings when an app intentionally overrides a design-system recipe. These are expected in these cases; stale-buildinfo fallback remains a failure. Existing bundle-size warnings remain outside the spike's acceptance criteria.

## Verified results (18 October 2026)

On Node 24.16.0, pnpm 10.14.0, Panda 2.2.0, and TypeScript 6.0.3, the original token case and both recipe cases passed the packed install, codegen, CSS assertions, type checks, and production builds. Both SSR runtime contracts and fixture lint passed.

Separate Chromium checks of the built client apps confirmed the published Button's rose/blue overrides, 19px/3px corners, local compound borders of 5px/9px, and label font sizes of 23px/29px with the intended tracking. The new compound on existing `primary`/`lg` values computes to a 6px outline on the consumer-owned Button and no outline on the packed Button. Both pages rendered without runtime errors. These browser checks were performed separately; the CI target requires no browser installation.

## References

- [BEN-31](https://linear.app/benoit-deziel/issue/BEN-31/validate-native-recipe-extension-replacement-and-typed-variants)
- [Panda theme customization](https://panda-css.com/docs/theming/customize-theme)
- [Panda slot recipes](https://panda-css.com/docs/recipes/slot-recipes)
