/* eslint-disable @typescript-eslint/ban-types */
export const createComponent = <Component, SubComponents extends object = {}>(
  component: Component,
  subComponents?: SubComponents
) => {
  return Object.assign(component, subComponents);
};
