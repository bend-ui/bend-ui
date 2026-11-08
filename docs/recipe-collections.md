# Recipe collections: default and Atelier

Atelier is an opt-in editorial treatment of the existing Button, Input, Select, SelectDropdown and Card recipes. It keeps the existing recipe names, slots, variant values and defaults; it changes geometry, borders, letter spacing and typography. Other component recipes still use the default collection. This is a build-time Panda preset, not a React provider or runtime theme switch.

For a Panda design-system consumer, select the collection in the Panda configuration:

```ts
import { defineConfig } from '@pandacss/dev';
import { atelierRecipeCollection } from '@bend-ui/preset';

export default defineConfig({
  designSystem: '@bend-ui/base-ui',
  presets: [atelierRecipeCollection], // Omit for the default recipes.
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
});
```

Run Panda codegen and CSS generation again after changing the selection. An application can layer its own `theme.extend.slotRecipes` on top. Consumer extensions cannot add new runtime variant support to an already packed component; see [the recipe customization boundary](panda-recipe-customization.md). A consumer replacing recipes rather than extending them must preserve required slots, defaults and published variant values.

## Reproducible packed consumer

```sh
NX_DAEMON=false BEND_VERIFY_COLLECTION=1 pnpm nx run panda-consumer:verify --output-style=static
```

This optional scenario installs built tarballs into an external application and builds the exact same React source twice, choosing the preset only through `BEND_RECIPE_COLLECTION` in the Panda configuration. It compiles equality checks between generated and installed public recipe variant/slot types, including Card variants and SelectDropdown slots. It checks the generated CSS and runs the existing recipe extension and replacement checks. The temporary app path is printed for inspection.

The comparison uses Stratus in light and dark with the same consumer accessibility palette in both builds: semantic `stroke` and `stroke.weak` are `#26315c` in light mode and `#f0eadf` in dark mode. It also overrides the focus layer style to use opaque `stroke`, uses the existing primary Button, and retains the existing fixture's purple primary fill override. These are consumer settings, not changes to Bend's global theme. A preliminary check of the untouched Stratus defaults found the dark secondary Button text at 2.95:1 and some Input/Select boundaries below 3:1 against the Card; this example does not certify those defaults.

On November 8, 2026, the packed consumer passed both builds, public type checks, and the existing extension and replacement checks. Browser checks covered both collections in light and dark at 320px and 1280px. Keyboard interactions covered typing, Select arrow selection, focus return, Escape and Button activation; the Select popup stayed within the viewport. Card section gutters matched their collection (20px default and 24px Atelier). Measured enabled text reached at least 4.75:1, input and select boundaries at least 9.68:1, primary hover text 9.17:1, and focus outlines 9.68:1 in light and 11.92:1 in dark. These measurements apply to the shared consumer settings described above.

A separate diagnostic found that setting `data-invalid` on Input.Root did not change the outline-variant border in either collection. This existing shared recipe specificity limitation is not covered by the successful interaction results. The final affected workspace validation passed 60 tasks (15 projects and their dependencies) in 7m 49s. The collection-enabled packed consumer verification then passed eight tasks in 18.3s, including both builds, generated/public type equality, and the existing extension and replacement checks. Nx Cloud reported a nonfatal remote-cache authorization error during both runs.
