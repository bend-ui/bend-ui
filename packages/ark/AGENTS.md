# `@bend-ui/ark`

Bend UI package adapter over **Ark UI** (`@ark-ui/react`).

> **Pending rename (issue #110):** this package is scheduled to become `@bend-ui/ark-ui`
> (`packages/ark-ui`). Update the name references here once the rename lands.

- **Upstream library**: Ark UI — https://ark-ui.com/docs/components/overview
- **Pinned version**: see `@ark-ui/react` in `package.json` (source of truth).

## Where to look

- **How to build components here** (structure, `createStyleContext` / `withRecipe` pattern,
  adding a component, missing-component checks): the `component-libraries` skill.
- **What's implemented and how complete it is** (product intent, progress, quality
  coverage, verified-against-upstream marker): `docs/component-catalog.md`.

This adapter is sequenced after the Base UI v0 slice — keep it building, but do not invest
until Ark UI adapter work resumes. This file is intentionally thin.
