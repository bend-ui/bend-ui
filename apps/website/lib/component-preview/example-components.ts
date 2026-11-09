import type { ComponentType } from 'react';
import type { ExampleId } from './registry';
import ButtonExample from './examples/button';
import SelectExample from './examples/select';
import AvatarExample from './examples/avatar';

export const exampleComponents: Record<ExampleId, ComponentType> = {
  button: ButtonExample,
  select: SelectExample,
  avatar: AvatarExample,
};
