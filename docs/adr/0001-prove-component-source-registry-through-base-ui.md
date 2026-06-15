# Prove the component source registry through Base UI

Bend UI will not start by building component source registry tooling or deepening `@bend-ui/react` as the shared public runtime. Instead, the Base UI adapter will first absorb a small low-level component slice and migrate those components toward Panda's generated `createStyleContext` and styled-system helpers. Once that public package shape is proven, the component source registry can be extracted around source synchronization and future generation/ejection workflows rather than becoming a runtime dependency.

Public package adapters should use their upstream primitive library's native composition model instead of preserving universal `asChild` polymorphism as a Bend UI abstraction. Base UI components should use Base UI composition, Ark UI components should use Ark UI composition, and React Aria Components should use React Aria composition.

The first Base UI slice should rewrite, not copy as-is, a small set of low-level components: Button, IconButton, Input, Badge, Stack, Text, Heading, and Card. That slice should avoid imports from `@bend-ui/react`, prefer Panda's generated styled-system helpers directly, and become the example shape for later registry synchronization.

Because Bend UI packages have not been released to npm, `@bend-ui/react` and `@bend-ui/primitives` do not need a public deprecation period. They can be removed once active workspace packages no longer depend on them.

The prior Radix adapter and Radix playground may be removed as part of this cleanup. The Ariakit adapter should remain in the workspace for possible future support, but it should not preserve a dependency on `@bend-ui/react` or `@bend-ui/primitives`.

`@bend-ui/react-utils` should remain available for future use, but it should not become a replacement runtime foundation. Keep it only for small React utilities that are deep enough to share.

Component creation plans should start from each upstream primitive library's catalog, not from a Bend-first parity matrix. Each adapter should expose an adapter-native component catalog that follows its upstream library's names, composition model, and API shape while sharing Bend UI visual intent through recipes where appropriate.

The upstream-first catalog plan should cover Base UI, Ark UI, and React Aria Components together, but implementation should start with Base UI as the v0 adapter. Ark UI and React Aria Components should be mapped and classified before their implementation work begins.

The catalog matrix should track product intent, implementation progress, and quality coverage separately. Product intent should use `v0`, `planned`, `defer`, `exclude`, `primitive-only`, and `covered-by-pattern`; implementation progress should use `missing`, `partial`, and `implemented`; quality coverage should use values such as `untested`, `tested`, `storybook`, `documented`, and `demoed`.
