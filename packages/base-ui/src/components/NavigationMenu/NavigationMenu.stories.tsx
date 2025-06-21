import { NavigationMenu } from './NavigationMenu';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof NavigationMenu> = {
  title: 'NavigationMenu',
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
