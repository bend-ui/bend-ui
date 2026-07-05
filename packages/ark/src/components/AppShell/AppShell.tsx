'use client';

import {
  createAppShell,
  createScrollAreaPart,
} from '@bend-ui/internal';
import { ScrollArea } from '../ScrollArea';

export const AppShell = createAppShell({
  ScrollArea: createScrollAreaPart(ScrollArea),
});
