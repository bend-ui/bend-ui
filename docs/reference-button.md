# Reference Button and IconButton (BEN-39)

The Base UI reference retains the existing Button recipe and upstream composition model. `variant` expresses hierarchy (`primary`, `secondary`, `tertiary`) or contextual treatment (`danger`, `inverse`); `size` independently selects the shared `sm`/`md`/`lg` control scale. Defaults remain secondary and medium. No additional hierarchy or treatment axes are introduced.

## Changes

- Button keeps numeric zero labels and wraps zero-valued icons in decorative icon slots. Conditional false icons still omit the slot. Convenience icons and the busy presentation are hidden from the accessible name.
- IconButton now normalizes `isDisabled` and `isLoading` like Button. Native disabled behavior prevents activation; loading sets `aria-busy` and renders the spinner slot without implicitly disabling. Its children remain the visually hidden accessible name.
- The primary hover recipe references the existing `fill.primary.hover` token. The other variant token paths were checked for the same typo. The structural preset includes the already public spinner slot so structural-only replacements can preserve the full anatomy.
- Production contrast review also corrected recipe pairings: inverse uses strong text against its existing inverse fill; secondary uses a raised background and weaker hover fill; danger uses weaker/weak danger fills; tertiary uses the weaker hover fill. These changes preserve role tokens and variant names without changing the global palette. The Button focus outline uses opaque `stroke.primary`: the shared translucent outline measured below 3:1, while primary/secondary variant shadows do not provide a contrasting focus ring.
- The contract metadata describes the existing hierarchy/treatment convention. The expanded Button page and live example cover real actions, sizes, IconButton, disabled/busy state, and Base UI `render` composition. Non-native actions retain button semantics; navigation should use a real link.

Native composition and HTMLElement refs pass through the existing styled root. The adapter adds no new polymorphism abstraction or keyboard handlers.

## Customization boundary

The existing BEN-31 isolated packed-consumer fixture proves token overrides, recipe extension/replacement, public slots, consumer-defined variant/compound rules, and the published/generated type boundary. BEN-39 extends that fixture with packed IconButton state markup, Button/IconButton public-slot classname parity, and opt-in browser-computed extension/replacement styles (`BEND_VERIFY_BUTTONS=1`, requiring an installed Playwright Chromium). Default verification retains the runtime/classname assertions without launching a browser. The consumer changes its Panda configuration and generated CSS; it does not edit either React component.

Supported published values can consume replacement CSS through the existing class namespace. New consumer values and compound rules require the consumer-generated recipe runtime and a consumer-owned component; they do not change the packed component's types or emitted compound classes. The fixture intentionally narrows some replacement values and tests only values retained by that replacement.

## Verification

Focused tests cover native disabled and busy aliases on both controls, decorative accessible naming, numeric content, public parts/variant context, ref/native render composition, focusable-disabled behavior, and upstream non-native Enter/Space activation. The packed consumer also compiles IconButton composition, recipe and ref props against the published declarations.

```sh
NX_DAEMON=false pnpm nx run-many -t test,typecheck -p base-ui,preset,preset-base --output-style=static
```

Focused validation passed 11 tasks in 4m57s, including all 34 Base UI tests and 66 preset tests. The focused log is `/tmp/ben39-focused-validation.log`.

```sh
NX_DAEMON=false pnpm validate --base=origin/main --output-style=static
```

The full integration gate passed 62 tasks for 16 projects and eight dependency tasks in 13m57s, including the production Docs build and affected adapter/consumer checks. The log is `/tmp/ben39-final-validation.log`.

```sh
BEND_VERIFY_BUTTONS=1 NX_DAEMON=false pnpm nx run panda-consumer:verify --output-style=static
```

The sequential packed-consumer run passed eight tasks in 21.7s and verifies the default runtime/classname and declaration contracts plus explicit browser-computed Button/IconButton extension and replacement styles. Its log is `/tmp/ben39-packed-validation.log`.

## Color coverage boundary

Color review covers the Docs site's default **Stratus** personality in both document color modes. A separate extracted-CSS diagnostic also checked the legacy `default` theme, which is not offered by the Docs personality selector. That legacy theme's primary token pairing still measures about 4.09:1 at rest and 1.80:1 on hover; it needs a token/theme follow-up. This issue does not claim contrast compliance for every registered theme or consumer override and does not change the global palette to conceal that limitation.

## Production Docs proof

The actual production `/docs/components/button` page is checked at 1280×800 and 320×800 in both document modes, using the site's Stratus personality. The browser proof checks HTTP 200, no page runtime errors, Enter/Space activation of Button, IconButton and composed actions, Tab skipping disabled controls, busy semantics, hidden icon labels, and generated 32/40/48px control sizes. Every treatment is measured at rest, hover and keyboard focus, including resolved primary hover/focus tokens. Text contrast is at least 4.75:1 across that matrix. The opaque focus outline measures 4.75:1 in light mode and 3.64:1 in dark mode against the adjacent page surface; primary's shadow remains variant decoration and is not counted as focus evidence.

A second production-CSS matrix (`/tmp/ben39-state-matrix.json`) records all 100 combinations of five treatments, normal/hover/focus/disabled/busy states, two modes, and Stratus/legacy default themes. Stratus enabled states pass 4.5:1 text contrast; disabled states resolve opacity 0.5, and busy alone retains enabled styling. Focus contrast also passes 3:1 on the tested legacy default surfaces. Its primary text contrast limitation remains as described above.

Results: `/tmp/ben39-built-docs-results.json`. Screenshots: `/tmp/ben39-built-docs-{light,dark}-{1280,320}.png`. The proof covers these rendered states and surfaces, not a complete screen-reader or WCAG audit. Shared MDX heading/code styling and narrow Docs chrome overflow remain BEN-50 follow-ups.
