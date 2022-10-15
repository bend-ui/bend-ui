import { useState } from 'react';
import { TbMail } from 'react-icons/tb';
import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  Input,
  Level,
  Select,
  Stack,
  Tabs,
  Text,
} from '@particles/emotion';
import { Layout } from '../components';
import TeamTab from './team';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<string | null>('my-details');

  return (
    <Layout>
      <Container>
        <Level>
          <Heading>Settings</Heading>
          <Input placeholder="Search" />
        </Level>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="my-details">My details</Tabs.Tab>
            <Tabs.Tab value="profile">Profile</Tabs.Tab>
            <Tabs.Tab value="password">Password</Tabs.Tab>
            <Tabs.Tab value="team">Team</Tabs.Tab>
            <Tabs.Tab value="plan">Plan</Tabs.Tab>
            <Tabs.Tab value="billing">Billing</Tabs.Tab>
          </Tabs.List>
          <Tabs.Pane value="my-details">
            <Level>
              <Stack>
                <Heading>Personal info</Heading>
                <Text>Update your photo and personal details here.</Text>
              </Stack>
              <ButtonGroup>
                <Button>Cancel</Button>
                <Button palette="primary">Save</Button>
              </ButtonGroup>
            </Level>
            <form>
              <Stack>
                <div>
                  <label htmlFor="">Name</label>
                  <Input />
                  <Input />
                </div>
                <div>
                  <label htmlFor="">Email address</label>
                  <Input
                    icon={<TbMail />}
                    type="email"
                    placeholder="name@domain.com"
                  />
                </div>
                <div>
                  <label htmlFor="">Role</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="">Country</label>
                  <Select></Select>
                </div>
              </Stack>
            </form>
          </Tabs.Pane>
          <Tabs.Pane value="team">
            <TeamTab />
          </Tabs.Pane>
        </Tabs>
      </Container>
    </Layout>
  );
}
