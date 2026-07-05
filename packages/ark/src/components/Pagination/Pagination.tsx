import { Pagination as ArkPagination } from '@ark-ui/react';
import { withParts, withRecipe } from '@bend-ui/react/factory';
import { pagination } from '@bend-ui/styled-system/recipes';
import { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';

export type PaginationRootProps = Assign<
  HTMLStyledProps<'div'>,
  ArkPagination.RootProps
>;

const PaginationRoot = withRecipe<PaginationRootProps>(
  ArkPagination.Root,
  pagination,
  'root',
);

export type PaginationPrevTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.PrevTriggerProps
>;

const PaginationPrevTrigger = withParts<PaginationPrevTriggerProps>(
  ArkPagination.PrevTrigger,
  'prev-trigger',
);

const PaginationContext = ArkPagination.Context;

export type PaginationNextTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.NextTriggerProps
>;

const PaginationNextTrigger = withParts<PaginationNextTriggerProps>(
  ArkPagination.NextTrigger,
  'next-trigger',
);

export type PaginationItemProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.ItemProps
>;

const PaginationItem = withParts<PaginationItemProps>(
  ArkPagination.Item,
  'item',
);

export type PaginationEllipsisProps = Assign<
  HTMLStyledProps<'button'>,
  ArkPagination.EllipsisProps
>;

const PaginationEllipsis = withParts<PaginationEllipsisProps>(
  ArkPagination.Ellipsis,
  'ellipsis',
);

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
