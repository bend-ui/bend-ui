import { ComponentMeta, ComponentStory } from '@storybook/react';
import clsx from 'clsx';
import { Button, buttonStyles } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const WithStyles: ComponentStory<typeof Button> = () => {
  // import { buttonStyles } from '@particles/primitives';
  return (
    <Button style={buttonStyles.root}>
      <svg
        style={{ width: '1.25em', height: '1.25em' }}
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      </svg>
      Button
    </Button>
  );
};

WithStyles.parameters = { docs: { source: { type: 'code' } } };

export const Tailwind: ComponentStory<typeof Button> = (args) => {
  const classes = [
    'text-white',
    'bg-blue-700',
    'hover:bg-blue-800',
    'focus:ring-4',
    'focus:ring-blue-300',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'mr-2',
    'mb-2',
    'dark:bg-blue-600',
    'dark:hover:bg-blue-700',
    'focus:outline-none',
    'dark:focus:ring-blue-800',
  ];
  return (
    <Button {...args} className={clsx(classes)}>
      Button
    </Button>
  );
};
