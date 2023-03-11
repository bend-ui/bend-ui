import { createContext } from '../../utils';
import { useSwitch } from './useSwitch';
import type { UseSwitchProps, UseSwitchReturn } from './useSwitch';
import type { ReactNode } from 'react';

export type SwitchContextProps = UseSwitchReturn;

export const [SwitchContextProvider, useSwitchContext] =
  createContext<SwitchContextProps>('Switch', null);

export type SwitchProviderProps = UseSwitchProps & {
  children?: ReactNode;
};

export const SwitchProvider = (props: SwitchProviderProps) => {
  const { children, ...rest } = props;
  const context = useSwitch(rest);
  return (
    <SwitchContextProvider value={context}>{children}</SwitchContextProvider>
  );
};
