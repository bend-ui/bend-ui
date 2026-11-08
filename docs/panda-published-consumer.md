# Packed Panda design-system consumer (BEN-30)

This spike tests the Base UI adapter as a built npm tarball in a separate React/Vite application. It uses Panda v2's `panda lib` and native `designSystem` configuration. It does not publish to the npm registry.

## Run

From the workspace root, using the pinned Node and pnpm versions:

```sh
pnpm nx run panda-consumer:verify
```

The Build workflow also runs this target on pull requests and pushes to main. Nx builds Base UI and its dependencies first. The verification script packs their built outputs with pnpm (which rewrites `workspace:` ranges), copies `tools/fixtures/panda-consumer` to a fresh OS temporary directory, and installs the tarballs there. The consumer has its own `node_modules`, no workspace TypeScript paths, no Nx Vite aliases, and no library source directory. It runs Panda codegen, CSS extraction, TypeScript, and a Vite production build.

The check prefers cached packages and uses exact tool versions from the current workspace installation. Registry access is needed when package metadata or tarballs are missing from the pnpm cache. Bend packages always come from tarballs, never workspace links. Each run prints and preserves the temporary app directory for inspection. Its generated `package.json` records the exact versions and tarball overrides; its lockfile records the resolved dependency graph. These temporary directories can be removed after inspection.

To view a completed run, use `pnpm exec vite --host 127.0.0.1` from the printed temporary app directory.

## Package contract

`base-ui:build` now runs the normal tsup build, Panda codegen with `--clean`, and `panda lib`, in that order. Cleaning removes stale generated modules before Panda infers helper exports, so local and fresh-checkout builds both advertise the generated `.js` files. tsup cleans `dist`, so the machine artifacts must be generated afterward. The package includes both `dist` and `styled-system`.

Panda owns the generated helper subpath exports. The handwritten root export keeps the existing ESM/CJS/declaration contract. The tarball check requires:

- `dist/panda/lib.json`
- `dist/panda/preset.mjs`
- `dist/panda/buildinfo.json`
- `styled-system/css/index.js`

The fallback globs point to published JavaScript relative to `dist`, rather than unpublished `src`. Buildinfo is the primary extraction path. The consumer rejects stale-buildinfo diagnostics so source fallback cannot silently mask a packaging failure.

The existing `@bend-ui/styled-system` dependency remains the adapter's shared runtime. The generated Base UI helper exports are also included because `panda lib` advertises them. Consolidating these runtimes is outside this spike.

## Native composition and assertions

The consumer config selects `designSystem: '@bend-ui/base-ui'` and scans only `./src/**/*.{ts,tsx}`. It does not scan any package source or `node_modules` glob and does not repeat Bend's preset or recipe definitions.

A local `definePreset()` supplies the `consumer` purple color token. The consumer config extends the hydrated design system with a `19px` `md` radius and points the `fill.primary` semantic token at that local brand token. The app renders the published Button with the existing `primary`/`lg` variants and an interactive save state.

The verification checks the emitted CSS for the local raw token, semantic reference, radius, and Button recipe selectors/declarations. TypeScript checks a valid published Button variant, rejects an unknown variant, accepts the generated local token, and rejects an unknown token. Unused `@ts-expect-error` directives fail compilation if those negative contracts stop working.

Recipe extension/replacement and consumer-added component variants are validated in the [BEN-31 follow-up](panda-recipe-customization.md). Published component props retain the library's generated variant types; adding consumer tokens does not widen those component props.

## Release limits

The check installs packed release artifacts, not a registry release. It supplies every transitive Bend workspace dependency through tarball overrides. In particular, `@bend-ui/core` is currently marked private while Base UI imports it. A real npm release must publish that dependency or remove the dependency before shipping. This spike does not change its visibility or migrate the remaining core consumers.

The library config currently requests static CSS for the full recipe catalog and registered themes. This validates correctness without source scanning; it does not establish minimal CSS size or per-component tree shaking. Panda buildinfo is version-sensitive, so packages must be rebuilt when upgrading Panda. Fallback extraction of built JavaScript is declared but not used as proof of correctness here.

