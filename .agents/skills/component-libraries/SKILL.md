---
name: "component-libraries"
description: "Working with the Bend UI package adapters. USE when adding, checking, or comparing components across packages/base-ui (@base-ui/react wrapper), packages/ark-ui (@ark-ui/react wrapper), and packages/react-aria (react-aria-components wrapper). Trigger words: add component, missing component, check components, base-ui, ark-ui, react-aria, @bend-ui/base-ui, @bend-ui/ark-ui, @bend-ui/react-aria, adapter."
---

# Component Libraries

Bend UI wraps three upstream primitive libraries. Each package adapter lives under
`packages/` and exposes a Bend-styled version of its upstream components.

| Package (folder) | Upstream | npm name |
|---|---|---|
| `packages/base-ui` | `@base-ui/react` | `@bend-ui/base-ui` |
| `packages/ark-ui` | `@ark-ui/react` | `@bend-ui/ark-ui` |
| `packages/react-aria` | `react-aria-components` | `@bend-ui/react-aria` |

`packages/ariakit` is parked and not a support target.

For each adapter's upstream identity and pinned version, see that package's `AGENTS.md`.
For per-component intent, progress, and quality coverage, see the **Component catalog
matrix** at `docs/component-catalog.md`.

---

## Discovery (no dedicated MCP)

There is **no `ark-ui` or `panda` MCP server** in this workspace. Discover components and
styling primitives from:

- **Upstream docs** for the version pinned in each adapter's `package.json`.
- **The installed package exports**, e.g.:

```bash
node -e "console.log(Object.keys(require('react-aria-components')).sort().join('\n'))"
node -e "console.log(Object.keys(require('@ark-ui/react')).sort().join('\n'))"
```

- **The generated styled-system** for recipes, tokens, and conditions:
  `packages/styled-system/recipes`, `.../tokens`, `.../css`, `.../jsx`.

---

## Implementation patterns

Styling helpers come from the generated styled-system and from `@bend-ui/core` — **not**
from the removed `@bend-ui/react` foundation.

### Pattern A — `createStyleContext` (preferred for multi-part / slot recipes)

From `@bend-ui/styled-system/jsx`. Shares one recipe's slots across a compound component
via a provider + context, so variant props set on the root flow to every part.

```tsx
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { button, type ButtonVariantProps } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(button);

const ButtonRoot = withProvider(ButtonPrimitive, 'root');
const ButtonLabel = withContext('span', 'label');
const ButtonIcon = withContext('span', 'icon');

export const Button = Object.assign(Component, {
  Root: ButtonRoot,
  Label: ButtonLabel,
  Icon: ButtonIcon,
});
```

### Pattern B — `withRecipe` / `withParts` (single-recipe root + attribute-only parts)

From `@bend-ui/core`. Use `withRecipe` for the styled root that owns the recipe, and
`withParts` for parts that only need a `data-part` (styled by the slot recipe).

```tsx
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { withParts, withRecipe } from '@bend-ui/core';
import { menu } from '@bend-ui/styled-system/recipes';

const MenuPopup = withRecipe<MenuPrimitive.Popup.Props>(MenuPrimitive.Popup, menu, 'root');
const MenuItem = withParts(MenuPrimitive.Item, 'item');
const MenuSeparator = withParts(MenuPrimitive.Separator, 'separator');
```

### Pattern C — plain re-export (non-visual / utility, no recipe)

For providers, hooks, and behavior-only primitives, re-export upstream directly:

```ts
export { ComponentName, SubPart1, SubPart2 } from '@ark-ui/react';
```

### React Aria specifics

The aria adapter styles with `cx` + the recipe rather than `createStyleContext`:

```tsx
import * as ReactAria from 'react-aria-components';
import { cx } from '@bend-ui/styled-system/css';
import { button, type ButtonVariantProps } from '@bend-ui/styled-system/recipes';

export interface ButtonProps extends ReactAria.ButtonProps, ButtonVariantProps {
  className?: string;
}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  const classes = button({ variant, size });
  return <ReactAria.Button className={cx(classes.root, className)} {...props} />;
};
```

---

## Package layouts

### `packages/base-ui` and `packages/ark-ui`

```
packages/<pkg>/src/
  components/
    <ComponentName>/
      <ComponentName>.tsx        ← implementation
      <ComponentName>.stories.tsx
      <ComponentName>.test.tsx   ← optional
      index.ts                   ← export * from './<ComponentName>'
    index.ts                     ← barrel: export * from each component
  index.ts                       ← export * from './components' (+ utils for base-ui)
```

`packages/base-ui/src/utils/index.ts` re-exports `withRecipe`, `withParts`,
`createRecipeContext` from `@bend-ui/core` and the Base UI providers
(`CSPProvider`, `DirectionProvider`, `useDirection`, `mergeProps`, `mergePropsN`,
`useRender`) from `@base-ui/react`.

**Register a new component:** create the folder, then add
`export * from './<ComponentName>';` to `components/index.ts` in alphabetical order.

### `packages/react-aria`

```
packages/react-aria/src/
  components/
    <ComponentName>/
      <ComponentName>.tsx    ← styled implementation (cx + recipe)
      <ComponentName>.ts     ← plain re-export (no recipe)
      <ComponentName>.stories.tsx
      <ComponentName>.spec.tsx
  index.ts                   ← direct exports: export * from './components/<Name>/<Name>'
```

Unlike base-ui/ark-ui, react-aria exports directly from component files in `index.ts` —
there is no intermediate `components/index.ts`.

**Register a new component:** create the folder, then add
`export * from './components/<ComponentName>/<ComponentName>';` to
`packages/react-aria/src/index.ts` in alphabetical order.

Special groupings in the react-aria package:
- `Primitives/` — `Section`, `Header`, `Heading`, `Text`, `Keyboard`, `VisuallyHidden`, `FieldError`, `Pressable`, `Focusable`
- `Providers/` — `I18nProvider`, `Provider`, `RouterProvider`, `SSRProvider`
- `Hooks/` — `useAsyncList`, `useDrag`, `useDragAndDrop`, `useDrop`, `useFilter`, `useListData`, `useLocale`, `useTreeData`
- `Toast/` — exports keep the upstream `UNSTABLE_` prefix intentionally

---

## Checking for missing components

1. List component folders: `ls packages/<pkg>/src/components/`
2. Get the upstream component list from docs for the pinned version, or from installed
   exports (see Discovery above):
   - Base UI: https://base-ui.com/react/overview/quick-start
   - Ark UI: https://ark-ui.com/docs/components/overview
   - React Aria: https://react-spectrum.adobe.com/react-aria/components.html
3. Diff: separate missing **visual** components (need `.tsx` + recipe) from **utility**
   components (plain re-export `.ts`).
4. For re-exports, avoid duplicating shared sub-parts (e.g. `DateInput`, `ColorThumb`)
   across folders — export them from one canonical folder only.
5. Add every new export to the barrel in alphabetical order.
6. Record the result in `docs/component-catalog.md` (progress + quality coverage), and
   update that adapter's **verified against upstream vX** marker when you bump the upstream
   version. API drift is caught by the TypeScript build because adapters extend upstream
   prop types.
