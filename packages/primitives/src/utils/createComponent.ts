import type { ComponentType } from 'react';

export type StaticComponents = Record<string, React.FC<any>>;

/** component, compount components */
export const createComponent = <
  T extends ComponentType<any>,
  CompoundComponents extends StaticComponents = Record<string, never>,
>(
  component: T,
  compoundComponents?: CompoundComponents,
): T & CompoundComponents => Object.assign(component, compoundComponents);
