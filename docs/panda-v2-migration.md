# Panda CSS v2 migration (BEN-29)

Migration branch: `build/BEN-29-panda-v2-node-24`.
Baseline commit: `0a849cf1`. Package manager: pnpm 10.14.0. Panda packages: 2.2.0.

## Requirements and retained architecture

Panda v2 is ESM-only. Bend standardizes on Node 24: `.node-version` and `.nvmrc` select 24, the root engine requirement is `>=24`, and all CI workflows read `.node-version`. Existing React APIs and structural/design preset boundaries remain in place. Other adapters remain supported at their current scope; this change adds no new adapter features. Bundling remains on tsup.

The structural preset explicitly composes `@pandacss/preset-base` and `@pandacss/preset-panda`: v2 no longer inserts defaults implicitly. Removed `lightningcss` config options and obsolete `@pandacss/dev/presets` paths are replaced by supported v2 configuration. The retired Studio dependency and the website's unused token-dictionary dependency are removed.

Configs now use relative includes. PostCSS sets `cwd` to its application's directory, so generation resolves consistently when Nx launches builds from the workspace root. Panda's ESM config bundler does not supply CommonJS `__dirname`.

## Runtime generation and declarations

`styled-system:build` now actually runs codegen. Generation is a dependency of adapter builds. Its generated runtime is still external to the adapters. Package exports now target v2 `.js` files and the publish allowlist includes `dist`.

Run clean generation once for every pre-existing v1 output directory: v2 `.js` files can otherwise be shadowed by leftover v1 `.mjs` files. The customization harness already has clean prepare targets. Never hand-edit generated output.

Slot components use Panda's native `createSlotRecipeContext`. The existing core compound factory retains its typed public seam; an internal type boundary prevents generated intrinsic-element unions from overwhelming declaration generation. Components that exposed private upstream types through inference receive explicit `SlotRecipeComponent` annotations. This is a type-only contract mirroring Panda's slot props; it adds no runtime wrapper and preserves upstream prop names, style props, ref props, and recipe variant props.

`scrollbarThumb` replaces the old single-value `scrollbarColor` usage in the native app-shell scroll area.

## Customization harness corrections

Both customization configs now register button overrides under `slotRecipes`. The full-replacement preset also models Badge and Input as slot recipes, matching their component anatomy. The previous mixed registrations produced v2 recipe-name conflicts and dropped nested root styles. Both modes now generate with zero diagnostics. A regression test checks the emitted button, badge and input border declarations; render-only tests could not catch that failure.

## Declaration-size follow-up

Declarations compile, but Base UI's emitted declaration file grew from approximately 65.5 KB to 2.11 MB and its build takes over two minutes locally. Ark UI declarations also grew. Targeted annotations fix portability and serialization errors; the remaining inferred Panda style types need further reduction during BEN-31. This migration establishes compatibility, not a release-ready public typing strategy.

## Hooks

New consumers should use `createBendConfig({ plugins: [{ name, hooks }] })`.
The existing function-form `hooks` option remains as a deprecated compatibility entry point, installed through a named Bend plugin before consumer plugins. Only v2-supported hook names are accepted. Filtered hook objects belong in native plugins.

Panda v2's `cssgen:done` observes final CSS and **cannot rewrite it**, even if a compatibility hook returns a string. Move CSS cleanup to Panda's `optimize` options or PostCSS. Removed engine hooks such as `tokens:created` are not emulated. Do not assume full v1 hook compatibility.

Tests retain hook-composition characterization and add a real Panda config-loader integration test proving async compatibility hooks execute before consumer plugins.

## Baseline and CSS review

Before changes, builds/tests/lint for config, preset, preset-base and Base UI passed (54 tests, existing lint warnings). Runtime and stylesheet snapshots were captured locally under `/private/tmp/bend-v1-snapshot`; these are temporary evidence, not repository artifacts.

