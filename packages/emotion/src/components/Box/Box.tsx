import styled from '@emotion/styled';
import { createSystem, css, space } from 'system-props';
import { forwardRef } from '@particles/primitives';
import type { CSSObject } from '@emotion/react';
import type { DefaultComponentProps } from '../../types';

export interface BoxProps extends DefaultComponentProps {
  children?: React.ReactNode;
}

const config = {
  ...space,
};

const system = createSystem(config);

const StyledBox = styled('div')<BoxProps>(
  { boxSizing: 'border-box' },
  system(config),
  ({ sx, ...props }) => css(sx)(props) as CSSObject
);

const Box = forwardRef<BoxProps, 'div'>((props, ref) => (
  <StyledBox ref={ref} {...props} />
));

export default Box;
