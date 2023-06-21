import { useDisclosure } from '../../hooks';
import { Dropdown, useDropdown } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryFn<typeof Dropdown>;

export const Base: Story = {
  render: (args) => <Dropdown.Root {...args}>Dropdown</Dropdown.Root>,
};

export const Hook = () => {
  const { isOpen, toggle } = useDisclosure();
  const { getReferenceProps, getDropdownProps, getItemProps } = useDropdown({
    isOpen,
    onOpenChange: toggle,
  });
  return (
    <>
      <button {...getReferenceProps()}>Options</button>
      {isOpen && (
        <div {...getDropdownProps()}>
          <button {...getItemProps()}>Edit</button>
          <button {...getItemProps()}>Duplicate</button>
          <button {...getItemProps()}>Delete</button>
        </div>
      )}
    </>
  );
};
