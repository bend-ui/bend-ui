import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './Button';
import { IconButton } from '../IconButton';

describe('Button', () => {
  it('renders zero as a visible label and hides decorative icons from its name', () => {
    render(<Button icon={<span>Plus</span>}>{0}</Button>);
    const button = screen.getByRole('button', { name: '0' });
    expect(button.querySelector('.Button__label')?.textContent).toBe('0');
  });

  it('keeps numeric icons in decorative slots and omits conditional false icons', () => {
    const { rerender } = render(
      <Button icon={0} iconEnd={0}>
        Save
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button.querySelectorAll('.Button__icon').length).toBe(2);
    expect(button.querySelector('.Button__icon')?.textContent).toBe('0');
    rerender(
      <Button icon={false} iconEnd={false}>
        Save
      </Button>,
    );
    expect(button.querySelectorAll('.Button__icon').length).toBe(0);
  });

  it.each([Button, IconButton])(
    'normalizes disabled/busy convenience props without leaking them',
    (Component) => {
      const activate = vi.fn();
      const { rerender } = render(
        <Component
          icon={<span>+</span>}
          isDisabled
          isLoading
          onClick={activate}
        >
          Save
        </Component>,
      );
      const button = screen.getByRole('button', {
        name: 'Save',
      }) as HTMLButtonElement;
      expect(button.disabled).toBe(true);
      expect(button.getAttribute('aria-busy')).toBe('true');
      expect(button.hasAttribute('data-disabled')).toBe(true);
      expect(
        button.querySelector('[data-loading]')?.getAttribute('aria-hidden'),
      ).toBe('true');
      expect(button.hasAttribute('isdisabled')).toBe(false);
      expect(button.hasAttribute('isloading')).toBe(false);
      fireEvent.click(button);
      expect(activate).not.toHaveBeenCalled();

      rerender(
        <Component icon={<span>+</span>} isLoading onClick={activate}>
          Save
        </Component>,
      );
      expect(button.disabled).toBe(false);
      fireEvent.click(button);
      expect(activate).toHaveBeenCalledOnce();
    },
  );

  it('preserves native render composition, ref and focusable-disabled behavior', () => {
    const ref = createRef<HTMLElement>();
    const activate = vi.fn();
    const { rerender } = render(
      <Button
        render={<span data-composed="" />}
        nativeButton={false}
        ref={ref}
        variant="primary"
        size="lg"
      >
        Composed action
      </Button>,
    );
    const composed = screen.getByRole('button', { name: 'Composed action' });
    expect(ref.current).toBe(composed);
    expect(composed.className).toContain('Button__root--variant_primary');
    expect(composed.className).toContain('Button__root--size_lg');
    expect(composed.hasAttribute('variant')).toBe(false);
    expect(composed.hasAttribute('size')).toBe(false);

    rerender(
      <Button isDisabled focusableWhenDisabled ref={ref} onClick={activate}>
        Unavailable
      </Button>,
    );
    const button = screen.getByRole('button', {
      name: 'Unavailable',
    }) as HTMLButtonElement;
    button.focus();
    expect(document.activeElement).toBe(button);
    expect(button.disabled).toBe(false);
    expect(button.getAttribute('aria-disabled')).toBe('true');
    fireEvent.click(button);
    expect(activate).not.toHaveBeenCalled();
  });

  it('retains upstream keyboard activation for a non-native action', () => {
    const activate = vi.fn();
    render(
      <Button render={<span />} nativeButton={false} onClick={activate}>
        Run action
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Run action' });
    button.focus();
    expect(document.activeElement).toBe(button);
    fireEvent.keyDown(button, { key: 'Enter' });
    fireEvent.keyDown(button, { key: ' ' });
    fireEvent.keyUp(button, { key: ' ' });
    expect(activate).toHaveBeenCalledTimes(2);
  });

  it('exposes its compound parts and passes variants through the recipe context', () => {
    render(
      <Button.Root variant="danger" size="sm">
        <Button.Icon>!</Button.Icon>
        <Button.Label>Delete</Button.Label>
        <Button.Spinner data-loading="" />
      </Button.Root>,
    );
    const button = screen.getByRole('button', { name: '! Delete' });
    expect(button.className).toContain('Button__root--variant_danger');
    expect(button.querySelector('.Button__label')).toBeTruthy();
    expect(button.querySelector('.Button__icon')).toBeTruthy();
    expect(button.querySelector('.Button__spinner')).toBeTruthy();
  });
});
