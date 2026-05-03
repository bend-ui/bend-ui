import { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Overlays/Popover',
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'Open Popover',
    title: 'Popover Title',
    description: 'This is the popover description.',
  },
};

export const WithCustomContent: Story = {
  args: {
    trigger: 'Open Popover',
    children: (
      <Popover.Content>
        <h3>Custom Content</h3>
        <p>This popover has custom content instead of title and description.</p>
      </Popover.Content>
    ),
  },
};

export const WithCustomTrigger: Story = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger
        render={(props) => <button {...props}>Custom Trigger</button>}
      />
      <Popover.Content
        title="Custom Trigger"
        description="This popover is triggered by a custom button."
      />
    </Popover>
  ),
};
