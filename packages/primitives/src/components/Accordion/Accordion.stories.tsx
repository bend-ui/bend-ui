import React from 'react';
import { Accordion } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

type Story = ComponentStory<typeof Accordion>;

export const Base: Story = (args) => (
  <Accordion.Root {...args}>
    <Accordion.Item>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        similique reprehenderit dolores est. A quas commodi ut totam omnis saepe
        quod tenetur quis, veritatis repudiandae quos reiciendis libero dolores
        animi.
      </p>
    </Accordion.Item>
    <Accordion.Item>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        similique reprehenderit dolores est. A quas commodi ut totam omnis saepe
        quod tenetur quis, veritatis repudiandae quos reiciendis libero dolores
        animi.
      </p>
    </Accordion.Item>
    <Accordion.Item>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        similique reprehenderit dolores est. A quas commodi ut totam omnis saepe
        quod tenetur quis, veritatis repudiandae quos reiciendis libero dolores
        animi.
      </p>
    </Accordion.Item>
  </Accordion.Root>
);
