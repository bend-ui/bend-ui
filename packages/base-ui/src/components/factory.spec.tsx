import { createRef, type ComponentType } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, sva } from '@bend-ui/styled-system/css';
import {
  createRecipeContext,
  createSlotRecipeContext,
} from '@bend-ui/styled-system/jsx';
import { useRender } from '../utils';
import type { JsxStyleProps } from '@bend-ui/styled-system/types';
import { Button } from './Button';
import { Select } from './Select';
import { Dialog } from './Dialog/Dialog';

// A consumer-defined primitive exercises useRender without replacing Panda or
// Base UI with mocks. Keep composition native to Base UI (ADR-0001).
function RenderButton({
  render,
  ref,
  ...props
}: useRender.ComponentProps<'button'>) {
  return useRender({ defaultTagName: 'button', render, ref, props });
}

const actionRecipe = cva({
  base: { display: 'inline-flex' },
  variants: {
    tone: { quiet: { opacity: 0.5 }, loud: { opacity: 1 } },
  },
});
const actionContext = createRecipeContext(actionRecipe);
const NativeAction = actionContext.withContext<
  typeof RenderButton,
  'translate'
>(RenderButton, {
  forwardProps: ['translate'],
  defaultProps: { type: 'button' },
});
// This runtime fixture exposes only the props under test. TS 6 exceeds its
// union limit when comparing Panda's complete forwarded-style prop signature.
interface ActionProps extends useRender.ComponentProps<'button'> {
  tone?: 'quiet' | 'loud';
  css?: JsxStyleProps['css'];
}
const Action = NativeAction as unknown as ComponentType<ActionProps>;

const disabledContext = createSlotRecipeContext(
  sva({
    slots: ['root', 'label'],
    variants: {
      disabled: {
        true: { root: { opacity: 0.5 }, label: { fontWeight: 'bold' } },
      },
    },
  }),
);
const DisabledButton = disabledContext.withProvider(ButtonPrimitive, 'root', {
  forwardProps: ['disabled'],
});
const DisabledLabel = disabledContext.withContext('span', 'label');

