import { Meta, StoryObj } from '@storybook/react-vite';
import { PreviewCard } from './PreviewCard';

const meta: Meta<typeof PreviewCard> = {
  title: 'PreviewCard',
  component: PreviewCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <PreviewCard {...args}>
      <p>
        The principles of good{' '}
        <PreviewCard.Trigger href="https://en.wikipedia.org/wiki/Typography">
          typography
        </PreviewCard.Trigger>{' '}
        remain into the digital age.
      </p>

      <PreviewCard.Portal>
        <PreviewCard.Positioner sideOffset={8}>
          <PreviewCard.Popup>
            <img
              width="448"
              height="300"
              src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
              alt="Station Hofplein signage in Rotterdam, Netherlands"
            />
            <p>
              <strong>Typography</strong> is the art and science of arranging
              type to make written language clear, visually appealing, and
              effective in communication.
            </p>
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard>
  ),
};
