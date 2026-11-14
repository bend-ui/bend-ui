'use client';
import { useId, useState } from 'react';
import {
  Badge,
  Checkbox,
  Field,
  Form,
  Input,
  Radio,
  RadioGroup,
  Separator,
  Switch,
  Textarea,
} from '@bend-ui/base-ui';

export function CoreFormsExample() {
  const formId = useId();
  const [version, reset] = useState(0);
  const [saved, setSaved] = useState(false);
  const [summary, setSummary] = useState('No preferences saved.');
  return (
    <section
      aria-label="Core forms reference"
      style={{
        width: '100%',
        maxWidth: 'min(30rem, calc(100vw - 2rem))',
        display: 'grid',
        gap: 16,
      }}
    >
      <Form.Root
        id={formId}
        key={version}
        onSubmit={(event) => {
          event.preventDefault();
          const values = new FormData(event.currentTarget);
          setSaved(true);
          setSummary(
            `Saved ${values.get('email')}; delivery ${values.get('delivery')}; reminders ${values.has('reminders') ? 'on' : 'off'}; updates ${values.has('updates') ? 'on' : 'off'}.`,
          );
        }}
        onReset={() => {
          reset((value) => value + 1);
          setSaved(false);
          setSummary('No preferences saved.');
        }}
        style={{ display: 'grid', gap: 16 }}
      >
        <Field name="email">
          <Field.Label>Email address</Field.Label>
          <Field.Description>Where we send your preferences.</Field.Description>
          <Input type="email" autoComplete="email" required />
          <Field.Error match="valueMissing">
            Enter your email address.
          </Field.Error>
          <Field.Error match="typeMismatch">
            Use a valid email address.
          </Field.Error>
        </Field>
        <Field name="notes">
          <Field.Label>Notes</Field.Label>
          <Field.Description>Enter one or more lines.</Field.Description>
          <Textarea rows={3} required />
          <Field.Error match="valueMissing">Add a note.</Field.Error>
        </Field>
        <Field name="delivery">
          <Field.Label>Delivery</Field.Label>
          <RadioGroup defaultValue="email">
            <Radio value="email">Email</Radio>
            <Radio value="post">Post</Radio>
            <Radio value="unavailable" disabled>
              Courier unavailable
            </Radio>
          </RadioGroup>
        </Field>
        <Checkbox name="reminders" value="yes">
          Send appointment reminders
        </Checkbox>
        <Switch name="updates" value="yes">
          Product updates
        </Switch>
        <Field disabled>
          <Field.Label>Account identifier</Field.Label>
          <Input defaultValue="Account managed by your team" />
        </Field>
        <Field>
          <Field.Label>Readonly reference</Field.Label>
          <Input defaultValue="REF-2048" readOnly />
        </Field>
        <Separator />
      </Form.Root>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <button
          form={formId}
          type="submit"
          style={{
            border: '1px solid currentColor',
            borderRadius: 6,
            padding: '8px 12px',
          }}
        >
          Save preferences
        </button>
        <button
          form={formId}
          type="reset"
          style={{
            border: '1px solid currentColor',
            borderRadius: 6,
            padding: '8px 12px',
          }}
        >
          Reset preferences
        </button>
      </div>
      <p role="status">
        <Badge tone={saved ? 'success' : 'neutral'}>
          {saved ? 'Saved' : 'Not saved'}
        </Badge>{' '}
        {summary}
      </p>
    </section>
  );
}
