# Bend UI Context

Bend UI is a proof-of-concept React design-system workspace for projects using Panda CSS. Its job is to provide a strong design-system foundation: reusable Panda recipes, React package adapters for major headless component libraries, and tooling for teams to create, generate, eject, and maintain their own design-system code.

The API is still allowed to change. Prefer documentation and implementation plans that make the current direction explicit over claims that the public surface is stable.

## Product Goal

Bend UI helps teams start and maintain design-system libraries without coupling their visual system to one React headless component library.

The first happy path is a team starting a new design system. The core idea is that styles live in Panda CSS recipes. A user can consume a Bend UI package directly, generate a component into their own project, or eject a component later and keep customizing it locally. Because the recipe owns the styling, teams can change visual design without maintaining every complete component implementation themselves.

Generation and ejection should take inspiration from shadcn/ui and Park UI: CLI-first, source-oriented, and friendly to local ownership. An ejected component should become local code in the user's project, not a permanent dependency on Bend UI React foundation modules. The exact source format is still undecided: it may generate from package source directly or from a curated registry format with metadata.

Longer term, Bend UI should include tooling for design-system creation and maintenance: CLI tools, agent skills, prompts, token management, component generation, and upgrade/ejection workflows.

Current supported adapter direction:

- Base UI
- Ark UI
- React Aria Components

The prior experimental Radix UI adapter has been removed. Do not treat Radix parity as a goal unless that decision changes.

Initial v0 scope: ship a minimal but complete design system around Base UI first. Base UI is the first supported adapter because it has current ecosystem momentum and is already the most active package in this workspace. V0 should include a good design preset and a basic documentation site. CLI generation/ejection can wait until after the first design-system slice is coherent.

## Domain Vocabulary

Use these terms when discussing the repo.

- **Design system**: the whole Bend UI product: tokens, recipes, React primitives, package adapters, generation/ejection paths, docs, demos, and release checks.
- **Token system**: named design values such as colors, spacing, typography, shadows, radii, and semantic tones.
- **Recipe**: a Panda CSS style module for one visual pattern. Recipes may be single-part or slot-based.
- **Structural preset**: `@bend-ui/preset-base`, the Panda CSS preset for structural recipe shape only. It should define parts, slots, state selectors, and minimal layout structure; it should not define product colors, padding scales, typography choices, or other visual decisions.
- **Design preset**: `@bend-ui/preset`, the Panda CSS preset for the actual Bend UI visual language. It composes the structural preset and adds tokens, semantic tokens, colors, spacing, typography, themes, global CSS, and library-specific conditions.
- **Styled system**: generated Panda CSS output consumed by the React packages. Do not hand-edit generated styled-system output unless a plan explicitly says so.
- **React foundation**: `@bend-ui/react`, the transitional local React module for styled elements, layout primitives, polymorphic `asChild` support, and shared helpers. This package is a removal target because public package adapters should use Panda's generated helpers and their upstream primitive library's native composition model instead.
- **Package adapter**: a package that adapts an upstream primitive library into the Bend UI design system. Current support targets are Base UI, Ark UI, and React Aria Components.
- **Adapter-native component catalog**: the set of Bend-styled components an adapter exposes by following its upstream primitive library's names, composition model, and API shape. It should share Bend UI visual intent without forcing identical component parity across adapters.
- **Upstream primitive**: a component primitive from an external library such as `@ark-ui/react`, `@base-ui/react`, `react-aria-components`, or `radix-ui`.
- **Part**: a named slot in a compound module, usually exposed through a `data-part` attribute and styled by a slot recipe.
- **Component source registry**: the internal canonical source and metadata for Bend UI component templates that can be synchronized into public package adapters or copied into a user's project by CLI tooling. It is not a public runtime dependency.
- **Generated component**: a component copied or created in the user's project from the component source registry by CLI tooling.
- **Ejected component**: a component that started from Bend UI but is now owned and modified in the user's codebase. Ejected components should depend on the user's Panda/styled-system setup and chosen headless library, not on `@bend-ui/react`.
- **Design-system tooling**: CLI tools, agent skills, prompts, token management, generation workflows, and maintenance workflows that help users create and evolve a design system.
- **Operational pattern**: a higher-level UI pattern for dense application screens, such as surfaces, metrics, page headers, action rows, and timeline items.
- **Demo app**: an app that proves package adapters and operational patterns in realistic screens. Current demos include dental management and ski resort operations.
- **Docs site**: the Next/Fumadocs application that explains installation, foundations, and selected modules.
- **Package health**: the build, export, metadata, dependency, and CI checks that determine whether a public package is safe to publish.

## Workspace Map

### Foundation packages

- `packages/preset-base`: structural preset. It should describe component anatomy and state structure without product styling such as colors, padding, typography, or theme decisions.
- `packages/preset`: design preset. It composes `preset-base` and adds the Bend UI visual language: tokens, semantic tokens, themes, global CSS, and library-specific conditions.
- `packages/styled-system`: checked-in workspace package for generated Panda output used by examples and packages.
- `packages/theme`: token-oriented package for theme assets.
- `packages/react`: React foundation. Owns `bend`, shared layout/text modules, `withRecipe`, `withParts`, `createStyleContext`, and polymorphic rendering. Remove this package once active package adapters no longer depend on it.
- `packages/primitives`: prior shared utility package. Remove this package with `packages/react`; inline tiny utilities locally instead of preserving a broad shared primitive surface.
- `packages/react-utils`: small shared utilities. Keep these deep enough to justify their existence; avoid pass-through helpers.

