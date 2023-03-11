import { createContext } from '../../utils';
import type { UsePopoverReturn } from './usePopover';

export const [PopoverProvider, usePopoverContext] =
  createContext<UsePopoverReturn>('PopoverContext');
