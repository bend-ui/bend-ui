import Link from 'next/link';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Level,
  Nav,
  NavBar,
} from '@particles/stitches';
import { Logo, NavLink } from '../../../components';

export const Layout = ({ children }) => (
  <>
    <NavBar>
      <Container>
        <Level sx={{ py: '$lg' }}>
          <Flex>
            <Link href="/">
              <a>
                <Logo size={32} />
              </a>
            </Link>
            <Nav>
              <Nav.Link as={NavLink} href="/website">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} href="/website/products">
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} href="/website/resources">
                Resources
              </Nav.Link>
              <Nav.Link as={NavLink} href="/website/pricing">
                Pricing
              </Nav.Link>
            </Nav>
          </Flex>
          <Box>
            <Avatar src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80" />
          </Box>
        </Level>
      </Container>
    </NavBar>
    {children}
  </>
);