### Package adapters

- `packages/base-ui`: Bend UI adapter over Base UI. This is the v0 focus and currently the most active adapter.
- `packages/ark`: Bend UI adapter over Ark UI.
- `packages/aria`: Bend UI adapter over React Aria Components.
- `packages/ariakit`: early adapter over Ariakit. Keep it for possible future support, but do not treat it as a current support target unless explicitly revived.

Package adapters should hide upstream primitive details where Bend UI has a clear opinion. They may expose compound parts when callers need composition, but callers should not need to relearn every upstream primitive's naming and styling quirks.

Adapters should stay flexible: users may consume them as packages, generate components into their project, or eject components when they need local ownership.

Adapter naming should generally follow the upstream primitive library. Authors may already know Base UI, Ark UI, or React Aria naming, so matching upstream anatomy is more important than forcing identical Bend UI part names across all adapters.

Do not assume shared React foundation modules are the long-term answer for every adapter. Polymorphism and missing primitive coverage may need to live per adapter unless a genuinely deep shared module emerges.

### Apps and docs

- `apps/storybook`: central Storybook surface.
- `apps/website`: documentation site. For v0, this should explain the Base UI adapter, the design preset, installation, and basic usage.
- `apps/vite-base-ui`: Base UI demo app with dental management and ski resort operations.
- `apps/vite-base-ui-e2e`: Playwright coverage for the Base UI demo.
- `apps/vite-ark`, `apps/playground-panda`: playground and proof surfaces.

### Tooling and plans

- `CLAUDE.md`: agent instructions for Nx usage and project context.
- `plans/`: advisor-authored implementation plans. Treat these as work orders, not design decisions.
- `.github/workflows/`: CI and visual review workflows.
- `packages/cli`: early home for CLI tooling inspired by shadcn/ui and Park UI. CLI work is deferred until after the Base UI v0 slice has a coherent preset, adapter, and docs story.

## Main Flows

### Styling flow

1. `packages/preset-base` defines structural recipe anatomy and state shape.
2. `packages/preset` composes `preset-base` and adds visual design decisions: tokens, semantic tokens, themes, global CSS, and library-specific conditions.
3. Panda CSS generates styled-system artifacts for packages and apps.
4. `@bend-ui/react` wraps styled-system primitives and exposes shared React foundation modules.
5. Package adapters compose upstream primitives with Bend UI recipes and parts.
6. Storybook, docs, and demos exercise the adapters.

### Adapter flow

1. A package adapter imports an upstream primitive.
2. It applies a recipe through `withRecipe`, `withParts`, or `createStyleContext`.
3. It exports a compound Bend UI module.
4. Apps and docs import the Bend UI module, not the upstream primitive.
5. CLI generation/ejection tooling may copy the module shape into a user's project while keeping recipe-driven styling.
6. Ejected components become local code and should not require `@bend-ui/react`.

Open question: decide whether generation should also copy/eject recipes, or whether generated components should assume the user installed `@bend-ui/preset`.

### Demo flow

1. Demo data lives beside the demo app.
2. Demo pages compose package adapter modules and operational patterns.
3. E2E and visual tests should verify user-visible flows rather than upstream primitive internals.

## Architectural Direction

The repo wants deeper modules at these seams:

- **Styling adapter seam**: recipe splitting, part naming, default props, refs, and display names should have strong locality instead of being reimplemented per package adapter.
- **Recipe catalog**: recipe ownership across the structural preset and design preset should be easy to explain and test. Structural anatomy belongs in `preset-base`; visual decisions belong in `preset`.
- **Sidebar and operational patterns**: deeper modules are emerging in `packages/base-ui`; reuse the ideas without copying demo-specific details into every adapter.
- **Generation and ejection path**: the package interface should not block users who want to own generated components locally. Ejected components should become local code, not thin imports from Bend UI packages.
- **Adapter anatomy**: package adapters should generally match upstream naming and composition instead of forcing one shared naming scheme.
- **Base UI v0 slice**: prioritize `packages/base-ui`, the design preset, and the docs site before broadening adapter support or investing in CLI generation.
- **Design-system tooling**: CLI tools, agent skills, prompts, token management, and maintenance workflows are part of the long-term product, not side projects.
- **Package health**: build, export, audit, and metadata checks should become a single understandable release story for public packages.

## Testing Expectations

- Use Nx through pnpm: `pnpm nx ...`, `pnpm build:packages`, `pnpm exec nx affected --target=test`.
- Prefer tests at the Bend UI module interface. Do not test upstream primitive implementation details unless the adapter intentionally exposes them.
- For package adapters, useful tests assert renderability, compound part exposure, ARIA-visible behaviour, and variant/part wiring.
- For demos, useful tests assert route-level flows and visible operational outcomes.

## Agent Guidance

- Read this file before proposing architecture changes.
- Use the vocabulary above in plans, reviews, and issue descriptions.
- When a new stable concept appears, add it to this file before spreading the term through code or docs.
- If a decision should prevent future agents from re-suggesting a refactor, write an ADR under `docs/adr/`.
