import { createContext, useContext } from 'react';
import { NavProps } from './Nav';

export type NavContextProps = NavProps;

export const NavContext = createContext<NavContextProps>({});

export const useNavContext = () => useContext(NavContext);
