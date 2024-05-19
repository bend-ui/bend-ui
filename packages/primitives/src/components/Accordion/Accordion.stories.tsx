import { useState } from 'react';
import clsx from 'clsx';
import { Accordion } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    Item: Accordion.Item,
    Control: Accordion.Item,
    Panel: Accordion.Panel,
  },
} as Meta<typeof Accordion>;

type Story = StoryFn<typeof Accordion>;

export const Base: Story = {
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item>
        <Accordion.Control>Item 1</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Control>Item 2</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Control>Item 3</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const AllowMultiple: Story = {
  render: Base,

  args: {
    allowMultiple: true,
  },
};

export const DefaultValue: Story = {
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Control>Item 1</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Control>Item 2</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Control>Item 3</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  ),

  args: {
    defaultValue: 'item-2',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item>
        <Accordion.Control>Item 1</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item isDisabled>
        <Accordion.Control>Item 2</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Control>Item 3</Accordion.Control>
        <Accordion.Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            similique reprehenderit dolores est. A quas commodi ut totam omnis
            saepe quod tenetur quis, veritatis repudiandae quos reiciendis
            libero dolores animi.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('item-2');

    const handleChange = (value: string) => {
      console.log(`${value} is active`);
      setValue(value);
    };

    return (
      <Accordion.Root {...args} onChange={handleChange} value={value}>
        <Accordion.Item value="item-1">
          <Accordion.Control>Item 1</Accordion.Control>
          <Accordion.Panel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              similique reprehenderit dolores est. A quas commodi ut totam omnis
              saepe quod tenetur quis, veritatis repudiandae quos reiciendis
              libero dolores animi.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Item 2</Accordion.Control>
          <Accordion.Panel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              similique reprehenderit dolores est. A quas commodi ut totam omnis
              saepe quod tenetur quis, veritatis repudiandae quos reiciendis
              libero dolores animi.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Control>Item 3</Accordion.Control>
          <Accordion.Panel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              similique reprehenderit dolores est. A quas commodi ut totam omnis
              saepe quod tenetur quis, veritatis repudiandae quos reiciendis
              libero dolores animi.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};
