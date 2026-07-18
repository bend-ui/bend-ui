'use client';

import { createAppShell, createNativeScrollArea } from '@bend-ui/internal';

export const AppShell = createAppShell({
  ScrollArea: createNativeScrollArea(),
});
