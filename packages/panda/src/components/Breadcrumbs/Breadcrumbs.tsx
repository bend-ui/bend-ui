import { Children, forwardRef, Fragment } from 'react';
import { breadcrumbs } from '@particles/styled-system/recipes';
import { cx } from '@particles/styled-system/css';
import type {
  BreadcrumbsItemProps,
  BreadcrumbsProps,
  BreadcrumbsSeparatorProps,
} from './types';

const Separator = forwardRef<HTMLDivElement, BreadcrumbsSeparatorProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const classes = breadcrumbs();
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cx(classes.separator, className)}
        {...rest}
      />
    );
  },
);

Separator.displayName = 'Breadcrumbs.Separator';

const Item = forwardRef<HTMLDivElement, BreadcrumbsItemProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = breadcrumbs();
  return (
    <div ref={ref} className={cx(classes.item, className)} {...rest}>
      {children}
    </div>
  );
});

Item.displayName = 'Breadcrumbs.Item';

const Root = forwardRef<HTMLElement, BreadcrumbsProps>((props, ref) => {
  const { children, className, separator = '/', ...rest } = props;
  const classes = breadcrumbs();

  return (
    <nav ref={ref} className={cx(classes.root, className)} {...rest}>
      {Children.map(children, (child, index) => (
        <Fragment key={`breadcrumb-separator-${index}`}>
          {child}
          {index < Children.count(children) - 1 && (
            <Separator>{separator}</Separator>
          )}
        </Fragment>
      ))}
    </nav>
  );
});

Root.displayName = 'Breadcrumbs';

export const Breadcrumbs = Object.assign(Root, {
  Root,
  Item,
});
