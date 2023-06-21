import clsx from 'clsx';
import { breadcrumbsClasses, breadcrumbsStyles } from './Breadcrumbs.styles';
import { Breadcrumbs } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

type Story = StoryFn<typeof Breadcrumbs>;

export const Base: Story = {
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link>Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link>Account</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};

export const WithStyles: Story = {
  render: (args) => (
    <Breadcrumbs.Root {...args} style={breadcrumbsStyles.root}>
      <Breadcrumbs.List style={breadcrumbsStyles.list}>
        <Breadcrumbs.Item style={breadcrumbsStyles.item}>
          <Breadcrumbs.Link style={breadcrumbsStyles.link}>
            Home
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item style={breadcrumbsStyles.item}>
          <Breadcrumbs.Link style={breadcrumbsStyles.link}>
            Account
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item style={breadcrumbsStyles.item}>
          <Breadcrumbs.Link style={breadcrumbsStyles.link}>
            Profile
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};

export const WithTailwind: Story = {
  render: (args) => (
    <Breadcrumbs.Root className={clsx(breadcrumbsClasses.root)} {...args}>
      <Breadcrumbs.List className={clsx(breadcrumbsClasses.list)}>
        <Breadcrumbs.Item className={clsx(breadcrumbsClasses.item)}>
          <Breadcrumbs.Link className={clsx(breadcrumbsClasses.link)}>
            Home
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item className={clsx(breadcrumbsClasses.item)}>
          <Breadcrumbs.Link className={clsx(breadcrumbsClasses.link)}>
            Account
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item className={clsx(breadcrumbsClasses.item)}>
          <Breadcrumbs.Link className={clsx(breadcrumbsClasses.link)}>
            Profile
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};
