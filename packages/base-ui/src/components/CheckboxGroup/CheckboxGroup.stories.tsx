import { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Form/CheckboxGroup',
  component: CheckboxGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-labelledby': 'apples-caption',
    defaultValue: ['fuji-apple'],
    children: (
      <>
        <div id="apples-caption">Apples</div>
        <Checkbox name="apple" value="fuji-apple">
          Fuji
        </Checkbox>
        <Checkbox name="apple" value="gala-apple">
          Gala
        </Checkbox>
        <Checkbox name="apple" value="granny-smith-apple">
          Granny Smith
        </Checkbox>
      </>
    ),
  },
};
