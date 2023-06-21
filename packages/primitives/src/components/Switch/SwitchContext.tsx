import { createContext } from '../../utils';
import type { UseSwitchProps, UseSwitchReturn } from './useSwitch';
import type { ReactNode } from 'react';

export type SwitchContextProps = UseSwitchReturn;

export const [SwitchProvider, useSwitchContext] =
  createContext<SwitchContextProps>('Switch', null);

export type SwitchProviderProps = UseSwitchProps & {
  children?: ReactNode;
};
