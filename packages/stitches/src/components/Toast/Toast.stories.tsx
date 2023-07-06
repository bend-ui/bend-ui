import { Box } from '../Box';
import { Toast } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<typeof Toast>;

const containerStyles = {
  position: 'fixed',
  zIndex: 1,
  insetBlockEnd: 0,
  insetInline: 0,
  paddingBlockEnd: '5vh',
  display: 'grid',
  justifyItems: 'center',
  justifyContent: 'center',
  gap: '1vh',
  pointerEvents: 'none',
};

export const Default: StoryObj<typeof Toast> = {
  render: (args) => (
    <Toast title="We've just released a new update!" {...args}>
      Check out the all new dashboard view. Pages and exports now load faster.
    </Toast>
  ),
};

export const Group: StoryObj<typeof Toast> = {
  render: (args) => (
    <Box as="section" sx={containerStyles}>
      <Toast title="We've just released a new update!" {...args}>
        Check out the all new dashboard view. Pages and exports now load faster.
      </Toast>
      <Toast title="We've just released a new update!" {...args}>
        Check out the all new dashboard view. Pages and exports now load faster.
      </Toast>
      <Toast title="We've just released a new update!" {...args}>
        Check out the all new dashboard view. Pages and exports now load faster.
      </Toast>
    </Box>
  ),
};
