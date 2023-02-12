import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useDisclosure } from '../../hooks';
import { Dropdown, useDropdown } from './';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

type Story = ComponentStory<typeof Dropdown>;

export const Base: Story = (args) => (
  <Dropdown.Root {...args}>Dropdown</Dropdown.Root>
);

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
