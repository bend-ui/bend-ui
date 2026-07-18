# Docs site builds on fumadocs-core, not fumadocs-ui

The Docs site (`apps/website`) needs documentation chrome: a docs layout, a sidebar page tree, a table of contents, a previous/next pager, and MDX rendering. Fumadocs ships `fumadocs-ui`, which provides all of this for free — but its components are built for Tailwind CSS. Bend UI styles everything with Panda CSS through the design preset, and the docs app had never actually wired Tailwind (PostCSS runs only Panda, there is no Tailwind config, and nothing imported `tailwindcss`), leaving the `fumadocs-ui` chrome effectively unstyled.

Decision: remove `fumadocs-ui` (and the dangling `tailwindcss` dependency) and rebuild the docs chrome on top of `fumadocs-core` (headless) using `@bend-ui/base-ui` components and the Bend design preset. We keep `fumadocs-core` and `fumadocs-mdx` for content sourcing, the page tree, the table of contents, the search index, and the MDX/Shiki pipeline — only the Tailwind-coupled UI layer is replaced. The framework-agnostic Fumadocs Next provider supplies link/pathname/search wiring under the App Router, and `next-themes` drives the `.dark` class the design preset already reads.

This deliberately trades the free, batteries-included `fumadocs-ui` chrome for hand-rolled layout components, in exchange for a single styling system (Panda only) and docs that dogfood the Base UI adapter — the stated v0 focus. A future reader seeing hand-written sidebar/TOC/pager code should understand it is intentional, not a reinvention of something Fumadocs already offers.

## Consequences

- The Docs site owns its layout components (root provider, docs layout, sidebar, page-tree renderer, TOC, pager) instead of importing them from `fumadocs-ui`.
- The Docs site is a first-class consumer of `@bend-ui/base-ui`, so gaps in the Base UI adapter surface here first.
- Fumadocs version bumps only affect the headless core/mdx packages; UI upgrades no longer apply.
- Reversing this (readopting `fumadocs-ui`) would require introducing Tailwind into the docs app and discarding the Panda-based chrome, so it is not a casual change.
