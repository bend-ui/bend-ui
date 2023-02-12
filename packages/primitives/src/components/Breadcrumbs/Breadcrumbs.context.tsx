import { ReactNode } from 'react';
import { createContext } from '../../utils';

type ContextType = {
  separator: ReactNode;
};

export const [BreadcrumbsContextProvider, useBreadcrumbsContext] =
  createContext<ContextType>('Breadcrumbs');
