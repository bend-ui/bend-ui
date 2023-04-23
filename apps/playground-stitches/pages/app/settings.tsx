import { FiDownloadCloud } from 'react-icons/fi';
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Divider,
  FormControl,
  Heading,
  IconButton,
  Input,
  Level,
  Select,
  Stack,
  Table,
  Tabs,
  Text,
} from '@particles/stitches';
import Layout from './components';

export default function Settings() {
  return (
    <Layout>
      <Heading as="h1" variant="title">
        Settings
      </Heading>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="my-details">My details</Tabs.Tab>
          <Tabs.Tab value="profile">Profile</Tabs.Tab>
          <Tabs.Tab value="password">Password</Tabs.Tab>
          <Tabs.Tab value="team">Team</Tabs.Tab>
          <Tabs.Tab value="billing">Billing</Tabs.Tab>
          <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
        </Tabs.List>
        <Tabs.Pane value="my-details">
          <Level>
            <Stack>
              <Heading variant="subtitle">Personal info</Heading>
              <Text variant="lead">
                Update your photo and personal details here.
              </Text>
            </Stack>
            <ButtonGroup>
              <Button>Cancel</Button>
              <Button>Save</Button>
            </ButtonGroup>
          </Level>
          <Stack>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email address</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Your photo</FormControl.Label>
              <FormControl.Description>
                This will be displayed on your profile.
              </FormControl.Description>
              <Avatar src="bebop" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Role</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Country</FormControl.Label>
              <Select placeholder="Select a country">
                <Select.Option>Canada</Select.Option>
                <Select.Option>USA</Select.Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label>Timezone</FormControl.Label>
              <Select placeholder="Select a timezone">
                <Select.Option>Pacific Standard Time (PST)</Select.Option>
                <Select.Option>Eastern Standard Time (EST)</Select.Option>
              </Select>
            </FormControl>
          </Stack>
          <Divider />
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>Save</Button>
          </ButtonGroup>
        </Tabs.Pane>
        <Tabs.Pane value="billing">
          <Card>
            Basic plan
            <Text>$10 per month</Text>
            <Text>
              Includes up to 10 users, 20GB indiviual data and access to all
              features.
            </Text>
          </Card>
          <Card>
            Business plan
            <Text>$20 per month</Text>
            <Text>
              Includes up to 20 users, 40GB indiviual data and access to all
              features.
            </Text>
          </Card>
          <Card>
            Enterprise plan
            <Text>$40 per month</Text>
            <Text>
              Unlimited users, unlimited individual data and access to all
              features.
            </Text>
          </Card>
          <Level>
            <Heading>Billing history</Heading>
            <Button>Download all</Button>
          </Level>
          <Card>
            <Table>
              <Table.Header>
                <Table.Column>Invoice</Table.Column>
                <Table.Column>Amount</Table.Column>
                <Table.Column>Date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column />
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Basic Plan – Dec 2022</Table.Cell>
                  <Table.Cell>USD $10.00</Table.Cell>
                  <Table.Cell>Dec 1, 2022</Table.Cell>
                  <Table.Cell>
                    <Badge palette="success">Paid</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton>
                      <FiDownloadCloud />
                    </IconButton>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </Tabs.Pane>
      </Tabs>
    </Layout>
  );
}
