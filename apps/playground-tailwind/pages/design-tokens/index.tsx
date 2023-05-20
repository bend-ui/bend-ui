import { RiNotification3Line, RiSettings5Line } from 'react-icons/ri';
import Link from 'next/link';
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  cn,
  DropdownMenu,
  Input,
  Table,
  useLevelStyles,
} from '@particles/tailwind';

const dataTableData = [
  {
    id: 1,
    company: 'Catalog',
    progress: 50,
    status: 'customer',
  },
  {
    id: 2,
    company: 'Microsoft',
    progress: 75,
    status: 'churned',
  },
];

/* eslint-disable-next-line */
export interface DesignTokensProps {}

export function DesignTokens(props: DesignTokensProps) {
  return (
    <div className="flex h-screen flex-col">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={cn(
            useLevelStyles().classes.root,
            'border-b border-border py-4'
          )}
        >
          <div className="flex flex-row gap-5">
            <div className={cn('font-black')}>
              <Link href="/">Particles UI</Link>
            </div>
            <nav className="flex flex-row gap-4">
              <a href="#">Home</a>
              <a href="#">Dashboard</a>
              <a href="#">Projects</a>
              <a href="#">Tasks</a>
            </nav>
          </div>
          <div className="flex flex-row gap-3">
            <ButtonGroup>
              <Button palette="secondary">Upgrade now</Button>

              <DropdownMenu>
                <DropdownMenu.Target>
                  <button className="rounded-md p-2.5 text-gray-600 hover:bg-gray-100">
                    <span className="sr-only">Settings</span>
                    <RiSettings5Line className="h-5 w-5" />
                  </button>
                </DropdownMenu.Target>
                <DropdownMenu.Menu>
                  <DropdownMenu.MenuItem>Settings</DropdownMenu.MenuItem>
                </DropdownMenu.Menu>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenu.Target>
                  <button className="rounded-md p-2.5 text-gray-600 hover:bg-gray-100">
                    <span className="sr-only">Notifications</span>
                    <RiNotification3Line className="h-5 w-5" />
                  </button>
                </DropdownMenu.Target>
                <DropdownMenu.Menu>
                  <DropdownMenu.MenuItem>A notification</DropdownMenu.MenuItem>
                </DropdownMenu.Menu>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenu.Target>
                  <Avatar src="images/user-1.jpg" />
                </DropdownMenu.Target>
                <DropdownMenu.Menu>
                  <DropdownMenu.MenuItem>Logout</DropdownMenu.MenuItem>
                </DropdownMenu.Menu>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </div>
        <aside
          className={cn(
            useLevelStyles().classes.root,
            'border-b border-border py-4'
          )}
        >
          <nav className="flex flex-row gap-4">
            <a href="#">Overview</a>
            <a href="#">Customers</a>
            <a href="#">Transactions</a>
            <a href="#">Campaign</a>
          </nav>
        </aside>
        <main>
          <div className={cn(['py-6', useLevelStyles().classes.root])}>
            <div>
              <div className="text-3xl font-semibold">Welcome back, Randy</div>
              <div className="text-lg font-normal text-gray-800">
                Track, manage and forecast your customers and orders.
              </div>
            </div>
            <ButtonGroup>
              <Button palette="secondary">Import</Button>
              <Button palette="primary">Add</Button>
            </ButtonGroup>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <div className={cn('bg-surface')}>
                <div className="text-base font-medium">Total customers</div>
                <div className={}>2420</div>
                <div>40% vs last month</div>
              </div>
              <div className={}>
                <div className="text-base font-medium">Subscribers</div>
                <div className={}>3422</div>
                <div>-10% vs last month</div>
              </div>
              <div className={}>
                <div className="text-base font-medium">Active now</div>
                <div className={}>123</div>
                <div>20% vs last month</div>
              </div>
            </div>
          </div>
          <div className={cn(useLevelStyles().classes.root, 'py-4')}>
            <div className="flex flex-row items-center gap-2">
              <Chip>All time</Chip>
              <Button palette="secondary">More filters</Button>
            </div>
            <div>
              <Input placeholder="Search" />
            </div>
          </div>
          <Card>
            <Table>
              <Table.Head>
                <Table.Header>
                  <Checkbox label="" />
                </Table.Header>
                <Table.Header>Company</Table.Header>
                <Table.Header>Progress</Table.Header>
                <Table.Header>Status</Table.Header>
                <Table.Header />
              </Table.Head>
              <Table.Body>
                {dataTableData.map((item) => (
                  <Table.Row key={`customer-${item.id}`}>
                    <Table.Col>
                      <Checkbox label="" />
                    </Table.Col>
                    <Table.Col>{item.company}</Table.Col>
                    <Table.Col>
                      <div>ProgressBar {item.progress}</div>
                    </Table.Col>
                    <Table.Col>{item.status}</Table.Col>
                    <Table.Col>
                      <ButtonGroup>
                        <Button>Delete</Button>
                        <Button>Edit</Button>
                      </ButtonGroup>
                    </Table.Col>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <div className={cn(useLevelStyles().classes.root, 'p-4')}>
              <div>
                <ButtonGroup>
                  <Button palette="secondary">Previous</Button>
                  <Button palette="secondary">Next</Button>
                </ButtonGroup>
              </div>
              <div>Page 1 of 10</div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default DesignTokens;