describe('Base UI Panda v2 composition', () => {
  it('merges recipe context defaults while forwarding native style-name collisions', () => {
    const ref = createRef<HTMLButtonElement>();
    const onClick = vi.fn();
    render(
      <actionContext.PropsProvider value={{ tone: 'quiet' }}>
        <Action translate="no" ref={ref} onClick={onClick}>
          Quiet
        </Action>
        <Action tone="loud" type="submit" css={{ translate: '1px' }}>
          Loud
        </Action>
      </actionContext.PropsProvider>,
    );

    const quiet = screen.getByRole('button', { name: 'Quiet' });
    const loud = screen.getByRole('button', { name: 'Loud' });
    expect(ref.current).toBe(quiet);
    expect(quiet.getAttribute('translate')).toBe('no');
    expect(quiet.getAttribute('type')).toBe('button');
    expect(loud.getAttribute('type')).toBe('submit');
    expect(quiet.className).toContain('op_0.5');
    expect(loud.className).toContain('op_1');
    expect(loud.className).toContain('translate_1px');
    expect(quiet.hasAttribute('tone')).toBe(false);
    expect(loud.hasAttribute('tone')).toBe(false);
    fireEvent.click(quiet);
    expect(onClick).toHaveBeenCalledOnce();
    expect('displayName' in Action && Action.displayName).toBe(
      'withContext(RenderButton)',
    );
  });

  it('forwards a colliding slot variant to Base UI while styling its slots', () => {
    const onClick = vi.fn();
    render(
      <DisabledButton disabled onClick={onClick}>
        <DisabledLabel>Unavailable</DisabledLabel>
      </DisabledButton>,
    );

    const button = screen.getByRole('button', { name: 'Unavailable' });
    expect((button as HTMLButtonElement).disabled).toBe(true);
    expect(button.hasAttribute('data-disabled')).toBe(true);
    expect(button.className).toContain('op_0.5');
    expect(screen.getByText('Unavailable').className).toContain('fw_bold');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('composes Button slots, styles and refs through the native render prop', () => {
    const ref = createRef<HTMLAnchorElement>();
    const onClick = vi.fn();
    render(
      <Button.Root
        render={<a href="#save" ref={ref} aria-label="Save" />}
        nativeButton={false}
        size="sm"
        variant="primary"
        padding="4"
        className="consumer-button"
        onClick={onClick}
      >
        <Button.Icon aria-hidden="true">+</Button.Icon>
        <Button.Label>Save</Button.Label>
      </Button.Root>,
    );

    const button = screen.getByRole('button', { name: 'Save' });
    expect(ref.current).toBe(button);
    expect(button.tagName).toBe('A');
    expect(button.classList.contains('consumer-button')).toBe(true);
    expect(button.className).toContain('Button__root--size_sm');
    expect(button.className).toContain('p_4');
    expect(screen.getByText('Save').className).toContain(
      'Button__label--size_sm',
    );
    expect(screen.getByText('+').getAttribute('data-slot')).toBe('icon');
    for (const prop of [
      'size',
      'variant',
      'padding',
      'nativeButton',
      'render',
    ]) {
      expect(button.hasAttribute(prop)).toBe(false);
    }
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('preserves Select values, slots and refs across a portal', async () => {
    const ref = createRef<HTMLDivElement>();
    const onValueChange = vi.fn();
    const { container } = render(
      <Select.Root defaultValue="serif" onValueChange={onValueChange}>
        <Select.Trigger aria-label="Font">
          <Select.Value />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner sideOffset={8} alignItemWithTrigger={false}>
            <Select.Popup ref={ref} className="consumer-popup" padding="4">
              <Select.List>
                <Select.Item value="serif">
                  <Select.ItemText>Serif</Select.ItemText>
                </Select.Item>
                <Select.Item value="sans">
                  <Select.ItemText>Sans</Select.ItemText>
                </Select.Item>
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>,
    );

    const trigger = screen.getByRole('combobox', { name: 'Font' });
    expect(trigger.className).toContain('Select__trigger');
    fireEvent.click(trigger);
    const list = await screen.findByRole('listbox');
    const popup = list.closest<HTMLElement>('[data-slot="content"]');
    if (!popup) throw new Error('Select.Popup must contain Select.List');
    expect(ref.current).toBe(popup);
    expect(container.contains(popup)).toBe(false);
    expect(popup.className).toContain('SelectDropdown__content');
    expect(popup.classList.contains('consumer-popup')).toBe(true);
    expect(popup.className).toContain('p_4');
    expect(popup.style.width).toBe('var(--anchor-width)');
    expect(popup.hasAttribute('padding')).toBe(false);
    const option = screen.getByRole('option', { name: 'Sans' });
    expect(option.className).toContain('SelectDropdown__item');
    fireEvent.pointerDown(option);
    fireEvent.click(option);
    await waitFor(() => expect(trigger.textContent).toBe('sans'));
    expect(onValueChange.mock.calls[0][0]).toBe('sans');
  });

  it('shares Dialog root variants with portalled slots and composes its trigger', async () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <Dialog.Root size="lg">
        <Dialog.Trigger>Open settings</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop data-testid="backdrop" />
          <Dialog.Positioner>
            <Dialog.Popup ref={ref} padding="4" className="consumer-dialog">
              <Dialog.Title>Settings</Dialog.Title>
              <Dialog.Description>Change your preferences</Dialog.Description>
              <Dialog.Close>Done</Dialog.Close>
            </Dialog.Popup>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>,
    );

    const trigger = screen.getByRole('button', { name: 'Open settings' });
    expect(trigger.className).toContain('Button__root');
    fireEvent.click(trigger);
    const popup = await screen.findByRole('dialog', { name: 'Settings' });
    expect(ref.current).toBe(popup);
    expect(container.contains(popup)).toBe(false);
    expect(popup.className).toContain('Dialog__content--size_lg');
    expect(popup.classList.contains('consumer-dialog')).toBe(true);
    expect(popup.className).toContain('p_4');
    expect(popup.getAttribute('data-slot')).toBe('content');
    expect(popup.hasAttribute('size')).toBe(false);
    expect(popup.hasAttribute('padding')).toBe(false);
    expect(screen.getByText('Change your preferences').id).toBe(
      popup.getAttribute('aria-describedby'),
    );
    expect(screen.getByTestId('backdrop').className).toContain('Backdrop');
    fireEvent.click(screen.getByRole('button', { name: 'Done' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });
});
