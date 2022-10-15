import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from './';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet
    saepe neque repudiandae qui blanditiis obcaecati sequi rem. Quae dolore odio
    voluptas est architecto debitis aliquam illum accusamus cumque labore.
  </Alert>
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithCloseButton: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet
    saepe neque repudiandae qui blanditiis obcaecati sequi rem. Quae dolore odio
    voluptas est architecto debitis aliquam illum accusamus cumque labore.
    <Alert.CloseButton />
  </Alert>
);
