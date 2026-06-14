import { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/Layout/ScrollArea',
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

export const ConstrainedPanel: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid var(--colors-stroke-weak)',
        height: 220,
        width: 360,
      }}
    >
      <ScrollArea style={{ height: '100%' }}>
        {Array.from({ length: 18 }, (_, index) => (
          <p key={index}>Panel notification {index + 1}</p>
        ))}
      </ScrollArea>
    </div>
  ),
};

export const SidebarList: Story = {
  render: () => (
    <div style={{ height: 320, width: 260 }}>
      <ScrollArea style={{ height: '100%' }}>
        {Array.from({ length: 24 }, (_, index) => (
          <button
            key={index}
            style={{ display: 'block', padding: 10, width: '100%' }}
          >
            Queue item {index + 1}
          </button>
        ))}
      </ScrollArea>
    </div>
  ),
};
