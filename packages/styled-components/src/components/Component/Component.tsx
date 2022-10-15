import { css, shouldForwardProp } from 'system-props';
import styled, { CSSObject } from 'styled-components';
import { SystemProps } from '../../system';

export type ComponentProps = SystemProps;

export const Component = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidtorFn) =>
    shouldForwardProp(prop) && defaultValidtorFn(prop),
})<ComponentProps>(
  { boxSizing: 'border-box' },
  ({ styles, ...props }) => css(styles)(props) as CSSObject,
  ({ sx, ...props }) => css(sx)(props) as CSSObject
);
