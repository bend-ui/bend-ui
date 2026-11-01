# Docs toolkit scope (BEN-44)

This audit defines the smallest reusable toolkit for documenting a Panda design system. It targets the Base UI v0 path and preserves [ADR-0003](adr/0003-docs-site-on-fumadocs-core.md): the Docs site uses Fumadocs headless services, Bend UI components, and Panda styling. This is a package boundary proposal, not a new package or a claim that the toolkit is implemented.

## Existing implementation

Audit baseline: the repository before BEN-44, with `fumadocs-core` 16.7.12 and `fumadocs-mdx` 14.2.11 declared in `apps/website/package.json`. Upstream documentation is a capability reference; version-specific imports below come from this checkout. Do not migrate to newer Fumadocs APIs as part of the toolkit.

| Responsibility                   | Current implementation                                                                                                         | Decision                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| MDX collections, metadata, Shiki | `apps/website/source.config.ts`: `defineDocs`, `applyMdxPreset`, light/dark GitHub code themes                                 | Reuse; no second Markdown compiler or syntax highlighter                               |
| Content source and routes        | `lib/source.ts`: `loader`, `toFumadocsSource`; `app/docs/[[...slug]]/page.tsx`: page lookup, static params, metadata, MDX body | Keep in the Docs site                                                                  |
| Framework links and pathname     | `NextProvider`, `Link`, `usePathname` from Fumadocs Core                                                                       | Reuse; keep Next.js integration outside the toolkit                                    |
| Navigation and previous/next     | Fumadocs page-tree types and `findNeighbour`; Bend `Sidebar` presentation in `src/layouts/docs-layout.tsx`                     | Reuse data and current chrome                                                          |
| Table of contents                | MDX `toc`, Core `AnchorProvider`, `ScrollProvider`, `TOCItem`                                                                  | Reuse; no custom heading observer                                                      |
| Search index                     | `app/api/search/route.ts`: `createFromSource(source)`                                                                          | Reuse server search; a search interaction is separate site work, not a toolkit engine  |
| Code presentation                | Shiki output plus local `pre`/`code` overrides in `lib/mdx-components.tsx`; `.shiki` light/dark rules in `styles/globals.css`  | Reuse highlighting; add presentation features only when needed                         |
| Generic interactive MDX          | Client exports of Bend `Tabs`, `Accordion`, `Stack`, `Box` in `lib/interactive-mdx-components.tsx`                             | Reuse existing primitives; no parallel tabs/accordion implementations                  |
| Theme controls                   | `next-themes` color mode and site-owned personality switcher                                                                   | Keep global settings in the site; define preview scope separately                      |
| Component examples               | Button and Avatar MDX currently show fenced source; no shared live-example registry or preview                                 | BEN-45 gap                                                                             |
| Component contracts              | `packages/preset-base/src/contracts`: serializable anatomy, variants, state selectors, replacement validator                   | Reuse as design-system data; do not infer styling slots from DOM or upstream internals |
| Prop extraction                  | `scripts/docgen.ts`: experimental `react-docgen-typescript` JSON output                                                        | Evaluate in BEN-47; it is not wired into Docs pages                                    |

The MDX component map is intentionally small. It does not currently supply a copy-code control, a rich prop table, a live preview, or a generated anatomy view. Existing layout tests cover page-tree links, navigation, and color-mode behavior; they do not prove examples compile or that visible code matches a preview.

## Fumadocs capability review

Fumadocs already offers generic tabs, accordions, code blocks, and type tables in its UI ecosystem. Its Code Block uses Rehype Code output and adds presentation such as copy controls. Its TypeScript integration can extract type documentation. These are reuse candidates, not a reason to build another generic documentation framework.

The ready-made visible components commonly use `fumadocs-ui`, which ADR-0003 excludes because the Docs site uses Panda rather than Tailwind. Therefore:

- Keep the existing Core/MDX services and Bend generic primitives.
- Keep code highlighting in the current MDX pipeline. A copy button or code title, if needed, is a thin site presentation concern over that output.
- For BEN-47, evaluate Fumadocs TypeScript extraction before extending the experimental local extractor. Keep extraction separate from table presentation. Do not add `fumadocs-ui` just to render a type table; a Panda/Bend table can consume extracted data.
- Do not copy upstream UI components and silently claim they work with Panda. Any adapted implementation must retain applicable licensing and have its styling and interactions checked.

Upstream references reviewed on November 1, 2026:

