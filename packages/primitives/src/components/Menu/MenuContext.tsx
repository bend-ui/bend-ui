import { createContext } from '../../utils';
import { UseMenuReturn } from './useMenu';

type MenuContextProps = UseMenuReturn;

export const [MenuProvider, useMenuContext] =
  createContext<MenuContextProps>('Menu');
