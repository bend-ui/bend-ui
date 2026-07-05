import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import AppShell from './AppShell';

const meta = {
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

/** App-wide notification banner above the header, with main content below. */
export const WithBanner: Story = {
  render: () => (
    <AppShell>
      <AppShell.Banner>Banner</AppShell.Banner>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <AppShell.ScrollArea>Main content</AppShell.ScrollArea>
      </AppShell.Main>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Banner')).toBeVisible();
    await expect(canvas.getByText('Header')).toBeVisible();
    await expect(canvas.getByText('Main content')).toBeVisible();
    await expect(canvas.getByText('Footer')).toBeVisible();
  },
};

/** Vertical stack: header, main, and footer as direct children of the shell. */
export const Basic: Story = {
  render: () => (
    <AppShell>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <AppShell.ScrollArea>Main content</AppShell.ScrollArea>
      </AppShell.Main>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Header')).toBeVisible();
    await expect(canvas.getByText('Main content')).toBeVisible();
  },
};

/** Full-height chrome with a body row: header and footer span the width; sidebar and main sit side by side between them. */
export const WithSidebar: Story = {
  render: () => (
    <AppShell>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Body>
        <AppShell.Sidebar>Sidebar</AppShell.Sidebar>
        <AppShell.Main>Main content</AppShell.Main>
      </AppShell.Body>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Header')).toBeVisible();
    await expect(canvas.getByText('Sidebar')).toBeVisible();
    await expect(canvas.getByText('Main content')).toBeVisible();
    await expect(canvas.getByText('Footer')).toBeVisible();
  },
};

/** Sidebar spans the full height; header, scrollable content, and footer live inside the main column. */
export const WithSidebarFullHeight: Story = {
  render: () => (
    <AppShell>
      <AppShell.Body>
        <AppShell.Sidebar>Sidebar</AppShell.Sidebar>
        <AppShell.Main>
          <AppShell.Header>Header</AppShell.Header>
          <AppShell.ScrollArea>Main content</AppShell.ScrollArea>
          <AppShell.Footer>Footer</AppShell.Footer>
        </AppShell.Main>
      </AppShell.Body>
    </AppShell>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Header')).toBeVisible();
    await expect(canvas.getByText('Sidebar')).toBeVisible();
    await expect(canvas.getByText('Main content')).toBeVisible();
    await expect(canvas.getByText('Footer')).toBeVisible();
  },
};

export const WithTwoSidebars: Story = {
  render: () => (
    <AppShell>
      <AppShell.Body>
        <AppShell.Sidebar>Sidebar 1</AppShell.Sidebar>
        <AppShell.Sidebar>Sidebar 2</AppShell.Sidebar>
        <AppShell.Main>
          <AppShell.Header>Header</AppShell.Header>
          <AppShell.ScrollArea>Main content</AppShell.ScrollArea>
          <AppShell.Footer>Footer</AppShell.Footer>
        </AppShell.Main>
      </AppShell.Body>
    </AppShell>
  ),
};

/** Main content only — no header, sidebar, or footer regions. */
export const Minimal: Story = {
  render: () => (
    <AppShell>
      <AppShell.Main>
        <AppShell.ScrollArea>Main content</AppShell.ScrollArea>
      </AppShell.Main>
    </AppShell>
  ),
};
