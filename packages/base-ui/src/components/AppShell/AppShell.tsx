'use client';

import type { ComponentType } from 'react';
import {
  createAppShell,
  createScrollAreaPart,
  type AppShellScrollAreaProps,
} from '@bend-ui/internal';
import { ScrollArea, type ScrollAreaProps } from '../ScrollArea';

export const AppShell = createAppShell({
  ScrollArea: createScrollAreaPart<ScrollAreaProps>(
    ScrollArea,
  ) as ComponentType<AppShellScrollAreaProps>,
});
