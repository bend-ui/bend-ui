import { Meta, StoryObj } from '@storybook/react-vite';
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';
import { ToggleGroup } from './ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'ToggleGroup',
  component: ToggleGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: ['left'],
    children: (
      <>
        <ToggleGroup.Item aria-label="Align left" value="left">
          <AlignLeftIcon aria-hidden="true" size={16} />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Align center" value="center">
          <AlignCenterIcon aria-hidden="true" size={16} />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Align right" value="right">
          <AlignRightIcon aria-hidden="true" size={16} />
        </ToggleGroup.Item>
      </>
    ),
  },
};
