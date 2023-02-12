/* eslint-disable @typescript-eslint/ban-types */
export const createComponent = <
  Component,
  SubComponents extends object = {},
  Name extends string = string
>(
  component: Component,
  subComponents?: SubComponents,
  name?: Name
) => {
  const displayName = name ? `${name}.` : '';

  // TODO: Add utility to append displayName
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  // component.displayName = name ?? 'ComponentWithNoName';

  // Assign a displayName for each sub-components
  Object.keys(subComponents).forEach(
    (component) =>
      (subComponents[component].displayName = displayName + component)
  );

  return Object.assign(component, subComponents);
};
