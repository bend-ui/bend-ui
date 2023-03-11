import { createContext } from '../../utils';
import type { ReactNode } from 'react';

type ContextType = {
  separator: ReactNode;
};

export const [BreadcrumbsContextProvider, useBreadcrumbsContext] =
  createContext<ContextType>('Breadcrumbs');