- [Fumadocs Core introduction](https://www.fumadocs.dev/docs/headless): headless services and framework integration.
- [MDX](https://www.fumadocs.dev/docs/mdx): content processing and generated metadata; newer examples may use a different collection API.
- [UI component catalog](https://www.fumadocs.dev/docs/ui/components): existing generic documentation components.
- [Code Block](https://www.fumadocs.dev/docs/ui/components/codeblock): presentation over highlighted code.
- [Type Table](https://www.fumadocs.dev/docs/ui/components/type-table) and [TypeScript integration](https://www.fumadocs.dev/docs/markdown/typescript): presentation and extraction candidates.

## Proposed independent package boundary

Use `@bend-ui/docs-toolkit` as a provisional name for a future package. Start implementation inside the Docs site in BEN-45; extract only after a second integration proves the interface. BEN-44 does not add a workspace project or dependency.

The package would own:

- `ComponentPreview`: a rendered example with a matching source pane, accessible controls, and an explicit preview container.
- Optional playground controls driven by a typed schema, with controlled props and serialized JSX from the same values.
- Design-system-specific views: token/semantic alias swatches, component anatomy, and variant/state matrices from caller-supplied data.

It would accept examples and metadata through props. A host adapter would load real example source at build time, pair it with the rendered React export under one stable identifier, and pass highlighted source presentation into the toolkit. Do not scrape function source at runtime or maintain a second JSX string by hand. The toolkit must not import the site's `source`, `.source` output, routes, content files, or theme-personality catalog.

Keep these dependencies and responsibilities at the seam:

| Layer                | Owns                                                                                                     | Must not own                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Fumadocs Core/MDX    | Compilation, headings, TOC data, content tree, search data, code highlighting                            | Bend component metadata                                                                       |
| Docs site adapter    | Next.js route/provider wiring, source-file loading, MDX registration, global theme settings, page layout | A duplicate preview implementation for each component                                         |
| Future toolkit       | Example frame and interaction, controlled playground state, metadata presentation                        | Filesystem reads, Next.js routing, a Markdown parser, a new component behavior implementation |
| Design-system source | Recipes, tokens, exported types, component contracts, behavior                                           | Docs-specific navigation or page copy                                                         |

The first implementation may depend on React and Bend's Base UI adapter for controls and use Panda-generated styles. Document that dependency honestly; independence means no application/router coupling, not an unsupported promise of styling-library independence. Keep build-time source loading and metadata extraction out of the browser bundle. A reusable build-time extractor, if justified, should have a separate entry point with no client import path.

## Preview requirements and unresolved decisions

BEN-45 should prove one basic Button example and one compound/portalled example before committing to an extraction API. Both must render the actual imported component. The visible source must be the same example file used to render the preview. Retain source-only pages when an example cannot be rendered; do not silently substitute a different implementation.

A preview's color mode and theme personality must be explicit. Scoped classes/custom properties must reach portalled content without changing the surrounding docs theme. Reuse the existing [contextual surface work](contextual-surfaces.md); decide whether a preview supplies a portal container or uses a scoped iframe after testing Select/Dialog. Do not promise isolation from an ordinary wrapper alone.

Controls need accessible names, keyboard operation, visible focus, a copy status announcement, and an understandable reset. Source stays usable without opening a controls panel. Define sensible dimensions and overflow for long content, narrow screens, and overlays; avoid fixed heights that clip a dialog or focus indicator. Test light/dark and reduced motion with the actual components.

New variants and compounds are not merely playground strings: consumer codegen cannot widen published component declarations or update their runtime metadata. A playground must offer only supported values unless it renders a consumer-owned component wired to that generated recipe. See [the verified customization boundary](panda-recipe-customization.md).

## Delivery sequence

| Issue  | Deliverable and completion evidence                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BEN-44 | This inventory and boundary proposal; representative Button reference and recipe customization guide in the Docs site                                                                 |
| BEN-45 | Shared source-backed live preview; Button and a compound/portalled example; code/render parity and accessible preview controls verified                                               |
| BEN-46 | Optional typed controls and synchronized JSX; Button/Select examples with controlled values and reset behavior                                                                        |
| BEN-47 | Generated token, variant/state, anatomy, and prop documentation; evaluate existing contract metadata and Fumadocs extraction; report unsupported types rather than inventing defaults |

BEN-39/40/41 remain owners of reference component behavior and API decisions. BEN-38 owns shared control foundations. This audit documents current behavior without implementing those issues or freezing their future API.

## Representative pages

- [Button reference](../apps/website/content/docs/components/button.mdx): current composition, anatomy, states, and API; ordinary fenced examples intentionally remain until BEN-45 supplies a single-source live preview.
- [Customize a Button recipe](../apps/website/content/docs/foundation/recipe-customization.mdx): extend an existing variant and understand whole-recipe replacement and published-runtime limits, using the existing packed-consumer proof.

The reference page and how-to guide exercise distinct content needs without introducing another MDX renderer or a generic UI package.
