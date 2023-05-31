import { Alert } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = (args) => (
  <Alert {...args}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet
    saepe neque repudiandae qui blanditiis obcaecati sequi rem. Quae dolore odio
    voluptas est architecto debitis aliquam illum accusamus cumque labore.
  </Alert>
);

export const Primary = {
  render: Template,
  args: {},
};

export const WithCloseButton: StoryObj<typeof Alert> = {
  render: (args) => (
    <Alert {...args}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet
      saepe neque repudiandae qui blanditiis obcaecati sequi rem. Quae dolore
      odio voluptas est architecto debitis aliquam illum accusamus cumque
      labore.
      <Alert.CloseButton />
    </Alert>
  ),
};
