import { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'ScrollArea',
  component: ScrollArea,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 320, height: 180 }}>
      <ScrollArea>
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>Scroll area row {index + 1}</p>
        ))}
      </ScrollArea>
    </div>
  ),
};
