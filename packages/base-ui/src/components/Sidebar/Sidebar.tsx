import { sidebar } from '@particles/styled-system/recipes';

const Component = () => {
  const classes = sidebar();
  return <div className={classes}>Sidebar</div>;
};

Component.displayName = 'Sidebar';

export const Sidebar = Object.assign(Component, {});
