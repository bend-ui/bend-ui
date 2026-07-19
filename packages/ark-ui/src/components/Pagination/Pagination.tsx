import { Pagination as ArkPagination } from '@ark-ui/react';
import { pagination } from '@bend-ui/styled-system/recipes';
import { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(pagination);

export type PaginationRootProps = Assign<
  HTMLStyledProps<'div'>,
  ArkPagination.RootProps
>;

const PaginationRoot = withProvider(
  ArkPagination.Root,
  'root',
) as React.ComponentType<PaginationRootProps>;

export type PaginationPrevTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.PrevTriggerProps
>;

const PaginationPrevTrigger = withContext(
  ArkPagination.PrevTrigger,
  'prevTrigger',
);

const PaginationContext = ArkPagination.Context;

export type PaginationNextTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.NextTriggerProps
>;

const PaginationNextTrigger = withContext(
  ArkPagination.NextTrigger,
  'nextTrigger',
);

export type PaginationItemProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.ItemProps
>;

const PaginationItem = withContext(ArkPagination.Item, 'item');

export type PaginationEllipsisProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.EllipsisProps
>;

const PaginationEllipsis = withContext(ArkPagination.Ellipsis, 'ellipsis');

export type PaginationProps = PaginationRootProps;

const Component = (props: PaginationProps) => (
  <PaginationRoot {...props}>
    <PaginationPrevTrigger>Previous Page</PaginationPrevTrigger>
    <PaginationContext>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === 'page' ? (
            <PaginationItem key={index} {...page}>
              {page.value}
            </PaginationItem>
          ) : (
            <PaginationEllipsis key={index} index={index}>
              &#8230;
            </PaginationEllipsis>
          ),
        )
      }
    </PaginationContext>
    <PaginationNextTrigger>Next Page</PaginationNextTrigger>
  </PaginationRoot>
);

export const Pagination = Object.assign(Component, {
  Root: PaginationRoot,
  PrevTrigger: PaginationPrevTrigger,
  Context: PaginationContext,
  NextTrigger: PaginationNextTrigger,
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
});
