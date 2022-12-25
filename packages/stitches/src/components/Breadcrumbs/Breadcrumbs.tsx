import { Children, cloneElement } from 'react';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';

export type BreadcrumbsProps = {
  separator?: React.ReactElement;
} & DefaultComponentProps;

const Breadcrumbs = forwardRef<BreadcrumbsProps, 'div'>((props, ref) => {
  const { children, separator = '+', ...rest } = props;

  const items = Children.toArray(children).reduce(
    (acc: any[], child, index, array) => {
      acc.push(
        cloneElement(child, {
          key: `breadcrumb-item-${index}`,
        })
      );
      if (index !== array.length - 1) {
        acc.push(separator);
      }
      return acc;
    },
    []
  );

  return (
    <Box ref={ref} {...rest}>
      {items}
    </Box>
  );
});

export type BreadcrumbsItemProps = DefaultComponentProps;

const Item = forwardRef<BreadcrumbsItemProps, 'a'>((props, ref) => {
  const { children, as = 'a', ...rest } = props;

  return (
    <Box ref={ref} as={as} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Breadcrumbs, { Item });
