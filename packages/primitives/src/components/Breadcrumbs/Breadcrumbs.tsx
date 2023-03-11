import { getValidChildren } from '@particles/react-utils';
import { createComponent, forwardRef } from '../../utils';
import {
  BreadcrumbsContextProvider,
  useBreadcrumbsContext,
} from './Breadcrumbs.context';
import type { ReactNode } from 'react';

export type BreadcrumbsRootProps = {
  children?: ReactNode;
  separator?: ReactNode;
};

const Root = forwardRef<BreadcrumbsRootProps, 'nav'>((props, ref) => {
  const { children, as: Component = 'nav', separator = '/', ...rest } = props;
  const context = { separator };
  return (
    <Component ref={ref} {...rest}>
      <BreadcrumbsContextProvider value={context}>
        {children}
      </BreadcrumbsContextProvider>
    </Component>
  );
});

export type BreadcrumbsListProps = {
  children?: ReactNode;
};

const List = forwardRef<BreadcrumbsListProps, 'ol'>((props, ref) => {
  const { children, as: Component = 'ol', ...rest } = props;
  const clones = getValidChildren(children);
  return (
    <Component ref={ref} {...rest}>
      {clones}
    </Component>
  );
});

export type BreadcrumbsItemProps = {
  children?: ReactNode;
};

const Item = forwardRef<BreadcrumbsItemProps, 'li'>((props, ref) => {
  const { children, as: Component = 'li', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export type BreadcrumbsLinkProps = {
  children?: ReactNode;
};

const Link = forwardRef<BreadcrumbsLinkProps, 'a'>((props, ref) => {
  const { children, as: Component = 'a', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
      <Separator />
    </Component>
  );
});

export type BreadcrumbsSeparatorProps = {
  children?: never;
};

const Separator = forwardRef<BreadcrumbsSeparatorProps, 'span'>(
  (props, ref) => {
    const { as: Component = 'span', ...rest } = props;
    const ctx = useBreadcrumbsContext();
    return (
      <Component ref={ref} role="presentation" {...rest}>
        {ctx.separator}
      </Component>
    );
  }
);

export default createComponent(
  Root,
  { Root, List, Item, Link, Separator },
  'Breadcrumbs'
);
