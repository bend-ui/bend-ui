import { Combobox, createListCollection } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Select Framework',
    placeholder: 'Select framework...',
  },
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

const collection = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
});

export const Base: Story = {
  args: {
    collection,
  },
};

export const Composed: Story = {
  render: (args) => (
    <Combobox {...args}>
      <Combobox.Label>Select Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select framework..." />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {collection.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox>
  ),
  args: {
    collection,
  },
};
