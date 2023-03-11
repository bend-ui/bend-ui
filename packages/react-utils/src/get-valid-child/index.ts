import { Children } from 'react';
import type { ReactElement, ReactNode } from 'react';

export const getValidChild = (children: ReactNode) =>
  Children.only(children) as ReactElement;
