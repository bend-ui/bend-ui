import { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Collapsible',
  component: Collapsible,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'Recovery keys',
    children: (
      <div>
        <div>alien-bean-pasta</div>
        <div>wild-irish-burrito</div>
        <div>horse-battery-staple</div>
      </div>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};
