# Component preview implementation and verification

`ComponentPreview` resolves a registered example into an isolated document and displays the source captured from the same React module by webpack at build time. The server-only source registry sends that source to the preview controls; it does not compile or evaluate user-supplied code. The build definitions declare each file as a watch dependency. The frame route excludes the Docs `next-themes` provider so that a stored Docs mode or a storage event cannot override the frame's own mode. Theme or mode changes reload the example; reset also remounts it and restores the default controls.

The examples use the existing Button, compound Select and Avatar adapters. The frame provides a separate document for portalled content. The available-width control never asks the iframe to exceed its parent; fixed widths are maximums. A visible source block remains selectable if clipboard access fails.

## Verification

- `NX_DAEMON=false pnpm nx test website --output-style=static` passed 8 tests in 4 files, including source-copy success/failure, reset, valid identifiers and the provider boundary.
- `NX_DAEMON=false pnpm nx run-many -p website -t lint typecheck --output-style=static` passed 11 tasks. Lint reported three existing warnings in the shared Docs page.
- Production browser checks covered Button, Select and Avatar at 1280 × 800 and 320 × 800. The displayed and copied source matched each module exactly; keyboard actions, reset, focus, Select portal bounds and focus return passed. Preview controls remained within the viewport. The six themes produced distinct computed canvas colors in both modes, and changing the outer mode and personality did not change the frame. No browser console or page errors were observed.
- Development watch verification changed and restored the Button example and confirmed that both the rendered status and source changed and reverted together. The desktop frame changed from 990 px fluid to 480 px and back to 990 px.
- Shared narrow Docs chrome and other existing MDX layout limitations remain tracked separately in BEN-50.

`NX_DAEMON=false pnpm validate --base=origin/main --output-style=static` passed all 12 affected tasks (2m 23s). Packed-consumer verification was not repeated because the changes are limited to the website and do not change a published package.
