import { createListCollection } from '@ark-ui/react';
import { render, screen } from '@testing-library/react';

import {
  AngleSlider,
  Carousel,
  Clipboard,
  Collapsible,
  ColorPicker,
  Command,
  DatePicker,
  Editable,
  Fieldset,
  FileUpload,
  HoverCard,
  Menu,
  Pagination,
  Select,
  Toggle,
  ToggleGroup,
  Tooltip,
} from './index';

describe('Ark compound callables', () => {
  it.each([
    ['AngleSlider', AngleSlider],
    ['Carousel', Carousel],
    ['Collapsible', Collapsible],
    ['ColorPicker', ColorPicker],
    ['DatePicker', DatePicker],
    ['Editable', Editable],
    ['Fieldset', Fieldset],
    ['FileUpload', FileUpload],
    ['Toggle', Toggle],
    ['ToggleGroup', ToggleGroup],
  ])('%s is its Root part', (_, component) => {
    expect(component).toBe(component.Root);
  });

  it('renders only the children passed to a Root callable', () => {
    const { container } = render(
      <Collapsible>
        <Collapsible.Trigger>Details</Collapsible.Trigger>
      </Collapsible>,
    );

    expect(container.textContent).toBe('Details');
  });
});

describe('Ark prop-driven compositions', () => {
  it('Tooltip renders its trigger from props', () => {
    render(<Tooltip trigger="Info">More details</Tooltip>);

    expect(screen.getByRole('button', { name: 'Info' })).toBeTruthy();
    expect(screen.queryByText('Hover Me')).toBeNull();
  });

  it('HoverCard renders its trigger from props', () => {
    render(<HoverCard trigger="Profile">Card</HoverCard>);

    expect(screen.getByText('Profile')).toBeTruthy();
    expect(screen.queryByText('Hover me')).toBeNull();
  });

  it('Menu renders the items passed as children', async () => {
    render(
      <Menu trigger="Actions" defaultOpen>
        <Menu.Item value="edit">Edit</Menu.Item>
      </Menu>,
    );

    expect(await screen.findByText('Edit')).toBeTruthy();
    expect(screen.queryByText('React')).toBeNull();
  });

  it('Pagination renders trigger content from props', () => {
    render(
      <Pagination
        count={30}
        pageSize={10}
        prevTrigger="Back"
        nextTrigger="On"
      />,
    );

    expect(screen.getByText('Back')).toBeTruthy();
    expect(screen.getByText('On')).toBeTruthy();
    expect(screen.queryByText('Previous Page')).toBeNull();
  });

  it('Command renders only the content it is given', async () => {
    render(<Command defaultOpen title="Search" />);

    expect(await screen.findByText('Search')).toBeTruthy();
    expect(screen.queryByText('Dialog Description')).toBeNull();
    expect(screen.queryByText('Close')).toBeNull();
  });

  it('Command stays closed unless opened', () => {
    render(<Command title="Search" />);

    expect(
      screen.getByText('Search').closest('[data-part="content"]'),
    ).toHaveProperty('hidden', true);
  });

  it('Clipboard renders its label from props', () => {
    const { rerender } = render(
      <Clipboard label="Share link" defaultValue="https://example.com" />,
    );

    expect(screen.getByText('Share link')).toBeTruthy();

    rerender(<Clipboard defaultValue="https://example.com" />);
    expect(screen.queryByText('Copy this link')).toBeNull();
  });

  it('Select renders item text from the collection without a group label', () => {
    const collection = createListCollection({
      items: [{ label: 'Apple', value: 'apple' }],
    });
    render(<Select collection={collection} label="Fruit" defaultOpen />);

    expect(screen.getByText('Fruit')).toBeTruthy();
    expect(screen.queryByText('Frameworks')).toBeNull();
  });
});
