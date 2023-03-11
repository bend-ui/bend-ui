import { Badge } from '../Badge';
import { Card } from '../Card';
import { Table } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default { component: Table } as ComponentMeta<typeof Table>;

type Story = ComponentStory<typeof Table>;

export const Base: Story = (args) => (
  <Table {...args}>
    <Table.Head>
      <Table.Row>
        <Table.Header>Name</Table.Header>
        <Table.Header>Email</Table.Header>
        <Table.Header className="flex justify-end">Status</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Col>Bobby Doe</Table.Col>
        <Table.Col>bobby.doe@particles-ui.dev</Table.Col>
        <Table.Col className="flex justify-end">
          <Badge palette="success" withIndicator>
            Online
          </Badge>
        </Table.Col>
      </Table.Row>
      <Table.Row>
        <Table.Col>Bobby Doe</Table.Col>
        <Table.Col>bobby.doe@particles-ui.dev</Table.Col>
        <Table.Col className="flex justify-end">
          <Badge palette="danger" withIndicator>
            Offline
          </Badge>
        </Table.Col>
      </Table.Row>
      <Table.Row>
        <Table.Col>Bobby Doe</Table.Col>
        <Table.Col>bobby.doe@particles-ui.dev</Table.Col>
        <Table.Col className="flex justify-end">
          <Badge palette="success" withIndicator>
            Online
          </Badge>
        </Table.Col>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const InACard: Story = (args) => (
  <Card>
    <Base {...args} />
  </Card>
);
