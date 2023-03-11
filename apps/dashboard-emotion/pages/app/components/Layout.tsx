import { FiHome, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import {
  AppShell,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Heading,
  Input,
  Media,
  Nav,
  Stack,
  Text,
} from '@particles/emotion';
import { Logo, NavLink } from '../../../components';

export const Layout = (props) => (
  <AppShell>
    <AppShell.Header />
    <AppShell.Sidebar>
      <Stack>
        <Link href="/">
          <Logo size={32} />
        </Link>
        <Input placeholder="Search" icon={<FiSearch />} />
        <Nav orientation="vertical" variant="pill">
          <Nav.Link as={NavLink} href="/app" icon={<FiHome />}>
            Home
          </Nav.Link>
          <Nav.Dropdown>
            <Nav.DropdownToggle>Dashboard</Nav.DropdownToggle>
            <Nav.DropdownItem as={NavLink} href="/app/dashboard">
              Overview
            </Nav.DropdownItem>
            <Nav.DropdownItem>Notifications</Nav.DropdownItem>
            <Nav.DropdownItem>Trade History</Nav.DropdownItem>
          </Nav.Dropdown>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Tasks</Nav.Link>
          <Nav.Link>Reporting</Nav.Link>
          <Nav.Link>Users</Nav.Link>
          <Nav.Link>Support</Nav.Link>
          <Nav.Link as={NavLink} href="/app/settings">
            Settings
          </Nav.Link>
        </Nav>
        <Card>
          <Heading>Used space</Heading>
          <Text>
            Your team has used 80% of your available space. Need more?
          </Text>
          <ButtonGroup size="sm">
            <Button>Dismiss</Button>
            <Button>Upgrade plan</Button>
          </ButtonGroup>
        </Card>
        <Divider />
        <Box>
          <Media>
            <Media.Image>
              <Avatar
                src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                alt="Olivia Rhye"
              />
            </Media.Image>
            <Media.Content>
              <Heading variant="title">Olivia Rhye</Heading>
              <Text>olivia@untitledui.com</Text>
            </Media.Content>
          </Media>
          <Button>Logout</Button>
        </Box>
      </Stack>
    </AppShell.Sidebar>
    <AppShell.Main>{props.children}</AppShell.Main>
  </AppShell>
);