The reference demo produced 263,508 bytes of v1 CSS and 266,811 bytes of v2 CSS for the same pre-scrollbar-fix inputs. Parsed rule counts were 752 and 743 respectively. Both had 1,295 distinct declared custom-property names; those are not identical sets. No authored design-token names were lost: removed names were utility reset variables and temporary color-mix helpers. The default v2 palette adds mauve, mist and taupe ramps (plus inner-shadow and video aspect-ratio defaults). Value serialization changes include equivalent seconds/milliseconds, leading zeroes and quote styles.

Layer declarations retain reset → base → tokens → recipes → utilities. v2 adds explicit recipe sublayers, including compound variants. Universal utility-variable resets are replaced by use-driven `@property` registration; support for older browsers requires an explicit `optimize.propertyFallback` policy. Browser policy remains unresolved, so this migration does not silently change it. Compound overrides and border shorthand ordering follow v2 rules and need representative visual review before release.

## Verification commands

Use the workspace's existing Nx targets:

```sh
pnpm nx run-many -t build,test,lint -p config,preset,preset-base,base-ui,ark-ui,react-aria --parallel=2
pnpm nx run-many -t build,test -p vite-base-ui,vite-base-ui-theming --parallel=2
pnpm nx run vite-base-ui-theming:build-level2
```

Declaration generation is part of package build. Separate packed-install checks, new consumer-defined variants, public anatomy contracts and portal/ref/render regression work remain BEN-30 through BEN-33. Passing workspace checks alone does not establish publishability or visual/accessibility equivalence.

## Rollback

Preserve any unrelated work before rollback. Restore this migration's tracked changes to baseline `0a849cf1` (or revert its eventual commit), reinstall from the restored frozen lockfile, then regenerate every affected runtime with the restored v1 compiler using a clean output directory. Re-run the baseline build/test/lint targets. Generated files are ignored, so restoring tracked files alone does not restore a working v1 runtime.

## Upstream references

- https://panda-css.com/docs/get-started/upgrading-to-v2
- https://panda-css.com/docs/design-systems/build-a-design-system
- https://panda-css.com/docs/design-systems/publishing

## Verified results (18 October 2026)

- Original migration validation on Node 22.20.0 (before the project was standardized on Node 24): 71 package tests plus 8 consumer-app tests passed (79 total), including the new real config-loader and emitted-CSS checks. Some unchanged tasks used the Nx cache.
- Shared foundation and Base UI / Ark UI / React Aria package builds and declaration generation passed.
- Targeted package and consumer-app lint passed, with existing warnings.
- Reference demo and both customization modes built successfully. The full replacement harness was rebuilt after its recipe-category corrections.
- Both customization code-generation targets reported zero diagnostics after the corrections.
- Frozen offline installation with lifecycle scripts disabled passed; the lockfile matches the manifests. Fresh-checkout lifecycle bootstrapping is not established by that check.
- The final changes pass `git diff --check`.

This migration does not publish npm packages or deploy applications. Clean packed-consumer validation is the next task, BEN-30.

## Node 24 alignment

The project runtime pins and CI now select Node 24, with a minimum engine requirement of `>=24`. On Node 24.16.0, config, preset and Base UI tests were rerun without the Nx cache: all 55 tests passed. Historical Node 22 migration results above are retained as historical evidence.

## Fresh-checkout installation fix

PR CI exposed a lifecycle-ordering gap: the customization harness loads the structural preset through its package export, but a fresh checkout has no built preset files. `@bend-ui/preset-base` now builds during its own `prepare` lifecycle, before dependent codegen runs. This intentionally uses the package's build script during dependency installation, before Nx workspace bootstrap is complete.

A source-only archive with no generated output passed `pnpm install --frozen-lockfile --offline` with lifecycle scripts enabled on Node 24.16.0, including all package and app prepare steps. The earlier scripts-disabled installation caveat is superseded by this check. Clean packed-package consumer validation remains BEN-30.

Base UI Chromatic runs automatically for shared foundation, lockfile, runtime-pin and visual-workflow changes. Ark UI and React Aria Chromatic are temporarily manual-only (`workflow_dispatch`); their package build and test coverage remains enabled.
