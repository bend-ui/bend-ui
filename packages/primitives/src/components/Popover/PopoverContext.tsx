import { createContext } from '../../utils';
import { UsePopoverReturn } from './usePopover';

export const [PopoverProvider, usePopoverContext] =
  createContext<UsePopoverReturn>('PopoverContext');
