import {
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
import { Component } from '../Component';
import type { SystemProps } from '../../system';
import type { AllSystemProps } from 'system-props';

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
