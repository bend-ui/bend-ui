import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '../Select';
import { Toggle } from '../Toggle';
import { Toolbar } from './Toolbar';

const meta: Meta<typeof Toolbar> = {
  title: 'Toolbar',
  component: Toolbar,
};

export default meta;

type Story = StoryObj<typeof meta>;

const fonts = [
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Arial', value: 'arial' },
];

export const Default: Story = {
  render: (args) => (
    <Toolbar {...args}>
      <Toolbar.Group aria-label="Alignment">
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Align left"
          value="align-left"
        >
          Align Left
        </Toolbar.Button>
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Align right"
          value="align-right"
        >
          Align Right
        </Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Numerical format">
        <Toolbar.Button aria-label="Format as currency">$</Toolbar.Button>
        <Toolbar.Button aria-label="Format as percent">%</Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Select.Root items={fonts} defaultValue="helvetica">
        <Toolbar.Button render={<Select.Trigger />}>
          <Select.Value />
          <Select.Icon>
            <ChevronsUpDownIcon aria-hidden="true" size={12} />
          </Select.Icon>
        </Toolbar.Button>
        <Select.Portal>
          <Select.Positioner sideOffset={8}>
            <Select.Popup>
              <Select.Item value="helvetica">
                <Select.ItemIndicator>
                  <CheckIcon aria-hidden="true" size={12} />
                </Select.ItemIndicator>
                <Select.ItemText>Helvetica</Select.ItemText>
              </Select.Item>
              <Select.Item value="arial">
                <Select.ItemIndicator>
                  <CheckIcon aria-hidden="true" size={12} />
                </Select.ItemIndicator>
                <Select.ItemText>Arial</Select.ItemText>
              </Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
      <Toolbar.Separator />
      <Toolbar.Link href="#">Edited 51m ago</Toolbar.Link>
    </Toolbar>
  ),
};
