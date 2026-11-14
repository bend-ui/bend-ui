# Reference Select proof (BEN-40)

Validated against installed `@base-ui/react` 1.6.0. The implementation uses the existing Base UI adapter and shared slot recipes; it introduces no new component package or test runner.

## Public composition and compatibility

`Select.Root<Value, Multiple>` retains Base UI's generic value, multiple-selection and label-metadata types, and now exposes the existing `size` recipe axis. Public native `Trigger` owns the complete control appearance while public `Control` supports grouped composition. `Positioner` provides the independent dropdown recipe across the portal. The website example renders the actual compound implementation, with two labeled groups and 60 options.

The convenience `Select` now requires a flat `items` array of `{ value, label, disabled? }`. This is a v0 API change: previously `items` was optional upstream metadata, while the implementation always rendered four hardcoded fonts. Existing repository callers now supply their actual data. Convenience callers may use generic values and `multiple`, and must provide `aria-label` or `aria-labelledby`; compound callers retain the full native metadata/composition API.

The public Control is retained from the updated foundations prerequisite and recorded in the public anatomy contract. Ark UI also uses the shared recipe and needs a surrounding Control for its grouped anatomy. Both Control and standalone Trigger retain control sizing/focus treatment; `:where(.Select__control) &` removes duplicate Trigger borders/focus inside a Control without adding selector specificity that would defeat consumer replacements. React Aria's current Select is a native re-export and does not consume this recipe. No other adapter runtime changed.

Dropdown bounds use Base UI's `--available-height` and `--available-width`, with viewport fallbacks for adapters without those variables. Selection, highlight and disabled state remain distinct; disabled Base UI options may receive keyboard highlight but cannot be selected.

## Automated validation

- `NX_DAEMON=false pnpm nx run-many -t test,typecheck,lint -p base-ui,preset,preset-base --output-style=static`: all 14 tasks passed in 5m32s. Base UI has 36 tests (including the upstream public Control test, extended to render its size class); Preset has 66 tests.
- `NX_DAEMON=false pnpm validate --base=origin/main --output-style=static`: all 76 tasks across 21 projects and their dependencies passed in 14m48s, including production website build, lint, tests and typechecks. Log: `/tmp/ben40-final-validation.log`.
- Tests cover keyboard selection, Escape without commit, disabled root/options, custom-container portal, popup ref and selected attributes, explicit final focus, generic number/object/multiple values, all three public sizes, public Control, and caller-owned convenience data.
- `NX_DAEMON=false pnpm nx run panda-consumer:verify --output-style=static`: all 8 tasks passed for the installed-package extension/replacement proof, including production builds and generated/published dropdown class parity. Both recipes are changed solely in consumer configuration; Select React source is unchanged by that consumer. The subsequent prerequisite reconciliation adds the public Control export; convenience behavior and recipe styling are unchanged.
- The Select MDX page compiles with the installed website Fumadocs MDX preset and is included in the successful production build.

Run packed-consumer and workspace checks sequentially because their dependency builds rebuild shared declarations. The current branch incorporates the updated foundations prerequisite and merged PR #207.

## Production CSS extraction

The integrated production Docs check reproduced an unbounded popup (x=5, y=-1060, width=328, height=1512 at 320px). Its built CSS contained no `SelectDropdown__content` rule. The earlier temporary harness generated every recipe statically, which concealed this application extraction gap.

The website now explicitly generates only `select` and `selectDropdown` under `staticCss.recipes`. Adding JSX recipe metadata alone did not emit those rules with the installed Panda 2.2.0; those unsuccessful probes were removed. The actual website config now extracts the Control/Trigger sizes, popup bounds and state rules with zero diagnostics. This fix changes the production stylesheet, not the example's inline styles.

The actual built route `/docs/components/select` then passed `/tmp/ben40-built-docs-check.cjs` in Chromium at 320 × 640 in both light and dark modes. The body-portalled popup is x=5, y=132, width=310, height=320; its internal client/scroll heights are 318/1984px, `overflow-y` is `auto`, and opening-animation opacity settles to 1. The current Stratus background/text colors reverse between `oklch(0.913 0.015 91.446)` and `oklch(0.297 0.142 262.466)`. The real Trigger has a 40px minimum height and 1px border. All 60 options are present; End/Enter selects Workspace 60, and both selection and Escape restore Trigger focus. HTTP status is 200 with zero runtime errors.

Final production evidence: `/tmp/ben40-built-docs-results.json`, `/tmp/ben40-built-docs-light-320.png`, and `/tmp/ben40-built-docs-dark-320.png`. The shared Docs title/body still clip slightly at the left at 320px; this is recorded for BEN-50 rather than expanded into Select scope. The temporary production server was stopped after verification.

## Browser proof

A temporary ignored Vite harness imports the actual website example, Base UI/Ark adapter source and generated shared-preset CSS. Headless Chromium performed the same sequence in document-level light and dark modes:

1. Open with ArrowDown, Enter and Space; verify 60 options.
2. End scrolls Workspace 60 into view; Enter selects it and returns focus to Trigger.
3. Home then Escape leaves the committed value unchanged and returns focus.
4. Navigate to disabled Workspace 03; Enter leaves the popup open and value unchanged.
5. Type `Workspace 12` and commit; Tab dismisses and focuses the following button.
6. Outside click dismisses. Reopen at a 320 × 640 viewport and scroll to the final option.
7. Tab/Shift+Tab exposes standalone Trigger's 4px focus outline. Focus the real Ark Trigger and confirm only its surrounding Control draws a ring.

At 320px, in both modes the body-portalled popup is x=32, y=128, width=256, height=320. Internal client height is 318px versus 1984px scroll height; `overflow-y` is `auto`. Light popup background/text are RGB (244,245,244)/(26,26,25); dark reverses those colors. Trigger fill changes from (230,230,229) to (39,39,38). Both modes retain a 40px Trigger minimum height and 1px border. The actual Ark Control has a 1px border and 4px focus outline; its Trigger has no border, outline or shadow. No browser runtime errors occurred.

The packed-consumer browser proof opens the installed convenience Select in each production build, measures the actual body-portalled popup, selects Monospace and checks focus returns to the Trigger. Extension uses an 11px Trigger radius and 7px violet popup border; replacement uses a 2px radius and 3px violet popup border.

Temporary evidence: `/tmp/ben40-browser-results.json`, `/tmp/ben40-packed-browser-results.json`, `/tmp/ben40-light-320.png` and `/tmp/ben40-dark-320.png`. No permanent browser framework or custom Nx target was added.

## Theme isolation limit for future docs previews

The example inherits the website's document-level Theme/color mode, including its body portal. Merely replaying `.dark` and `data-panda-theme` on a nested region/popup does not recompute semantic aliases already resolved on an ancestor. The browser proof switches the HTML boundary and asserts resolved colors, rather than trusting class names. Future isolated documentation previews (BEN-45) should use an iframe/document boundary or an explicit fully resolved surface appearance; a local mode-class toggle alone is insufficient. Select does not add a contextual SurfaceProvider bridge in this issue.
