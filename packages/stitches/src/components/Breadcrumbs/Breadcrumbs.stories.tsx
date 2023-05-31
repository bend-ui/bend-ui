import Breadcrumbs from './Breadcrumbs';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

export const Default: StoryObj<typeof Breadcrumbs> = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};
