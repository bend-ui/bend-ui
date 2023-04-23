import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  Container,
  Group,
  Heading,
  Input,
  Level,
  Media,
  Pagination,
  Progress,
  Stack,
  Table,
  Text,
  Tiles,
} from '@particles/emotion';
import { Layout } from '../components';

export default function Dashboard() {
  return (
    <Layout>
      <Container>
        <Level>
          <Stack>
            <Heading>Welcome back, Olivia</Heading>
            <Text>Track, manage and forecast your customers and orders.</Text>
          </Stack>
          <ButtonGroup>
            <Button>Import</Button>
            <Button palette="primary">Add</Button>
          </ButtonGroup>
        </Level>
        <Tiles>
          <Card>Total customers</Card>
          <Card>Members</Card>
          <Card>Active now</Card>
        </Tiles>
        <Level style={{ marginBottom: '1rem' }}>
          <Group>
            <Chip>All time</Chip>
            <Chip>US, AU, +4</Chip>
          </Group>
          <Box>
            <Input placeholder="Search" />
          </Box>
        </Level>
        <Card>
          <Table>
            <thead>
              <Table.Row>
                <Table.Heading>
                  <Checkbox />
                </Table.Heading>
                <Table.Heading>Company</Table.Heading>
                <Table.Heading>License use</Table.Heading>
                <Table.Heading>Status</Table.Heading>
                <Table.Heading>Users</Table.Heading>
                <Table.Heading>About</Table.Heading>
                <Table.Heading>&nbsp;</Table.Heading>
              </Table.Row>
            </thead>
            <tbody>
              <Table.Row>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Media>
                    <Media.Content>Catalog catalogapp.io</Media.Content>
                  </Media>
                </Table.Cell>
                <Table.Cell>
                  <Progress value={75} />
                </Table.Cell>
                <Table.Cell>
                  <Badge>Customer</Badge>
                </Table.Cell>
                <Table.Cell>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                      alt="An avatar"
                    />
                    <Avatar
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                      alt="An avatar"
                    />
                    <Avatar
                      src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                      alt="An avatar"
                    />
                  </AvatarGroup>
                </Table.Cell>
                <Table.Cell>
                  <Text>Content curating app</Text>
                  <Text>Brings all your news into one place</Text>
                </Table.Cell>
                <Table.Cell>
                  <ButtonGroup>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                  </ButtonGroup>
                </Table.Cell>
              </Table.Row>
            </tbody>
            <tfoot>
              <Table.Row>
                <Table.Cell colSpan={15}>
                  <Pagination />
                </Table.Cell>
              </Table.Row>
            </tfoot>
          </Table>
        </Card>
      </Container>
    </Layout>
  );
}
