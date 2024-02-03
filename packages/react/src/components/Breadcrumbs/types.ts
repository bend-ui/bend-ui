import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type BreadcrumbsSeparatorProps = ComponentPropsWithoutRef<'div'>;

export interface BreadcrumbsItemProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export interface BreadcrumbsProps extends ComponentPropsWithoutRef<'nav'> {
  children: ReactNode;
  /** Custom separator to render */
  separator?: ReactNode;
}
