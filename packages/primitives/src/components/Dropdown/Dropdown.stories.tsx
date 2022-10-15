import React from 'react';
import { useDisclosure } from '../../hooks';
import { useDropdown } from './useDropdown';

export default {
  title: 'Components/Dropdown',
};

export const Base = () => {
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
