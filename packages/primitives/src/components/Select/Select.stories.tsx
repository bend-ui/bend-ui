import { useState } from 'react';
import { useDisclosure } from '../../hooks';
import { useSelect } from './useSelect';
import { Select } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

function CaretDown() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="1em"
      viewBox="0 0 20 20"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

export const Base: Story = {
  render: (args) => (
    <Select.Root {...args}>
      <Select.Target>
        Select
        <CaretDown />
      </Select.Target>
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.value}>{option.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  ),
};

export const Hook: StoryFn = () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ];

  const { isOpen, toggle } = useDisclosure();

  const { getTargetProps, getListboxProps, getOptionProps } = useSelect({
    isOpen,
    onOpenChange: toggle,
  });

  const [value, setValue] = useState('');

  return (
    <div>
      <button {...getTargetProps()}>
        {(value && options.find((option) => option.value === value).label) ||
          'Select'}
        <span>
          <CaretDown />
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

export const Tailwind: Story = {
  render: (args) => (
    <Select.Root {...args}>
      <Select.Target className="flex w-full items-center justify-between border border-gray-700 rounded p-4">
        Select
        <CaretDown />
      </Select.Target>
      <Select.Content className="bg-gray-800 p-4 rounded">
        {options.map((option) => (
          <Select.Item key={option.value}>{option.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  ),
};
