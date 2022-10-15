import { CSSObject, Global } from '@emotion/react';

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

const toCSSVars = (props): CSSObject => {
  const { theme } = props;

  const vars = {};

  Object.keys(theme).forEach((key) => assignVariables(vars, key, theme[key]));

  return vars;
};

export const CSSVars = (props) => (
  <Global
    styles={{
      ':root': toCSSVars(props),
    }}
  />
);
