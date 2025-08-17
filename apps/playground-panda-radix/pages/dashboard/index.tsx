// import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  container,
  grid,
  level,
  stack,
} from '@particles/styled-system/patterns';
import { appShell } from '@particles/styled-system/recipes';
import { css, cx } from '@particles/styled-system/css';
import { Avatar, Button, Card, Modal, Tabs } from '@particles/radix';
import Sidebar from './components/sidebar';

export function Dashboard() {
  // const { theme, setTheme } = useTheme();

  const classes = appShell();

  return (
    <div className={classes} data-part="root">
      <div
        data-part="header"
        className={cx(
          level({
            p: 'lg',
            borderBottom: 'divider',
          }),
        )}
      >
        <div>Panda + Radix</div>
        <div>
          <nav>
            <Link href="/">Dashboard</Link>
            <Link href="auth">Authentication</Link>
            <Link href="music">Music</Link>
          </nav>
        </div>
        <div>
          {/* <Select
            defaultValue={theme}
            onValueChange={(value) => setTheme(value)}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="light">Light</Select.Item>
              <Select.Item value="dark">Dark</Select.Item>
              <Select.Item value="system">System</Select.Item>
            </Select.Content>
          </Select> */}
        </div>
      </div>
      <aside
        data-part="sidebar"
        className={cx(
          css({
            p: 'lg',
            borderRight: 'divider',
          }),
        )}
      >
        <Sidebar />
        <div className={css({ mt: 'auto' })}>
          <Avatar>
            <Avatar.Image
              alt="Colm Tuite"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            />
            <Avatar.Fallback>CT</Avatar.Fallback>
          </Avatar>
        </div>
      </aside>
      <main data-part="main">
        <div
          className={level({
            p: 'lg',
            borderBottom: 'divider',
          })}
        >
          <div>Settings</div>
          <div>
            <Modal>
              <Modal.Trigger asChild>
                <Button>New Order</Button>
              </Modal.Trigger>
              <Modal.Content>
                <Tabs defaultValue="information">
                  <Tabs.List>
                    <Tabs.Tab value="information">Information</Tabs.Tab>
                    <Tabs.Tab value="images">Images</Tabs.Tab>
                    <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
                    <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
                  </Tabs.List>
                  <Tabs.Pane value="information">
                    <h2>Information</h2>
                    <div className={level()}>
                      <Button>Cancel</Button>
                      <Button>Save</Button>
                    </div>
                  </Tabs.Pane>
                  <Tabs.Pane value="shipping">Shipping</Tabs.Pane>
                </Tabs>
              </Modal.Content>
            </Modal>
            <Modal>
              <Modal.Trigger asChild>
                <Button>Create new</Button>
              </Modal.Trigger>
              <Modal.Content>
                <div className={level({ mt: 'md' })}>
                  <Button>Save as draft</Button>
                  <Button>Add experience</Button>
                </div>
              </Modal.Content>
            </Modal>
          </div>
        </div>
        <div className={container({ py: 'lg' })}>
          <Tabs defaultValue="tab1">
            <Tabs.List aria-label="Manage your account">
              <Tabs.Tab value="tab1">Account</Tabs.Tab>
              <Tabs.Tab value="tab2">Password</Tabs.Tab>
              <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
            </Tabs.List>
            <Tabs.Pane value="tab1">
              <p className="Text">
                Make changes to your account here. Click save when you&apos;re
                done.
              </p>
              <div className={stack({ gap: 'md' })} />
              <div
                style={{
                  display: 'flex',
                  marginTop: 20,
                  justifyContent: 'flex-end',
                }}
              >
                <Button>Save changes</Button>
              </div>
            </Tabs.Pane>
            <Tabs.Pane value="tab2">
              <p className="Text">
                Change your password here. After saving, you&apos;ll be logged
                out.
              </p>
              <div className={stack({ gap: 'md' })} />
              <div
                style={{
                  display: 'flex',
                  marginTop: 20,
                  justifyContent: 'flex-end',
                }}
              >
                <Button>Change password</Button>
              </div>
            </Tabs.Pane>
            <Tabs.Pane value="pricing">
              <h2 className={css({ textStyle: 'title' })}>Pricing</h2>
              <div className={grid({ columns: 3, gap: '6' })}>
                <Card>
                  <Card.Header>
                    <h3 className={css({ textStyle: 'title' })}>Personal</h3>
                    <h4 className={css({ textStyle: 'subtitle' })}>
                      Perfect plan for starters
                    </h4>
                  </Card.Header>
                  <p>Free</p>
                  <p>For a lifetime</p>
                </Card>
                <Card>
                  <Card.Header>
                    <h3 className={css({ textStyle: 'title' })}>Personal</h3>
                    <h4 className={css({ textStyle: 'subtitle' })}>
                      Perfect plan for starters
                    </h4>
                  </Card.Header>
                  <p>Free</p>
                  <p>For a lifetime</p>
                </Card>
                <Card>
                  <Card.Header>
                    <h3 className={css({ textStyle: 'title' })}>Personal</h3>
                    <h4 className={css({ textStyle: 'subtitle' })}>
                      Perfect plan for starters
                    </h4>
                  </Card.Header>
                  <p>Free</p>
                  <p>For a lifetime</p>
                </Card>
              </div>
            </Tabs.Pane>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
