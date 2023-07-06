import { useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Transition } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Miscellaneous/Transition',
  component: Transition,
} as Meta<typeof Transition>;

export const Usage: StoryObj<typeof Transition> = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(!open)}>Transition</Button>
        <Transition {...args} isMounted={open}>
          {(styles) => <Box style={styles}>Hello world</Box>}
        </Transition>
      </>
    );
  },
};
