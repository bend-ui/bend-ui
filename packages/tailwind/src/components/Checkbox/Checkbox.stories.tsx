import { Media } from '../Media';
import { Stack } from '../Stack';
import { Checkbox, CheckboxGroup } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default { component: Checkbox } as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {
  args: {
    label: 'The checkbox label',
  },
};

export const Composable: Story = {
  render: () => (
    <Checkbox.Root>
      <Checkbox.Label className="border-surface bg-surface-subtle data-[state=checked]:border-surface-accent data-[state=checked]:bg-surface rounded border p-4">
        <Media>
          <Media.Image className="pt-1">
            <Checkbox.Control />
          </Media.Image>
          <Media.Body>
            <Stack>
              <span className="font-bold">Checkbox label</span>
              <span className="text-zinc-400">
                A description of the checkbox
              </span>
            </Stack>
          </Media.Body>
        </Media>
      </Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const Group = {
  render: () => (
    <CheckboxGroup>
      <Checkbox label="Quarks" value="quarks" />
      <Checkbox label="Atoms" value="atoms" />
      <Checkbox label="Molecules" value="molecules" />
    </CheckboxGroup>
  ),
};
