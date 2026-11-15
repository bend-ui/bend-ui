import { Meta, StoryObj } from '@storybook/react-vite';
import { Fieldset } from './Fieldset';

const meta: Meta<typeof Fieldset> = {
  title: 'Fieldset',
  component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
    </Fieldset>
  ),
};
