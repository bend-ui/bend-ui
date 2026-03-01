import { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Overlays/Drawer',
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'Open Drawer',
    title: 'Drawer Title',
    description: 'This is a description for the drawer.',
    children: <p>This is the content of the drawer.</p>,
  },
};
