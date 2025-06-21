import { Card } from '../Card';
import { Tiles } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tiles> = {
  title: 'Components/Layout/Tiles',
  component: Tiles,
};

export default meta;

type Story = StoryObj<typeof Tiles>;

export const Base: Story = {
  render: () => (
    <Tiles>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        consequatur aspernatur cumque ducimus consectetur debitis perspiciatis!
        Autem obcaecati veniam deleniti quod, nam voluptatibus repellendus,
        dolorum mollitia at, cumque magnam sint?
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        consequatur aspernatur cumque ducimus consectetur debitis perspiciatis!
        Autem obcaecati veniam deleniti quod, nam voluptatibus repellendus,
        dolorum mollitia at, cumque magnam sint?
      </Card>
    </Tiles>
  ),
};
