import { FiInfo } from 'react-icons/fi';
import { Alert } from './Alert';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Alert,
  title: 'Components/Alert',
} as Meta<typeof Alert>;

export const Base = {
  args: {
    title: 'Danger',
    icon: <FiInfo />,
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic velit
      obcaecati in quidem modi praesentium repudiandae debitis a ab dolore
      corporis, illum, voluptatem rem perferendis. Nesciunt perspiciatis rerum
      libero fuga.`,
  },
};

export const WithComponents = {
  args: {
    title: <h3>Info</h3>,
    icon: <FiInfo />,
    children: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic velit
          obcaecati in quidem modi praesentium repudiandae debitis a ab dolore
          corporis, illum, voluptatem rem perferendis. Nesciunt perspiciatis
          rerum libero fuga.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic velit
          obcaecati in quidem modi praesentium repudiandae debitis a ab dolore
          corporis, illum, voluptatem rem perferendis. Nesciunt perspiciatis
          rerum libero fuga.
        </p>
      </>
    ),
  },
};
