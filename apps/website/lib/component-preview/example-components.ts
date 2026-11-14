import ButtonExample from './examples/button';
import SelectExample from './examples/select';
import AvatarExample from './examples/avatar';
import type { ExampleId } from './registry';

export const exampleComponents = {
  button: ButtonExample,
  select: SelectExample,
  avatar: AvatarExample,
} satisfies Record<ExampleId, unknown>;
