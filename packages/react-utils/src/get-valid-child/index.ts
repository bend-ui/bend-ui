import { Children, ReactElement, ReactNode } from 'react';

export const getValidChild = (children: ReactNode) => {
  return Children.only(children) as ReactElement;
};
