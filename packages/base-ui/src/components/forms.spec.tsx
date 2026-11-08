import { createRef, useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Checkbox } from './Checkbox';
import { Radio, RadioGroup } from './Radio';
import { Switch } from './Switch';
import { Field } from './Field';
import { Badge } from './Badge';
import { Separator } from './Separator';

describe('core forms and feedback', () => {
  it('links labels, descriptions and errors to the real input and textarea controls', async () => {
    const inputRef = createRef<HTMLInputElement>();
    const textareaRef = createRef<HTMLTextAreaElement>();
    const change = vi.fn();
    render(
      <>
        <Field invalid name="email">
          <Field.Label>Email</Field.Label>
          <Field.Description>Work address</Field.Description>
          <Field.Control ref={inputRef} />
          <Field.Error match={true}>Enter a work address</Field.Error>
        </Field>
        <Field invalid name="notes">
          <Field.Label>Notes</Field.Label>
          <Field.Description>Include details</Field.Description>
          <Textarea ref={textareaRef} rows={5} onChange={change} />
          <Field.Error match={true}>Add more detail</Field.Error>
        </Field>
      </>,
    );
    for (const [name, description, error] of [
      ['Email', 'Work address', 'Enter a work address'],
      ['Notes', 'Include details', 'Add more detail'],
    ]) {
      const control = screen.getByRole('textbox', { name });
      expect(control.getAttribute('aria-invalid')).toBe('true');
      const ids = control.getAttribute('aria-describedby')?.split(' ') ?? [];
      expect(
        ids.map((id) => document.getElementById(id)?.textContent).join(' '),
      ).toContain(description);
      expect(
        ids.map((id) => document.getElementById(id)?.textContent).join(' '),
      ).toContain(error);
    }
    const notes = screen.getByRole('textbox', { name: 'Notes' });
    expect(notes.tagName).toBe('TEXTAREA');
    expect(notes.getAttribute('rows')).toBe('5');
    expect(textareaRef.current).toBe(notes);
    expect(inputRef.current).toBe(
      screen.getByRole('textbox', { name: 'Email' }),
    );
    fireEvent.change(notes, { target: { value: 'First line\nSecond line' } });
    expect(change).toHaveBeenCalledOnce();
    expect(textareaRef.current?.value).toBe('First line\nSecond line');
    await waitFor(() => expect(notes.getAttribute('data-dirty')).toBe(''));
  });

  it('preserves controlled multiline value, native readOnly/disabled and native textarea event typing', () => {
    const update = vi.fn();
    const { rerender } = render(
      <Textarea
        aria-label="Notes"
        value={'Line one\nLine two'}
        readOnly
        onChange={(event) => update(event.currentTarget.rows)}
      />,
    );
    const notes = screen.getByRole('textbox', {
      name: 'Notes',
    }) as HTMLTextAreaElement;
    expect(notes.value).toBe('Line one\nLine two');
    expect(notes.readOnly).toBe(true);
    rerender(
      <Textarea
        aria-label="Notes"
        value="Updated"
        disabled
        onChange={(event) => update(event.currentTarget.rows)}
      />,
    );
    expect(notes.value).toBe('Updated');
    expect(notes.disabled).toBe(true);
  });

  it('starts unchecked, submits native values and resets uncontrolled controls by remounting', async () => {
    function Example() {
      const [version, reset] = useState(0);
      return (
        <form key={version} onReset={() => reset((value) => value + 1)}>
          <Checkbox name="agree" value="yes">
            Agree
          </Checkbox>
          <RadioGroup
            name="delivery"
            defaultValue="email"
            aria-label="Delivery"
          >
            <Radio value="email">Email</Radio>
            <Radio value="post">Post</Radio>
          </RadioGroup>
          <Switch name="updates" value="enabled">
            Updates
          </Switch>
        </form>
      );
    }
    const { container } = render(<Example />);
    const form = container.querySelector('form')!;
    const checkbox = screen.getByRole('checkbox', { name: 'Agree' });
    const switchControl = screen.getByRole('switch', { name: 'Updates' });
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    expect(switchControl.getAttribute('aria-checked')).toBe('false');
    expect(Object.fromEntries(new FormData(form))).toEqual({
      delivery: 'email',
    });
    fireEvent.click(checkbox);
    fireEvent.click(switchControl);
    fireEvent.click(screen.getByRole('radio', { name: 'Post' }));
    expect(Object.fromEntries(new FormData(form))).toEqual({
      agree: 'yes',
      delivery: 'post',
      updates: 'enabled',
    });
    fireEvent.reset(form);
    await waitFor(() =>
      expect(
        screen
          .getByRole('checkbox', { name: 'Agree' })
          .getAttribute('aria-checked'),
      ).toBe('false'),
    );
    expect(
      screen
        .getByRole('switch', { name: 'Updates' })
        .getAttribute('aria-checked'),
    ).toBe('false');
    expect(
      screen.getByRole('radio', { name: 'Email' }).getAttribute('aria-checked'),
    ).toBe('true');
  });

  it('keeps disabled and readonly choices unchanged and exposes mixed checkbox state', () => {
    render(
      <>
        <Checkbox disabled>Disabled check</Checkbox>
        <Checkbox indeterminate>Mixed check</Checkbox>
        <Switch disabled>Disabled switch</Switch>
        <Switch readOnly>Readonly switch</Switch>
        <RadioGroup disabled defaultValue="a" aria-label="Disabled choices">
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </RadioGroup>
      </>,
    );
    for (const [role, name] of [
      ['checkbox', 'Disabled check'],
      ['switch', 'Disabled switch'],
      ['switch', 'Readonly switch'],
      ['radio', 'B'],
    ]) {
      const control = screen.getByRole(role, { name });
      fireEvent.click(control);
      expect(control.getAttribute('aria-checked')).toBe('false');
    }
    expect(
      screen
        .getByRole('checkbox', { name: 'Mixed check' })
        .getAttribute('aria-checked'),
    ).toBe('mixed');
  });

  it('keeps individual radio names distinct from the surrounding field label', () => {
    render(
      <Field name="delivery">
        <Field.Label>Delivery</Field.Label>
        <RadioGroup defaultValue="email">
          <Radio value="email">
            <strong>Email</strong>
          </Radio>
          <Radio value="post" aria-label="Postal mail">
            Post
          </Radio>
          <Radio value="other" aria-labelledby="other-label">
            Other
          </Radio>
        </RadioGroup>
        <span id="other-label">Other delivery</span>
      </Field>,
    );
    expect(screen.getByRole('radiogroup', { name: 'Delivery' })).toBeTruthy();
    expect(screen.getByRole('radio', { name: 'Email' })).toBeTruthy();
    expect(screen.getByRole('radio', { name: 'Postal mail' })).toBeTruthy();
    expect(screen.getByRole('radio', { name: 'Other delivery' })).toBeTruthy();
  });

  it('passes shared sizes through compound contexts without leaking variants to native controls', () => {
    render(
      <>
        <Input size="sm" aria-label="Small input" />
        <Textarea size="lg" aria-label="Large notes" />
        <Checkbox size="sm">Small check</Checkbox>
        <RadioGroup size="lg" aria-label="Large choices">
          <Radio value="one">One</Radio>
        </RadioGroup>
        <Switch size="lg">Large switch</Switch>
      </>,
    );
    expect(
      screen
        .getByRole('textbox', { name: 'Small input' })
        .closest('.Input__root')?.className,
    ).toContain('Input__root--size_sm');
    expect(
      screen.getByRole('textbox', { name: 'Large notes' }).className,
    ).toContain('Textarea__field--size_lg');
    expect(
      screen.getByRole('checkbox', { name: 'Small check' }).className,
    ).toContain('Checkbox__control--size_sm');
    expect(screen.getByRole('radio', { name: 'One' }).className).toContain(
      'RadioGroup__itemControl--size_lg',
    );
    expect(
      screen.getByRole('switch', { name: 'Large switch' }).className,
    ).toContain('Switch__control--size_lg');
    expect(
      screen.getByRole('textbox', { name: 'Large notes' }).getAttribute('size'),
    ).toBeNull();
  });

  it('renders feedback content and preserves separator orientation/ref semantics', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <>
        <Badge tone="success" variant="outline">
          Saved
        </Badge>
        <Separator ref={ref} orientation="vertical" />
      </>,
    );
    expect(screen.getByText('Saved').className).toContain(
      'Badge__root--palette_success',
    );
    expect(screen.getByRole('separator').getAttribute('aria-orientation')).toBe(
      'vertical',
    );
    expect(ref.current).toBe(screen.getByRole('separator'));
  });
});
