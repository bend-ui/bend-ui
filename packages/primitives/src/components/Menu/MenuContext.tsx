import { createContext } from '../../utils';
import type { UseMenuReturn } from './useMenu';

type MenuContextProps = UseMenuReturn;

export const [MenuProvider, useMenuContext] =
  createContext<MenuContextProps>('Menu');
