# Canonical state-attribute contract via union conditions

Bend UI recipes must be implementation-agnostic so headless adapters (Base UI, Ark UI, React Aria) stay interchangeable and can even be mixed in one app. The problem: the same semantic state maps to different DOM attributes per library (Base UI emits `data-open`, Ark UI emits `data-state="open"`, etc.). Previously the design preset swapped an entire per-library conditions set based on a `preset({ library })` option, which forced the preset to know the library and blocked mixing adapters.

Decision: define a single canonical **discrete boolean** state-attribute vocabulary (`data-open`, `data-checked`, `data-disabled`, `data-selected`, `data-invalid`, `data-readonly`, `data-highlighted`, …) and express every Panda condition as a **union** that matches all supported libraries' native attributes (e.g. `open: '&:is([data-open], [data-state="open"])'`), following the pattern the existing `disabled`/`hover`/`focus` conditions already use. This yields one library-agnostic conditions set with **zero runtime cost and no per-component wiring**, and it lets us delete the per-library "adapter preset" condition files. Runtime attribute normalization inside an adapter component is reserved only for the few states where a union selector is genuinely ambiguous (e.g. Ark's enumerated `data-state="active"` colliding with a discrete `data-active`).

The discrete-boolean vocabulary was chosen over enumerated `data-state` (Radix/Ark style) because Base UI is the v0 adapter and already emits discrete attributes, making the v0 adapter a near-noop and turning the existing base-ui conditions into the canonical set.

This is orthogonal to ADR-0001 (composition model): adapters still use their upstream library's native composition; this ADR only governs the state-styling contract.

## Consequences

- The `library` option on the preset factory is removed; `createBendPreset()` composes structural + design presets with one conditions set.
- Adding a new adapter means extending the union selectors (and adding runtime normalization only where a union is ambiguous), not shipping a new conditions set.
- Reversing this (e.g. switching to enumerated `data-state`) would touch every recipe condition and every adapter, so it is deliberately hard to undo.
