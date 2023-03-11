import { Children } from 'react';
import { isFragment } from 'react-is';
import type { JSXElementConstructor, ReactElement, ReactNode } from 'react';

type Props = Record<string, any>;

type ReactChildArray = ReturnType<typeof Children.toArray>;

export const flattenChildren = (children: React.ReactNode): ReactChildArray =>
  Children.toArray(children).reduce<ReactChildArray>(
    (acc: ReactChildArray, child) => {
      if (isFragment(child)) {
        return acc.concat(flattenChildren(child.props.children));
      }

      acc.push(child);

      return acc;
    },
    []
  );

export const isComponentType = (
  element: React.ReactElement,
  type: JSXElementConstructor<any> | JSXElementConstructor<any>[]
): boolean => element.type === type;

export const filterChildrenByType = <T extends Props>(
  children: React.ReactNode,
  type: JSXElementConstructor<T> | JSXElementConstructor<T>[]
): React.ReactElement<T>[] =>
  (flattenChildren(children) as React.ReactElement[]).filter((item) =>
    Array.isArray(type)
      ? type.some((component) => component === item.type)
      : isComponentType(item, type)
  );

export const findChildrenByType = (
  children: ReactNode,
  type: JSXElementConstructor<any>
) =>
  (flattenChildren(children) as ReactElement[]).find(
    (item) => item.type === type
  );
