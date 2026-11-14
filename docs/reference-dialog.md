# Reference Dialog (BEN-41)

The Base UI Dialog already composes native modal behavior with Panda slot context. BEN-33 proved prop/ref/recipe forwarding, and BEN-36 added the opt-in surface scope that survives portals. BEN-41 retains that implementation and adds modal regression coverage, responsive popup bounds, and a real nested Docs example.

## Changes

- `packages/base-ui/src/components/Dialog/Dialog.spec.tsx` tests accessible title/description, initial focus, Escape close reasons, default return focus, controlled open state, outside-dismissal opt-out, explicit final focus, and nested Escape/return focus in light and dark mode.
- `packages/preset/src/recipes/dialog.ts` replaces size `minWidth` with `width`, bounds the popup to `100vw - 2rem` and `100dvh - 2rem`, and makes long popup content scroll vertically. Minimum width previously overrode a smaller viewport, so adding `maxWidth` alone would not solve narrow-screen overflow.
- `apps/website/lib/examples/dialog-example.tsx` renders real nested Dialog parts. The MDX map exposes it to the [Dialog page](../apps/website/content/docs/components/dialog.mdx). It uses explicit preview color modes and distinct surface appearances; it does not change the site's theme settings or introduce generic preview infrastructure.
- `apps/website/panda.config.ts` explicitly generates the non-JSX `backdrop` recipe. Production extraction already found the Dialog and Button rules, but omitted the ordinary Backdrop recipe used through `Dialog.Backdrop`; the targeted static recipe entry restores the real viewport overlay.
- The Dialog Storybook trigger now uses the supported `secondary` treatment instead of the unsupported `outline` value. The component catalog records the new Docs page.

The recipe retains its slots, class namespace, default medium size, and `sm`/`md`/`lg` values. Surface elevation remains independent of stacking. No new focus trap, portal manager, or runtime behavior wrapper is added.

## Permanent regression checks

```sh
NX_DAEMON=false pnpm validate --base=origin/main --output-style=static
```

On November 1, 2026, the integrated gate passed all 60 tasks for 15 projects and nine dependency tasks in 13m35s, including the production Docs build, package tests, lint, and typechecking. The Base UI suite passed all 34 tests, including the four Dialog modal cases; the preset suite passed all 66 tests. The complete log is `/tmp/ben41-final-validation.log`. PR #207's website build changes and PR #208's foundations are now integrated, so the earlier Docs build prerequisite is resolved.

## Initial source browser proof

A temporary Vite harness imported the actual `DialogReferenceExample` and Base UI source through the workspace aliases. Panda 2.2 generated CSS from the actual design preset with static recipe variants, including the changed Dialog recipe. This was not a CSS mock. Chromium ran at 1000 × 800 and 320 × 640 in both preview modes.

Verified actions in each mode:

1. Focus Open preferences and activate with Enter; Display name receives initial focus.
2. Traverse Tab eight times and Shift+Tab eight times; focus remains in the top modal after Base UI's focus guards settle.
3. Open Sharing with the keyboard; repeat both traversal directions in the nested modal. The first popup has `data-surface-level="raised"`, the nested popup `overlay`, and both are real body portals.
4. Press Escape; only Sharing closes and focus returns to Review sharing in Preferences. Press Escape again; Preferences closes and focus returns to Open preferences.
5. Reopen and click outside the popup; the default dismissal closes it and restores the trigger. This complements the permanent unit test that disables pointer dismissal.
6. At 320px width, reopen and repeat focus traversal. The popup has x=16px and width=288px in both modes, inside the viewport. The labeled close icon measures at least 24 × 24px (configured as 32 × 32px).
7. Append deliberately excessive paragraph text to the open popup to stress the recipe. The computed max-height is 608px, client height is 606px, scroll height is 7487px, and `overflow-y` is `auto`. Focus the Close action and activate it with Enter; the task can still be dismissed and focus returns to the trigger.

The browser reported no runtime errors. Visual review at 320px caught a long close label crowding the title; the final example uses a visible close icon with an explicit accessible name and sufficient hit area. No screen-reader session or complete WCAG audit was performed.

| Preview mode | Raised foreground / background       | Overlay foreground / background      | Raised text contrast | Overlay text contrast |
| ------------ | ------------------------------------ | ------------------------------------ | -------------------- | --------------------- |
| Light        | `rgb(32,32,32)` / `rgb(235,235,235)` | `rgb(32,32,32)` / `rgb(219,219,219)` | 13.67:1              | 11.77:1               |
| Dark         | `rgb(250,250,250)` / `rgb(38,38,38)` | `rgb(250,250,250)` / `rgb(54,54,54)` | 14.50:1              | 11.58:1               |

Ratios use browser-resolved RGB values and WCAG relative luminance for these four example text pairs. They do not certify every component state, backdrop, or consumer override. Existing [contextual-surface evidence](contextual-surfaces.md) remains the proof for custom portal targets, SSR/hydration, style callbacks, and scope overrides.

## Integrated production Docs proof

After the gate, the completed Next production build was served locally on port 4300. The temporary `/tmp/ben41-built-docs-check.cjs` checked `/docs/components/dialog` in Chromium at 320 × 640, using the site's emitted production CSS rather than the initial harness's static recipe generation. Both preview modes returned HTTP 200 with no runtime errors.

The check repeated initial focus, eight forward and eight reverse Tab steps in each modal, nested Escape dismissal and return focus, outer Escape dismissal and return focus, and default outside-click dismissal. Both popups were body portals with the intended raised/overlay levels and browser-resolved colors from the table above. Visual review of the settled light popup and dark nested popup confirmed the geometry and distinct surfaces.

In each mode, the outer popup measured x=16px, y=184px, width=288px, and height=272px. Its generated recipe resolved to max-width 288px, max-height 608px, and `overflow-y: auto`. The real Backdrop was fixed at 320 × 640px with `rgba(0, 0, 0, 0.5)`, 10px backdrop blur, and final opacity 1. This verifies the targeted extraction fix in the actual Docs build.

Appending excessive content produced a 606px client height, 7486px scroll height, and scroll position 6880px. Keyboard focus scrolled the labeled 32 × 32px Close action back into view; Enter dismissed the dialog and returned focus to Open preferences.

Results are recorded in `/tmp/ben41-built-docs-results.json`. Screenshots are `/tmp/ben41-built-docs-light-320.png`, `/tmp/ben41-built-docs-dark-320.png`, `/tmp/ben41-built-docs-light-nested-320.png`, and `/tmp/ben41-built-docs-dark-nested-320.png`. The production server was stopped after verification. Shared Docs chrome styling and narrow-page layout remain tracked separately in BEN-50.
