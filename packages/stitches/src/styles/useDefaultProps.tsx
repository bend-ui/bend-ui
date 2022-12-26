import { useTheme } from './ThemeProvider';

const filterProps = <T extends Record<string, any>>(props: T) => {
  Object.keys(props).forEach((prop) => {
    if (props[prop] === undefined) delete props[prop];
  });

  return props;
};

export const useDefaultProps = <T extends Record<string, any>>(
  component: string,
  props: T
) => {
  const theme = useTheme();
  const themeProps = theme?.components?.[component]?.defaultProps || {};

  return { ...themeProps, ...filterProps(props) };
};