## Verified results (18 October 2026)

On Node 24.16.0 and pnpm 10.14.0, the packed install, codegen, CSS assertions, positive/negative type checks, and Vite production build passed. CSS extraction parsed only the three consumer source files and emitted 245,995 bytes before Vite minification. Panda reported the expected informational token conflicts, confirmed that local values win, and emitted no extraction diagnostics or stale-buildinfo fallback warning.

A headless Chromium smoke check of the production build confirmed that the published Button computes to a `19px` border radius and `rgb(109, 40, 217)` background. Clicking it updates the accessible button name and status text; no page errors occurred. This browser smoke check was performed separately from the CI target, which requires no browser installation.

The existing Base UI suite passed all 13 tests. Base UI and consumer lint passed; Base UI retains existing warnings. Vite reported a JavaScript chunk above 500 kB (approximately 705 kB minified), so this is packaging and customization evidence rather than bundle-size approval.

## References

- [BEN-30](https://linear.app/benoit-deziel/issue/BEN-30/prototype-a-publishable-panda-design-system-in-a-consumer-app)
- [Panda: build a design system](https://panda-css.com/docs/design-systems/build-a-design-system)
- [Panda: publishing](https://panda-css.com/docs/design-systems/publishing)

## npm and Node package smoke (BEN-48)

For the npm-specific check, run the uncached Nx target after other builds finish:

```sh
NX_DAEMON=false BEND_VERIFY_NPM=1 pnpm nx run panda-consumer:verify --output-style=static
```

It uses `pnpm pack` to rewrite workspace ranges in the tarballs, then installs all Bend dependencies as local tarballs in a fresh external npm app. npm's direct-dependency override references keep those tarballs in the transitive graph. `npm install --ignore-scripts --no-audit --no-fund` uses normal peer resolution: it does not use `--legacy-peer-deps` or `--force`. Registry access is needed for the pinned non-Bend dependencies. The fixture checks the installed graph, direct Node ESM and CommonJS entry points, generated declarations, Panda layer ordering, consumer token overrides, and recipe extension and replacement. It scans only consumer source. Successful npm runs remove their temporary directory; set `BEND_KEEP_CONSUMER=1` to inspect it. Failures preserve it for diagnosis.

A Vite 8/Rolldown production comparison inspects emitted code and module sizes for installed ESM imports. The generated recipe subpath removes the unused SelectDropdown recipe when only Button is imported; it retains the recipe when requested. The Base UI root comparison is less favorable: Button alone still retains Select in the measured bundle because of the adapter’s top-level initialization. It does not establish minimal CSS, which is generated for the configured recipe catalog, or guarantee bundle sizes for other applications.

This is a local tarball and setup smoke, not a registry publication. Base UI, Ark UI, React Aria, and Ariakit depend at runtime on `@bend-ui/core`, which is explicitly private and tagged internal. Publishing requires a deliberate decision to publish that dependency or remove/bundle the dependency first; do not treat this check as release authorization.

On November 8, 2026, the npm mode passed with Node 24.22.1, npm 11.19.1, Panda 2.2.0 and Vite 8.1.4. Before enabling Panda's `forceImportExtension`, a direct Node import failed on an extensionless generated recipe import; the rebuilt packed packages passed both ESM and CommonJS imports. In the unminified comparison, the recipe-only output was 21,066 bytes for Button and 21,580 bytes with SelectDropdown; the latter contributed 680 rendered module bytes. The root adapter's measured rendered module was 111,332 bytes in both Button-only and Button-plus-Select builds, with Select retained in both. These are diagnostic measurements, not bundle-size budgets.

Final workspace validation ran `NX_DAEMON=false pnpm validate --base=origin/main --output-style=static` successfully (52 tasks for 12 projects and dependencies, 14m 29s). The npm verifier then passed sequentially (8 tasks, 17.1s). Nx reported a remote-cache authorization warning, but both local commands exited successfully.
