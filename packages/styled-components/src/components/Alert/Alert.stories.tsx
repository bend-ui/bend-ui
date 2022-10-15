import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiInfo } from 'react-icons/fi';
import { Alert } from './Alert';

export default {
  component: Alert,
  title: 'Components/Alert',
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}></Alert>
);

export const Base = Template.bind({});
Base.args = {
  title: 'Danger',
  icon: <FiInfo />,
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic velit
    obcaecati in quidem modi praesentium repudiandae debitis a ab dolore
    corporis, illum, voluptatem rem perferendis. Nesciunt perspiciatis rerum
    libero fuga.`,
};

export const withComponents = Template.bind({});
withComponents.args = {
  title: <h3>Info</h3>,
  icon: <FiInfo />,
  children: (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic velit
        obcaecati in quidem modi praesentium repudiandae debitis a ab dolore
        corporis, illum, voluptatem rem perferendis. Nesciunt perspiciatis rerum
        libero fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic velit
        obcaecati in quidem modi praesentium repudiandae debitis a ab dolore
        corporis, illum, voluptatem rem perferendis. Nesciunt perspiciatis rerum
        libero fuga.
      </p>
    </>
  ),
};
