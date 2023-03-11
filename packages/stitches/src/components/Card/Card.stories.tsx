import { Button } from '../Button';
import { CardHeader } from './CardHeader';
import { Card } from './';
import type { CardHeaderProps } from './CardHeader';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolores
      repudiandae perspiciatis laborum, possimus reiciendis fuga dignissimos
      nobis! Fuga asperiores dolorem libero recusandae adipisci voluptas a
      itaque dolorum? Sint, ea.
    </p>
  </Card>
);

export const Base = Template.bind({});

Base.args = {};

export const WithHeader: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Card.Header>Header</Card.Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolores
      repudiandae perspiciatis laborum, possimus reiciendis fuga dignissimos
      nobis! Fuga asperiores dolorem libero recusandae adipisci voluptas a
      itaque dolorum? Sint, ea.
    </p>
  </Card>
);

export const AsComponent = Template.bind({});

AsComponent.args = {
  as: 'a',
  href: '/',
};
