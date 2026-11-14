import type { ComponentProps } from 'react';
import type { Button, SelectProps } from '@bend-ui/base-ui';

const sizes = ['sm', 'md', 'lg'] as const satisfies readonly NonNullable<
  ComponentProps<typeof Button>['size']
>[];
const values = ['sans', 'serif', 'mono'] as const;
type ButtonState = {
  kind: 'button';
  label: string;
  size: (typeof sizes)[number];
  disabled: boolean;
};
type SelectState = {
  kind: 'select';
  value: (typeof values)[number];
  size: (typeof sizes)[number];
  disabled: boolean;
};
export type { ButtonState, SelectState };
export type PlaygroundState = ButtonState | SelectState;
type Field<S> = {
  [K in Exclude<keyof S, 'kind'>]: S[K] extends boolean
    ? { key: K; label: string; type: 'boolean' }
    : S[K] extends string
      ?
          | { key: K; label: string; type: 'select'; options: readonly S[K][] }
          | { key: K; label: string; type: 'text'; maxLength: number }
      : never;
}[Exclude<keyof S, 'kind'>];
type Schema<S> = { defaults: S; fields: readonly Field<S>[] };
type SelectAdapterProps = Pick<
  SelectProps<SelectState['value']>,
  'value' | 'size' | 'disabled'
>;
const selectTypeCheck = (state: SelectState): SelectAdapterProps => state;
void selectTypeCheck;
export const schemas = {
  button: {
    defaults: {
      kind: 'button',
      label: 'Save changes',
      size: 'md',
      disabled: false,
    },
    fields: [
      { key: 'label', label: 'Label', type: 'text', maxLength: 120 },
      { key: 'size', label: 'Size', type: 'select', options: sizes },
      { key: 'disabled', label: 'Disabled', type: 'boolean' },
    ],
  },
  select: {
    defaults: { kind: 'select', value: 'sans', size: 'md', disabled: false },
    fields: [
      { key: 'value', label: 'Value', type: 'select', options: values },
      { key: 'size', label: 'Size', type: 'select', options: sizes },
      { key: 'disabled', label: 'Disabled', type: 'boolean' },
    ],
  },
} as const satisfies {
  button: Schema<ButtonState>;
  select: Schema<SelectState>;
};
export function schemaFor(id: string) {
  return id === 'button'
    ? schemas.button
    : id === 'select'
      ? schemas.select
      : null;
}
export function initialState(id: string): PlaygroundState | null {
  const schema = schemaFor(id);
  return schema ? { ...schema.defaults } : null;
}
export function parseState(id: string, value: unknown): PlaygroundState | null {
  const schema = schemaFor(id);
  if (!schema || !value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  if (input.kind !== id) return null;
  const output: Record<string, unknown> = { kind: id };
  for (const field of schema.fields) {
    const v = input[field.key];
    if (
      field.type === 'boolean'
        ? typeof v !== 'boolean'
        : field.type === 'text'
          ? typeof v !== 'string' || v.length > field.maxLength
          : typeof v !== 'string' ||
            !(field.options as readonly string[]).includes(v)
    )
      return null;
    output[field.key] = v;
  }
  return output as PlaygroundState;
}
function replaceMarked(
  source: string,
  name: string,
  replacement: string,
): string {
  const start = `/* playground:${name}:start */`;
  const end = `/* playground:${name}:end */`;
  const a = source.indexOf(start),
    b = source.indexOf(end);
  if (
    a < 0 ||
    b < a ||
    source.indexOf(start, a + start.length) !== -1 ||
    source.indexOf(end, b + end.length) !== -1
  )
    throw new Error(`Invalid playground ${name} markers`);
  return source.slice(0, a) + replacement + source.slice(b + end.length);
}
export function usage(state: PlaygroundState, source: string): string {
  const imports =
    state.kind === 'select' ? "import { useState } from 'react';" : '';
  const setup =
    state.kind === 'button'
      ? `export default function ButtonExample() {\n  const state = ${JSON.stringify(state)} as const;`
      : `export default function SelectExample() {\n  const [value, setValue] = useState<'sans' | 'serif' | 'mono'>(${JSON.stringify(state.value)});\n  const state = { size: ${JSON.stringify(state.size)}, disabled: ${JSON.stringify(state.disabled)}, value } as const;\n  const onValueChange = setValue;`;
  return replaceMarked(
    replaceMarked(source, 'imports', imports),
    'setup',
    setup,
  );
}
