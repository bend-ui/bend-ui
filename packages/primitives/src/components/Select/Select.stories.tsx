import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { useDisclosure } from '../../hooks';
import { useSelect } from './useSelect';

export default {
  title: 'Forms/Select',
} as Meta;

export const Base = () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ];

  const { isOpen, toggle } = useDisclosure();

  const { getTriggerProps, getListboxProps, getOptionProps } =
    useSelect({ isOpen, onOpenChange: toggle });

  const [value, setValue] = useState('');

  return (
    <div>
      <button {...getTriggerProps()}>
        {(value && options.find((option) => option.value === value).label) ||
          'Select'}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div {...getListboxProps()}>
          {options.map((option) => (
            <button
              key={option.value}
              {...getOptionProps({
                onClick: () => {
                  setValue(option.value);
                  toggle();
                },
                onKeyDown: () => {
                  setValue(option.value);
                },
              })}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
