---
name: component-libraries
description: "Working with the Particles component library packages. USE when adding, checking, or comparing components across packages/ark (@ark-ui/react wrapper), packages/base-ui (@base-ui/react wrapper), and packages/aria (react-aria-components wrapper). Trigger words: add component, missing component, check components, ark-ui, base-ui, react-aria, @particles/ark, @particles/base-ui, @particles/aria."
---

# Component Libraries

Particles wraps three upstream component libraries. Each package lives under `packages/` and re-exports a styled or pass-through version of its upstream components.

| Package | Upstream | npm name |
|---|---|---|
| `packages/ark` | `@ark-ui/react` | `@particles/ark` |
| `packages/base-ui` | `@base-ui/react` | `@particles/base-ui` |
| `packages/aria` | `react-aria-components` | `@particles/aria` |

---

## MCP Tools

Two MCP servers are available for discovery:

- **ark-ui MCP** (`mcp__ark-ui__*`) — list components, get props, get examples, check styling guide
- **panda MCP** (`mcp__panda__*`) — get recipes, tokens, semantic tokens, conditions from the design system

Always use MCP tools before browsing the upstream source.

### Useful ark-ui MCP commands

```
mcp__ark-ui__list_components({ framework: "react" })    // full component list
mcp__ark-ui__get_component_props({ component: "..." })   // props for a component
mcp__ark-ui__get_example({ component: "...", example: "..." })
mcp__ark-ui__styling_guide()
```

### Useful panda MCP commands

```
mcp__panda__get_recipes()          // all recipe names and their variants
mcp__panda__get_tokens()           // design tokens
mcp__panda__get_semantic_tokens()  // semantic token aliases
```

---

## packages/ark — Ark UI wrapper

### Structure

```
packages/ark/src/
  components/
    <ComponentName>/
      <ComponentName>.tsx    ← implementation
      <ComponentName>.stories.tsx
      index.ts               ← export * from './<ComponentName>'
    index.ts                 ← barrel (all components + @particles/react)
  index.ts                   ← export * from './components'
```

### Implementation pattern

Components use `withRecipe` / `withParts` from `@particles/react` and recipes from `@particles/styled-system/recipes`.

```tsx
import { <Component> as <Component>Primitive } from '@ark-ui/react';
import { withRecipe, withParts } from '@particles/react';
import { <recipe> } from '@particles/styled-system/recipes';

const Root = withRecipe(<Component>Primitive.Root, <recipe>, 'root');
const Item = withParts(<Component>Primitive.Item, 'item');

export const <Component> = Object.assign(Component, {
  Root,
  Item,
  // ...all sub-parts
});
```

For **non-visual / utility components** (no recipe needed), use a direct re-export:

```ts
// packages/ark/src/components/<Component>/index.ts
export { ComponentName, subPart1, subPart2 } from '@ark-ui/react';
```

### Registering a new component

1. Create `packages/ark/src/components/<ComponentName>/` with `index.ts` (and `.tsx` if styled)
2. Add `export * from './<ComponentName>';` to `packages/ark/src/components/index.ts` (alphabetical order)

### Checking for missing components

Use `mcp__ark-ui__list_components({ framework: "react" })` and compare with the folder names under `packages/ark/src/components/`.

Non-visual utilities (no DOM output): `client-only`, `collection`, `environment`, `focus-trap`, `format`, `locale`, `portal`, `presence` — re-export directly.

---

## packages/base-ui — Base UI wrapper

### Structure

```
packages/base-ui/src/
  components/
    <ComponentName>/
      <ComponentName>.tsx    ← implementation
      <ComponentName>.stories.tsx
      index.ts               ← export * from './<ComponentName>'
    index.ts                 ← barrel
  utils/
    index.ts                 ← withRecipe, withParts + base-ui utilities
  index.ts                   ← export * from './components'; export * from './utils'
```

### Implementation pattern

