import { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Overview</Tabs.Panel>
      <Tabs.Panel value="projects">Projects</Tabs.Panel>
      <Tabs.Panel value="account">Account</Tabs.Panel>
    </Tabs>
  ),
  args: {
    defaultValue: 'overview',
  },
};

export const Composition: Story = {
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Overview</Tabs.Panel>
      <Tabs.Panel value="projects">Projects</Tabs.Panel>
      <Tabs.Panel value="account">Account</Tabs.Panel>
    </Tabs.Root>
  ),
  args: {
    defaultValue: 'overview',
  },
};
