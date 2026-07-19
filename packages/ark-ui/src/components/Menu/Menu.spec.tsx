import { render, screen } from '@testing-library/react';

import { Menu } from './Menu';

describe('Menu', () => {
  it('applies the visual root slot to the rendered positioner', async () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger asChild>
          <button type="button">Open</button>
        </Menu.Trigger>
        <Menu.Positioner data-testid="positioner">
          <Menu.Content>
            <Menu.Item value="item">Item</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>,
    );

    expect(
      (await screen.findByTestId('positioner')).className.split(' '),
    ).toContain('Menu__root');
  });
});
