import { createRef } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Menu, type MenuProps } from './Menu';
import { Popover } from './Popover';
import { Tooltip } from './Tooltip';
import { Tabs } from './Tabs';
import { SurfaceProvider } from './SurfaceContext/SurfaceContext';
import { NavigationMenu } from './NavigationMenu';
import { Card } from './Card';

describe('overlays and navigation', () => {
  it('preserves the controlled Menu root and its typed payload callback', () => {
    const onOpenChange: NonNullable<
      MenuProps<{ id: string }>['onOpenChange']
    > = (_open, details) => {
      expect(details.reason).toBeDefined();
    };
    render(
      <Menu.Root<{ id: string }> open={false} onOpenChange={onOpenChange}>
        {({ payload }) => <span>{payload?.id}</span>}
      </Menu.Root>,
    );
  });
  it('keeps Card context opt-in and preserves its ref and explicit appearance', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <SurfaceProvider
        level="page"
        surfaces={{ raised: { backgroundColor: 'rgb(10, 20, 30)' } }}
      >
        <Card data-testid="plain">Plain</Card>
        <Card
          contextual
          ref={ref}
          data-testid="card"
          style={{ backgroundColor: 'rgb(1, 2, 3)' }}
        >
          Contextual
        </Card>
      </SurfaceProvider>,
    );
    expect(screen.getByTestId('plain').hasAttribute('data-surface-level')).toBe(
      false,
    );
    const card = screen.getByTestId('card');
    expect(ref.current).toBe(card);
    expect(card.getAttribute('data-surface-level')).toBe('raised');
    expect(card.style.backgroundColor).toBe('rgb(1, 2, 3)');
  });
  it('preserves popover children alongside title and description and closes with Escape', async () => {
    render(
      <Popover
        trigger="Open details"
        title="Details"
        description="More information"
      >
        <button>Action</button>
      </Popover>,
    );
    const trigger = screen.getByRole('button', { name: 'Open details' });
    fireEvent.click(trigger);
    expect(await screen.findByRole('dialog', { name: 'Details' })).toBeTruthy();
    expect(screen.getByText('More information')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Action' })).toBeTruthy();
    fireEvent.keyDown(document.activeElement ?? document.body, {
      key: 'Escape',
    });
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it('replays contextual surfaces across Menu and Tooltip portals and preserves callbacks and refs', async () => {
    const menuRef = createRef<HTMLDivElement>();
    const tooltipRef = createRef<HTMLDivElement>();
    const menuTriggerRef = createRef<HTMLButtonElement>();
    const tooltipTriggerRef = createRef<HTMLButtonElement>();
    const surfaces = { overlay: { backgroundColor: 'rgb(11, 22, 33)' } };
    render(
      <SurfaceProvider
        level="raised"
        surfaces={surfaces}
        theme="proof"
        colorMode="dark"
      >
        <Menu.Root defaultOpen modal={false}>
          <Menu.Trigger<{ id: string }>
            ref={menuTriggerRef}
            payload={{ id: 'action' }}
          >
            Actions
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner>
              <Menu.Popup
                ref={menuRef}
                data-testid="menu"
                className={() => 'caller-menu'}
                style={() => ({ color: 'rgb(1, 2, 3)' })}
              >
                <Menu.Item>Rename</Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
        <Tooltip.Provider>
          <Tooltip.Root defaultOpen>
            <Tooltip.Trigger<{ id: string }>
              ref={tooltipTriggerRef}
              payload={{ id: 'help' }}
            >
              Help
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner>
                <Tooltip.Popup
                  ref={tooltipRef}
                  data-testid="tooltip"
                  className={() => 'caller-tooltip'}
                  style={() => ({ color: 'rgb(4, 5, 6)' })}
                >
                  Tooltip text
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </SurfaceProvider>,
    );
    expect(menuTriggerRef.current).toBe(
      screen.getByRole('button', { name: 'Actions' }),
    );
    expect(tooltipTriggerRef.current).toBe(
      screen.getByRole('button', { name: 'Help' }),
    );
    for (const [id, ref, color] of [
      ['menu', menuRef, 'rgb(1, 2, 3)'],
      ['tooltip', tooltipRef, 'rgb(4, 5, 6)'],
    ] as const) {
      const popup = await screen.findByTestId(id);
      expect(ref.current).toBe(popup);
      expect(popup.getAttribute('data-surface-level')).toBe('overlay');
      expect(popup.getAttribute('data-panda-theme')).toBe('proof');
      expect(popup.classList.contains('dark')).toBe(true);
      expect(popup.classList.contains(`caller-${id}`)).toBe(true);
      expect(popup.style.backgroundColor).toBe('rgb(11, 22, 33)');
      expect(popup.style.color).toBe(color);
    }
  });

  it('exposes native navigation links and tab selection', () => {
    render(
      <>
        <NavigationMenu aria-label="Project">
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/projects">
                Projects
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu>
        <Tabs defaultValue="one">
          <Tabs.List>
            <Tabs.Tab value="one">One</Tabs.Tab>
            <Tabs.Tab value="two">Two</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="one">First</Tabs.Panel>
          <Tabs.Panel value="two">Second</Tabs.Panel>
        </Tabs>
      </>,
    );
    expect(
      screen.getByRole('link', { name: 'Projects' }).getAttribute('href'),
    ).toBe('/projects');
    fireEvent.click(screen.getByRole('tab', { name: 'Two' }));
    expect(
      screen.getByRole('tab', { name: 'Two' }).getAttribute('aria-selected'),
    ).toBe('true');
    expect(screen.getByRole('tabpanel').textContent).toContain('Second');
  });
});
