import { Pagination as ArkPagination } from '@ark-ui/react';
import { withParts, withRecipe } from '../../utils';
import { pagination } from '@particles/styled-system/recipes';

export type PaginationRootProps = ArkPagination.RootProps;

const PaginationRoot = withRecipe<PaginationRootProps>(
  ArkPagination.Root,
  pagination,
  'root',
);

export type PaginationPrevTriggerProps = ArkPagination.PrevTriggerProps;

const PaginationPrevTrigger = withParts<PaginationPrevTriggerProps>(
  ArkPagination.PrevTrigger,
  'prev-trigger',
);

const PaginationContext = ArkPagination.Context;

export type PaginationNextTriggerProps = ArkPagination.NextTriggerProps;

const PaginationNextTrigger = withParts<PaginationNextTriggerProps>(
  ArkPagination.NextTrigger,
  'next-trigger',
);

export type PaginationItemProps = ArkPagination.ItemProps;

const PaginationItem = withParts<PaginationItemProps>(
  ArkPagination.Item,
  'item',
);

export type PaginationEllipsisProps = ArkPagination.EllipsisProps;

const PaginationEllipsis = withParts<PaginationEllipsisProps>(
  ArkPagination.Ellipsis,
  'ellipsis',
);

const Component = () => (
  <PaginationRoot count={5000} pageSize={10} siblingCount={2}>
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

export default Object.assign(Component, {
  Root: PaginationRoot,
  PrevTrigger: PaginationPrevTrigger,
  Context: PaginationContext,
  NextTrigger: PaginationNextTrigger,
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
});
