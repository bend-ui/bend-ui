import {
  AllSystemProps,
  background,
  border,
  color,
  createSystem,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  transition,
  typography,
} from 'system-props';
import styled from 'styled-components';
import { SystemProps } from '../../system';
import { Component } from '../Component';

const system = createSystem();

export type BoxProps = AllSystemProps & SystemProps;

export const Box = styled(Component)(
  system({
    ...color,
    ...space,
    ...layout,
    ...typography,
    ...flexbox,
    ...grid,
    ...background,
    ...border,
    ...position,
    ...shadow,
    ...transition,
  })
);
