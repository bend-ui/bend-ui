import { fireEvent, render, screen } from '@testing-library/react';

import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('emits native active and semantic selected states as selection changes', () => {
    render(
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="overview">Overview panel</Tabs.Panel>
        <Tabs.Panel value="settings">Settings panel</Tabs.Panel>
      </Tabs.Root>,
    );

    const overview = screen.getByRole('tab', { name: 'Overview' });
    const settings = screen.getByRole('tab', { name: 'Settings' });

    expect(overview.getAttribute('data-active')).toBe('');
    expect(overview.getAttribute('aria-selected')).toBe('true');
    expect(settings.getAttribute('data-active')).toBeNull();
    expect(settings.getAttribute('aria-selected')).toBe('false');

    fireEvent.click(settings);

    expect(overview.getAttribute('data-active')).toBeNull();
    expect(overview.getAttribute('aria-selected')).toBe('false');
    expect(settings.getAttribute('data-active')).toBe('');
    expect(settings.getAttribute('aria-selected')).toBe('true');
  });
});
