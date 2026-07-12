import { render, screen } from '@testing-library/react';
import {
  Badge,
  Card,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
} from './index';

describe('Base UI low-level components', () => {
  it('exports package-local text and layout components', () => {
    render(
      <Stack>
        <Heading>Account</Heading>
        <Text>Profile settings</Text>
        <Badge tone="success">Active</Badge>
      </Stack>,
    );

    expect(screen.getByRole('heading', { name: 'Account' })).toBeTruthy();
    expect(screen.getByText('Profile settings')).toBeTruthy();
    expect(screen.getByText('Active')).toBeTruthy();
  });

  it('exposes the Card compound anatomy', () => {
    expect(Card.Root).toBeDefined();
    expect(Card.Header).toBeDefined();
    expect(Card.Body).toBeDefined();
    expect(Card.Footer).toBeDefined();
    expect(Card.Section).toBeDefined();
  });

  it('preserves accessible naming for IconButton', () => {
    render(<IconButton icon={<span aria-hidden="true">+</span>}>Add item</IconButton>);

    expect(screen.getByRole('button', { name: 'Add item' })).toBeTruthy();
  });

  it('renders the Base UI input primitive', () => {
    render(<Input aria-label="Email" size="sm" variant="outline" />);

    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toBeTruthy();
    expect(input.getAttribute('variant')).toBeNull();
  });

  it('consumes recipe variants instead of forwarding them to the DOM', () => {
    render(<Badge variant="outline">Pending</Badge>);

    expect(screen.getByText('Pending').getAttribute('variant')).toBeNull();
  });
});
