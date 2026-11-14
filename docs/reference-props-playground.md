# Component preview props playground

Button and Select previews expose a small, typed set of controls. The same validated state drives the rendered example and the generated usage; the separately displayed full module is the source used to derive that usage. Avatar demonstrates that controls are optional. Reset restores both controls and the example's state. Select choices made inside the preview also update the controls and generated usage.

The Button example deliberately uses `primary` without offering a variant control. A production-browser survey of the existing recipes across six theme personalities and both modes measured minimum resting text contrast of 4.752:1 for `primary` and 12.298:1 for `tertiary`. The existing `secondary` (minimum 2.95:1), `danger` (2.63:1), and `inverse` (1.00:1) recipes fail at rest. `tertiary` falls to 1.575:1 on hover in dark Stratus and also fails in the other dark personalities. These variants are excluded pending their own contrast fixes. The 60-measurement resting survey and 216-measurement state sweep are retained in `/tmp/ben46-contrast.json` and `/tmp/ben46-interactive-contrast.json` for the handoff; these limitations are not fixed by the playground.

## Verification

- Focused website tests: 12 tests passed, covering state validation, source-derived usage, escaping, message boundaries, reset and copying.
- Development browser checks covered both examples at 1280 and 320 pixels, interactive state, iframe reload synchronization, keyboard selection and focus return, portal bounds, malformed messages and copy equality. Editing and restoring the example source updated the live example and both source views.
- Final production browser checks passed for Button and Select at 1280×800 and 320×800, including long and empty labels, disabled controls, reload synchronization, keyboard selection and focus return, portal bounds, malformed messages, copy equality, reset and absence of page or console errors.
- The final primary-only production sweep passed all 108 combinations of six personalities, two modes, three sizes and resting, hover and keyboard focus states. Minimum text contrast was 4.752:1.
- `NX_DAEMON=false pnpm validate --base=origin/main --output-style=static` passed 12 tasks (9 cached); website lint reported three existing shared Docs warnings. No package source or exports changed, so the packed-consumer check was not required.
