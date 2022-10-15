import { createGlobalStyle, CSSObject, ThemeProps } from 'styled-components';
import { Theme } from '@particles/theme';

type CSSVarsProps = ThemeProps<Theme>;

const assignVariables = (
  variables: Record<any, any>,
  scale: string,
  tokens: Record<any, any>
) => {
  Object.keys(tokens).forEach((token) => {
    Object.assign(variables, {
      [`--${scale}-${token}`]: tokens[token],
    });
  });
};

const toCSSVars = (props: CSSVarsProps): CSSObject => {
  const { theme } = props;

  // const tokens = Object.keys(theme)
  //   .filter((key) => key !== 'components')
  //   .reduce(
  //     (acc, key) =>
  //       Object.assign(acc, {
  //         [key]: theme[key],
  //       }),
  //     {}
  //   );

  const vars = {};

  assignVariables(vars, 'space', theme.space);
  assignVariables(vars, 'radius', theme.radii);
  assignVariables(vars, 'color', theme.colors);
  assignVariables(vars, 'radius', theme.fontSizes);
  assignVariables(vars, 'fontWeight', theme.fontWeights);
  assignVariables(vars, 'font', theme.fonts);

  console.log(vars);

  return vars;
};

export const CSSVars = createGlobalStyle((props: ThemeProps<Theme>) => ({
  ':root': toCSSVars(props),
}));
