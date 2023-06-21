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
        <div className={cn('level', 'border-b border-border py-4')}>
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
                <DropdownMenu.Target
                  as={Button}
                  palette="secondary"
                  className="border-none bg-transparent shadow-none hover:bg-gray-200"
                  icon={<RiSettings5Line />}
                  label="Settings"
                />
                <DropdownMenu.Menu>
                  <DropdownMenu.MenuItem>Settings</DropdownMenu.MenuItem>
                </DropdownMenu.Menu>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenu.Target
                  as={Button}
                  palette="secondary"
                  className="border-none bg-transparent shadow-none hover:bg-gray-200"
                  icon={<RiNotification3Line />}
                  label="Notifications"
                />
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
        <aside className={cn('level', 'border-b border-border py-4')}>
          <nav className="flex flex-row gap-4">
            <a href="#">Overview</a>
            <a href="#">Customers</a>
            <a href="#">Transactions</a>
            <a href="#">Campaign</a>
          </nav>
        </aside>
        <main>
          <div className={cn(['py-6', 'level'])}>
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
                <div>2420</div>
                <div>40% vs last month</div>
              </div>
              <div>
                <div className="text-base font-medium">Subscribers</div>
                <div>3422</div>
                <div>-10% vs last month</div>
              </div>
              <div>
                <div className="text-base font-medium">Active now</div>
                <div>123</div>
                <div>20% vs last month</div>
              </div>
            </div>
          </div>
          <div className={cn('level', 'py-4')}>
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
            <div className={cn('level', 'p-4')}>
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
