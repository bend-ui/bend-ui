import { Button } from '../Button';
import { CardHeader } from './CardHeader';
import { Card } from './';
import type { CardHeaderProps } from './CardHeader';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const CardHeaderMock: React.FC<CardHeaderProps> = (props) => (
  <CardHeader {...props} />
);

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: {
    'Card.Header': CardHeaderMock,
    Button,
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolores
      repudiandae perspiciatis laborum, possimus reiciendis fuga dignissimos
      nobis! Fuga asperiores dolorem libero recusandae adipisci voluptas a
      itaque dolorum? Sint, ea.
    </p>
  </Card>
);

export const Base = {
  render: Template,
  args: {},
};

export const WithHeader: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>Header</Card.Header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolores
        repudiandae perspiciatis laborum, possimus reiciendis fuga dignissimos
        nobis! Fuga asperiores dolorem libero recusandae adipisci voluptas a
        itaque dolorum? Sint, ea.
      </p>
    </Card>
  ),
};

export const AsComponent = {
  render: Template,

  args: {
    as: 'a',
    href: '/',
  },
};
