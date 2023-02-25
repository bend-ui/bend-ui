export function createComponent<
  Component,
  CompoundComponents extends Record<string, React.ComponentType>
>(
  component: Component,
  compoundComponents?: CompoundComponents,
  displayName?: string
) {
  const namedComponents = {};
  if (compoundComponents) {
    for (const [componentName, component] of Object.entries(
      compoundComponents
    )) {
      if (displayName) {
        component.displayName = `${displayName}.${componentName}`;
      } else {
        component.displayName = `${displayName}.${componentName}`;
      }
      namedComponents[componentName] = component;
    }
  }

  return Object.assign(component, {
    ...(namedComponents as CompoundComponents),
    displayName,
  });
}
