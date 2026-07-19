import { fireEvent, render, screen } from '@testing-library/react';

import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('emits the canonical open attribute when an item is expanded', () => {
    render(
      <Accordion.Root>
        <Accordion.Item value="details">
          <Accordion.Header>
            <Accordion.Trigger>Details</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Account details</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );

    const trigger = screen.getByRole('button', { name: 'Details' });
    const item = trigger.closest('[data-part="item"]');
    expect(item?.getAttribute('data-open')).toBeNull();

    fireEvent.click(trigger);

    expect(item?.getAttribute('data-open')).toBe('');
  });
});
