import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { NavBar } from './NavBar';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Base: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args}>
    <Box>
      <Text>Design System</Text>
      <nav>
        <ul>
          <li>
            <a href="/">Get started</a>
          </li>
          <li>
            <a href="/">Components</a>
          </li>
          <li>
            <a href="/">Design</a>
          </li>
        </ul>
      </nav>
    </Box>
    <Box>
      <Button>Login</Button>
      <Button>Signup</Button>
    </Box>
  </NavBar>
);
