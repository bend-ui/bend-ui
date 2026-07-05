# @bend-ui/internal

Workspace-only tooling for authoring package adapters. Not published.

## Purpose

Hosts shared component factories (e.g. `createAppShell`) that adapters wire to their upstream primitives. Consumers should import finished components from `@bend-ui/base-ui`, `@bend-ui/ark`, etc.

## Usage

```tsx
import { createAppShell, createScrollAreaPart } from '@bend-ui/internal';
import { ScrollArea } from '../ScrollArea';

export const AppShell = createAppShell({
  ScrollArea: createScrollAreaPart(ScrollArea),
});
```
