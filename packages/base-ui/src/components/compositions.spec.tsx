import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Autocomplete,
  CheckboxGroup,
  Collapsible,
  Combobox,
  ContextMenu,
  Drawer,
  Fieldset,
  Form,
  Menubar,
  NumberField,
  PanelHeader,
  PreviewCard,
  Progress,
  Slider,
  Toast,
  Toggle,
  ToggleGroup,
  Toolbar,
} from './index';

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

describe('convenience compositions render only what they are given', () => {
  it('Progress renders the label and value from props', () => {
    render(<Progress label="Export data" value={40} />);

    const progressbar = screen.getByRole('progressbar', {
      name: 'Export data',
    });
    expect(progressbar.getAttribute('aria-valuenow')).toBe('40');
    expect(screen.getByText('40%')).toBeTruthy();
  });

  it('Progress omits the label when none is given', () => {
    const { container } = render(
      <Progress value={10} aria-label="Upload" />,
    );

    expect(screen.getByRole('progressbar', { name: 'Upload' })).toBeTruthy();
    expect(container.querySelector('[data-slot="label"]')).toBeNull();
  });

  it('Slider renders one thumb per value and forwards root props', () => {
    const { unmount } = render(
      <Slider defaultValue={25} aria-label="Volume" />,
    );
    expect(screen.getAllByRole('slider')).toHaveLength(1);
    expect(screen.getByRole('slider').getAttribute('aria-valuenow')).toBe(
      '25',
    );
    unmount();

    render(<Slider defaultValue={[20, 60]} aria-label="Range" />);
    expect(screen.getAllByRole('slider')).toHaveLength(2);
  });

  it('Fieldset renders the legend and children from props', () => {
    render(
      <Fieldset legend="Billing details">
        <input aria-label="Company" />
      </Fieldset>,
    );

    expect(screen.getByRole('group', { name: 'Billing details' })).toBeTruthy();
    expect(screen.getByRole('textbox', { name: 'Company' })).toBeTruthy();
  });

  it('Collapsible reveals its children from the trigger prop', async () => {
    render(<Collapsible trigger="Recovery keys">alien-bean-pasta</Collapsible>);

    const trigger = screen.getByRole('button', { name: 'Recovery keys' });
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(trigger);

    await waitFor(() =>
      expect(trigger.getAttribute('aria-expanded')).toBe('true'),
    );
    expect(screen.getByText('alien-bean-pasta')).toBeTruthy();
  });

  it('NumberField links the label prop to the input', () => {
    render(<NumberField label="Amount" defaultValue={100} />);

    const input = screen.getByRole('textbox', { name: 'Amount' });
    expect((input as HTMLInputElement).value).toBe('100');
  });

  it('NumberField renders no label text when none is given', () => {
    const { container } = render(<NumberField aria-label="Quantity" />);

    expect(container.querySelector('label')).toBeNull();
    expect(screen.getByRole('textbox', { name: 'Quantity' })).toBeTruthy();
  });

  it('Combobox lists the items it is given', async () => {
    render(<Combobox items={fruits} aria-label="Fruit" defaultOpen />);

    expect(screen.getByRole('combobox', { name: 'Fruit' })).toBeTruthy();
    expect(await screen.findByRole('option', { name: 'Apple' })).toBeTruthy();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeTruthy();
    expect(screen.queryByText('Cherry')).toBeNull();
  });

  it('Autocomplete lists the items it is given', async () => {
    render(
      <Autocomplete
        items={['Lisbon', 'Porto']}
        aria-label="City"
        defaultOpen
      />,
    );

    expect(screen.getByRole('combobox', { name: 'City' })).toBeTruthy();
    expect(await screen.findByRole('option', { name: 'Lisbon' })).toBeTruthy();
    expect(screen.getByRole('option', { name: 'Porto' })).toBeTruthy();
    expect(screen.queryByText('Apple')).toBeNull();
  });

  it('Drawer renders a close button only when closeLabel is given', async () => {
    const { rerender } = render(
      <Drawer trigger="Open" title="Filters" defaultOpen>
        Content
      </Drawer>,
    );

    expect(await screen.findByText('Filters')).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();

    rerender(
      <Drawer trigger="Open" title="Filters" closeLabel="Done" defaultOpen>
        Content
      </Drawer>,
    );
    expect(await screen.findByRole('button', { name: 'Done' })).toBeTruthy();
  });

  it('PanelHeader renders no action unless one is given', () => {
    const { rerender } = render(<PanelHeader title="Quick actions" />);
    expect(screen.queryByRole('button')).toBeNull();

    rerender(
      <PanelHeader
        title="Quick actions"
        action={<button type="button">Refresh</button>}
      />,
    );
    expect(screen.getByRole('button', { name: 'Refresh' })).toBeTruthy();
  });
});

describe('compounds without a natural composition expose Root as the callable', () => {
  it.each([
    ['CheckboxGroup', CheckboxGroup],
    ['ContextMenu', ContextMenu],
    ['Form', Form],
    ['Menubar', Menubar],
    ['PreviewCard', PreviewCard],
    ['Toast', Toast],
    ['Toggle', Toggle],
    ['ToggleGroup', ToggleGroup],
    ['Toolbar', Toolbar],
  ] as const)('%s is its own Root', (_name, Component) => {
    expect(Component).toBe(Component.Root);
  });

  it('renders no content of its own', () => {
    const { container } = render(
      <>
        <CheckboxGroup aria-label="Toppings" />
        <Form aria-label="Settings" />
        <Menubar />
        <Toggle aria-label="Bold" />
        <ToggleGroup aria-label="Alignment" />
        <Toolbar aria-label="Formatting" />
      </>,
    );

    expect(container.textContent).toBe('');
  });

  it('forwards children and props to the Root', () => {
    render(
      <Toolbar aria-label="Formatting">
        <Toolbar.Button>Bold</Toolbar.Button>
      </Toolbar>,
    );

    expect(screen.getByRole('toolbar', { name: 'Formatting' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Bold' })).toBeTruthy();
  });
});
