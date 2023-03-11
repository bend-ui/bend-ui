import {
  TbBrandFirefox,
  TbDotsVertical,
  TbEdit,
  TbSearch,
  TbTrash,
} from 'react-icons/tb';
import {
  Avatar,
  Button,
  ButtonGroup,
  Checkbox,
  Input,
  Level,
  Media,
  Table,
} from '@particles/tailwind';
import { Layout } from '../../components';

export default function CustomersPage() {
  return (
    <Layout>
      <div className="mx-auto flex h-full max-w-6xl flex-col">
        <Level className="py-4">
          <h1 className="text-4xl font-semibold">Customers</h1>
          <ButtonGroup>
            <Button palette="secondary">Import</Button>
            <Button>Add customer</Button>
          </ButtonGroup>
        </Level>
        {/* <Tabs></Tabs> */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-md border border-neutral-200 p-3 shadow">
            <Level>
              <span>Text</span>
              <Button palette="secondary">
                <TbDotsVertical />
              </Button>
            </Level>
            <Level>
              <span>Number</span>
              <span>Badge</span>
            </Level>
          </div>
          <div className="rounded-md border border-neutral-200 p-3 shadow">
            <Level>
              <span>Text</span>
              <Button palette="secondary">
                <TbDotsVertical />
              </Button>
            </Level>
            <Level>
              <span>Number</span>
              <span>Badge</span>
            </Level>
          </div>
          <div className="rounded-md border border-neutral-200 p-3 shadow">
            <Level>
              <span>Text</span>
              <Button palette="secondary">
                <TbDotsVertical />
              </Button>
            </Level>
            <Level>
              <span>Number</span>
              <span>Badge</span>
            </Level>
          </div>
        </div>
        <Level className="py-4">
          <div>
            <span>Chip</span>
            <span>Chip</span>
            <span>Chip</span>
          </div>
          <div>
            <Input icon={<TbSearch />} placeholder="Search" />
          </div>
        </Level>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>
                <Checkbox label="checky" />
              </Table.Header>
              <Table.Header>Company</Table.Header>
              <Table.Header>About</Table.Header>
              <Table.Header>Users</Table.Header>
              <Table.Header>License use</Table.Header>
              <Table.Header />
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Col>
                <Checkbox label="checka" />
              </Table.Col>
              <Table.Col>
                <Media>
                  <Media.Image>
                    <TbBrandFirefox />
                  </Media.Image>
                  <Media.Body>
                    <div>Firefox</div>
                    firefox.com
                  </Media.Body>
                </Media>
              </Table.Col>
              <Table.Col>The finest web browser</Table.Col>
              <Table.Col>
                <Avatar src="" />
              </Table.Col>
              <Table.Col>
                <div>Progress bar</div>
              </Table.Col>
              <Table.Col>
                <ButtonGroup>
                  <Button>
                    <TbTrash />
                  </Button>
                  <Button>
                    <TbEdit />
                  </Button>
                </ButtonGroup>
              </Table.Col>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Layout>
  );
}
