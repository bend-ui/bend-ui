'use client';

import { useState } from 'react';
import {
  Card,
  Menu,
  NavigationMenu,
  Popover,
  ScrollArea,
  Surface,
  SurfaceProvider,
  Tabs,
  Tooltip,
} from '@bend-ui/base-ui';
import { css } from '@bend-ui/styled-system/css';

const action = css({
  border: '1px solid',
  borderColor: 'stroke.focus',
  borderRadius: 'md',
  color: 'text',
  backgroundColor: 'bg.raised',
  padding: 'sm',
  cursor: 'pointer',
  _focusVisible: { layerStyle: 'focus', outlineColor: 'text' },
});
const examples = Array.from(
  { length: 18 },
  (_, index) => `Activity ${index + 1}`,
);

export function OverlaysNavigationExample() {
  const [result, setResult] = useState('No action selected.');
  return (
    <section
      aria-label="Overlays and navigation reference"
      style={{
        maxWidth: 'min(32rem, calc(100vw - 2rem))',
        display: 'grid',
        gap: 16,
      }}
    >
      <SurfaceProvider>
        <Surface contextual surfaceLevel="page" style={{ padding: 16 }}>
          <Card contextual>
            <Card.Header>
              <Card.Title>Project workspace</Card.Title>
              <Card.Description>
                Navigate, inspect details, and review activity.
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <NavigationMenu aria-label="Project navigation">
                <NavigationMenu.List>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/docs/components/overview">
                      Components
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/docs/foundation/themes">
                      Themes
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu>
              <Tabs defaultValue="overview">
                <Tabs.List aria-label="Workspace sections">
                  <Tabs.Tab value="overview">Overview</Tabs.Tab>
                  <Tabs.Tab value="activity">Activity</Tabs.Tab>
                  <Tabs.Tab value="later" disabled>
                    Later
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview">
                  <p>Use the actions below to inspect this workspace.</p>
                </Tabs.Panel>
                <Tabs.Panel value="activity">
                  <p>Recent work appears in the activity list.</p>
                </Tabs.Panel>
              </Tabs>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBlock: 16,
                }}
              >
                <Popover.Root>
                  <Popover.Trigger render={<button className={action} />}>
                    Details
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Positioner sideOffset={8} collisionPadding={8}>
                      <Popover.Popup>
                        <Popover.Title>Workspace details</Popover.Title>
                        <Popover.Description>
                          These settings apply to this project.
                        </Popover.Description>
                        <div
                          style={{ display: 'grid', gap: 12, marginTop: 12 }}
                        >
                          <Menu.Root modal={false}>
                            <Menu.Trigger
                              render={<button className={action} />}
                            >
                              More options
                            </Menu.Trigger>
                            <Menu.Portal>
                              <Menu.Positioner
                                sideOffset={8}
                                collisionPadding={8}
                              >
                                <Menu.Popup>
                                  <Menu.Item
                                    onClick={() => setResult('Details copied.')}
                                  >
                                    Copy details
                                  </Menu.Item>
                                </Menu.Popup>
                              </Menu.Positioner>
                            </Menu.Portal>
                          </Menu.Root>
                          <Popover.Close className={action}>
                            Close details
                          </Popover.Close>
                        </div>
                      </Popover.Popup>
                    </Popover.Positioner>
                  </Popover.Portal>
                </Popover.Root>
                <Menu.Root>
                  <Menu.Trigger render={<button className={action} />}>
                    Actions
                  </Menu.Trigger>
                  <Menu.Portal>
                    <Menu.Positioner sideOffset={8} collisionPadding={8}>
                      <Menu.Popup>
                        <Menu.Item
                          onClick={() => setResult('Rename selected.')}
                        >
                          Rename
                        </Menu.Item>
                        <Menu.Item disabled>Archive unavailable</Menu.Item>
                        <Menu.Item onClick={() => setResult('Share selected.')}>
                          Share
                        </Menu.Item>
                        <Menu.CheckboxItem defaultChecked>
                          <Menu.CheckboxItemIndicator aria-hidden="true">
                            ✓
                          </Menu.CheckboxItemIndicator>{' '}
                          Pin workspace
                        </Menu.CheckboxItem>
                        <Menu.Separator />
                        {examples.map((item) => (
                          <Menu.Item
                            key={item}
                            onClick={() => setResult(`${item} selected.`)}
                          >
                            {item}
                          </Menu.Item>
                        ))}
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.Root>
                <Tooltip.Provider delay={0}>
                  <Tooltip.Root>
                    <Tooltip.Trigger className={action}>Help</Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Positioner sideOffset={8} collisionPadding={8}>
                        <Tooltip.Popup>Help</Tooltip.Popup>
                      </Tooltip.Positioner>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
              <p role="status">{result}</p>
              <ScrollArea.Root style={{ height: 144 }}>
                <ScrollArea.Viewport tabIndex={0} aria-label="Recent activity">
                  <ScrollArea.Content>
                    {examples.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
              </ScrollArea.Root>
            </Card.Body>
          </Card>
        </Surface>
      </SurfaceProvider>
    </section>
  );
}