```tsx
import { <Component> } from '@base-ui/react';
import { particles, withParts, withRecipe } from '@particles/react';
import { <recipe> } from '@particles/styled-system/recipes';

const Root = withRecipe(<Component>.Root, <recipe>, 'root');
const Part = withParts(<Component>.Part, 'part');

export const MyComponent = Object.assign(Component, {
  Root,
  Part,
});
```

### Utilities (re-export from utils/index.ts)

`CSPProvider`, `DirectionProvider`, `useDirection`, `mergeProps`, `mergePropsN`, `useRender` — already registered in `packages/base-ui/src/utils/index.ts`.

### Registering a new component

1. Create `packages/base-ui/src/components/<ComponentName>/` with `.tsx` + `index.ts`
2. Add `export * from './<ComponentName>';` to `packages/base-ui/src/components/index.ts` (alphabetical order)

### Checking for missing components

Check https://base-ui.com/react/overview/quick-start (sidebar lists all ~36 components). Compare with folder names under `packages/base-ui/src/components/`.

---

## packages/aria — React Aria wrapper

### Structure

```
packages/aria/src/
  components/
    <ComponentName>/
      <ComponentName>.tsx    ← styled implementation
      <ComponentName>.ts     ← plain re-export (no recipe)
      <ComponentName>.stories.tsx
      <ComponentName>.spec.tsx
  index.ts                   ← direct exports: export * from './components/<Name>/<Name>'
```

Note: unlike ark/base-ui, the aria package exports directly from component files in `index.ts` — there is no intermediate `components/index.ts`.

### Styled implementation pattern

```tsx
import * as ReactAria from 'react-aria-components';
import { cx } from '@particles/styled-system/css';
import { <recipe> } from '@particles/styled-system/recipes';
import type { <Recipe>VariantProps } from '@particles/styled-system/recipes';

export interface <Component>Props extends ReactAria.<Component>Props, <Recipe>VariantProps {
  className?: string;
}

export const <Component> = ({ className, variant, ...props }: <Component>Props) => {
  const classes = <recipe>({ variant });
  return <ReactAria.<Component> className={cx(classes.root, className)} {...props} />;
};
```

### Plain re-export pattern (no recipe)

```ts
// packages/aria/src/components/<Component>/<Component>.ts
export { ComponentName, SubPart1, SubPart2 } from 'react-aria-components';
```

### Registering a new component

1. Create `packages/aria/src/components/<ComponentName>/` with `.tsx` or `.ts`
2. Add `export * from './components/<ComponentName>/<ComponentName>';` to `packages/aria/src/index.ts` (alphabetical order)

### Checking for missing components

Check https://react-aria.adobe.com/getting-started and compare with folder names under `packages/aria/src/components/`. The installed version is `react-aria-components` — inspect its exports with:

```bash
node -e "const m = require('react-aria-components'); console.log(Object.keys(m).sort().join('\n'))"
```

Special groupings in this package:
- `Primitives/` — `Section`, `Header`, `Heading`, `Text`, `Keyboard`, `VisuallyHidden`, `FieldError`, `Pressable`, `Focusable`
- `Providers/` — `I18nProvider`, `Provider`, `RouterProvider`, `SSRProvider`
- `Hooks/` — `useAsyncList`, `useDrag`, `useDragAndDrop`, `useDrop`, `useFilter`, `useListData`, `useLocale`, `useTreeData`
- `Toast/` — exports use `UNSTABLE_` prefix (preserved intentionally from upstream)

---

## Cross-library checklist

When comparing a package against its upstream docs:

1. List component folders: `ls packages/<pkg>/src/components/`
2. Fetch upstream component list (MCP for ark, docs for base-ui/aria)
3. Diff: identify missing visual components (need `.tsx` + recipe) vs. utility components (plain re-export `.ts`)
4. For re-exports, check if any shared sub-parts (e.g. `DateInput`, `ColorThumb`) would be duplicated across folders — export them from one canonical folder only
5. Add all new exports to the barrel index in alphabetical order
