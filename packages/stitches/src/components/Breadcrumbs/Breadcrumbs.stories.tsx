import { ComponentMeta, ComponentStory } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Default: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>Home</Breadcrumbs.Item>
    <Breadcrumbs.Item>Library</Breadcrumbs.Item>
    <Breadcrumbs.Item>Data</Breadcrumbs.Item>
  </Breadcrumbs>
);
