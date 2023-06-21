import { Media } from '../Media';
import { Stack } from '../Stack';
import { Radio, RadioGroup } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default { component: Radio } as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Base: Story = {
  args: {
    label: 'The radio label',
  },
};

export const Composable: Story = {
  render: () => (
    <Radio.Root>
      <Radio.Label className="border-surface bg-surface-subtle data-[state=checked]:border-surface-accent data-[state=checked]:bg-surface rounded border p-4">
        <Media>
          <Media.Image className="pt-1">
            <Radio.Control />
          </Media.Image>
          <Media.Body>
            <Stack>
              <span className="font-bold">Radio label</span>
              <span className="text-zinc-400">
                A description of the checkbox
              </span>
            </Stack>
          </Media.Body>
        </Media>
      </Radio.Label>
    </Radio.Root>
  ),
};

export const Group = {
  render: () => (
    <RadioGroup>
      <Radio label="Quarks" value="quarks" />
      <Radio label="Atoms" value="atoms" />
      <Radio label="Molecules" value="molecules" />
    </RadioGroup>
  ),
};
