import { AppShell } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof AppShell>;

export const Base: StoryObj<typeof AppShell> = {
  render: (args) => (
    <AppShell {...args}>
      <AppShell.NotificationBar>Notification Bar</AppShell.NotificationBar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Sidebar>Sidebar</AppShell.Sidebar>
      <AppShell.Main>Main</AppShell.Main>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  ),
};

export const Alt = {
  render: Base,

  args: {
    layout: 'alt',
  },
};

export const Simple: StoryObj<typeof AppShell> = {
  render: (args) => (
    <AppShell {...args}>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  ),
};
