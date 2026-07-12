import { Box } from '@bend-ui/styled-system/jsx';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../components';

const meta: Meta = {
  title: 'Blocks/Sidebars',
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <Box>
        <img src="/images/sidebar.png" alt="Sidebar" />
        <Input />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </Box>
    );
  },
};
