import { createContext } from '../../utils';
import { useDropdown } from './useDropdown';

export type DropdownContextParams = ReturnType<typeof useDropdown>;

export const [DropdownContextProvider, useDropdownContext] =
  createContext<DropdownContextParams>('Dropdown');
