import Link from 'next/link';
import { FiHome, FiSearch } from 'react-icons/fi';
import {
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
  styled,
  Text,
} from '@particles/stitches';
import { NavLink } from '../../../components/NavLink';
import { Logo } from '../../../components/Logo';

export const Aside = styled('aside', {
  backgroundColor: '$surface',
  borderRight: '1px solid $outline',
  px: '$xl',
  py: '$xxl',
});

export const Sidebar = () => (
  <Aside>
    <Link href="/">
      <a>
        <Logo size={32} />
      </a>
    </Link>
    <Input placeholder="Search" icon={<FiSearch />} />
    <Nav orientation="vertical">
      <Nav.Link as={NavLink} href="/app" icon={<FiHome />}>
        Home
      </Nav.Link>
      <Nav.Dropdown>
        <Nav.DropdownToggle>Dashboard</Nav.DropdownToggle>
        <Nav.DropdownItem href="#">Overview</Nav.DropdownItem>
        <Nav.DropdownItem href="#">Notifications</Nav.DropdownItem>
        <Nav.DropdownItem href="#">Trade History</Nav.DropdownItem>
      </Nav.Dropdown>
      <Nav.Link>Projects</Nav.Link>
      <Nav.Link>Tasks</Nav.Link>
      <Nav.Link>Reporting</Nav.Link>
      <Nav.Link>Users</Nav.Link>
      <Nav.Link>Support</Nav.Link>
      <Link href="/app/settings" passHref>
        <Nav.Link>Settings</Nav.Link>
      </Link>
    </Nav>
    <Card variant="subtle">
      <Heading>Used space</Heading>
      <Text>Your team has used 80% of your available space. Need more?</Text>
      <ButtonGroup>
        <Button>Dismiss</Button>
        <Button>Upgrade plan</Button>
      </ButtonGroup>
    </Card>
    <Divider />
    <Box>
      <Media>
        <Media.Image>
          <Avatar src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80" />
        </Media.Image>
        <Media.Content>
          <Heading>Olivia Rhye</Heading>
          <Text>olivia@untitledui.com</Text>
        </Media.Content>
      </Media>
      <Link href="/app/login" passHref>
        <Button as="a">Logout</Button>
      </Link>
    </Box>
  </Aside>
);
