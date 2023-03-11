import { useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Group,
  Heading,
  Input,
  Level,
  Media,
  Modal,
  Pagination,
  Table,
  Text,
} from '@particles/emotion';

export default function TeamTab() {
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);

  return (
    <Card>
      <Level>
        <Box>
          <Heading>
            Team members <Badge>48 users</Badge>
          </Heading>
          <Text>
            Manage your team members and their account permissions here.
          </Text>
        </Box>
        <ButtonGroup>
          <Button>Download CSV</Button>
          <Button
            palette="primary"
            onClick={() => setAddUserModalOpen(!addUserModalOpen)}
          >
            Add user
          </Button>
          <Modal isOpen={addUserModalOpen}>
            <form>
              <Input placeholder="Name" />
            </form>
            <ButtonGroup>
              <Button>Cancel</Button>
              <Button palette="primary">Confirm</Button>
            </ButtonGroup>
          </Modal>
        </ButtonGroup>
      </Level>
      <Table>
        <thead>
          <Table.Row>
            <Table.Heading>
              <Group>
                <Checkbox />
                <Text>Name</Text>
              </Group>
            </Table.Heading>
            <Table.Heading>Status</Table.Heading>
            <Table.Heading>Email address</Table.Heading>
            <Table.Heading>Teams</Table.Heading>
            <Table.Heading />
          </Table.Row>
        </thead>
        <tbody>
          <Table.Row>
            <Table.Cell>
              <Group>
                <Checkbox />
                <Media>
                  <Media.Image>
                    <Avatar
                      src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                      alt="Olivia Rhye"
                    />
                  </Media.Image>
                  <Media.Content>
                    <Text as="p" variant="body" sx={{ fontWeight: 'bold' }}>
                      Olivia Rhye
                    </Text>
                    <Text as="p">olivia@untitledui.com</Text>
                  </Media.Content>
                </Media>
              </Group>
            </Table.Cell>
            <Table.Cell>
              <Badge>Active</Badge>
            </Table.Cell>
            <Table.Cell>olivia@untitledui.com</Table.Cell>
            <Table.Cell>
              <Badge>Design</Badge>
              <Badge>Product</Badge>
            </Table.Cell>
            <Table.Cell />
          </Table.Row>
          <Table.Row>
            <Table.Cell />
            <Table.Cell>
              <Badge>Active</Badge>
            </Table.Cell>
            <Table.Cell>phoenix@untitledui.com</Table.Cell>
            <Table.Cell>
              <Badge>Design</Badge>
              <Badge>Software Engineering</Badge>
            </Table.Cell>
            <Table.Cell />
          </Table.Row>
          <Table.Row>
            <Table.Cell />
            <Table.Cell>
              <Badge>Offline</Badge>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </tbody>
      </Table>
      <Pagination />
    </Card>
  );
}
