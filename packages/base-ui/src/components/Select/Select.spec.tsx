import { expect } from 'vitest';
import { Select, type SelectProps } from './Select';

describe('Select public props', () => {
  it.each(['sm', 'md', 'lg'] as const)(
    'accepts the %s recipe size on the convenience component',
    (size) => {
      const props: Pick<SelectProps<string>, 'size'> = { size };

      expect(props.size).toBe(size);
    },
  );
});

describe('Select compound API', () => {
  it('exposes recipe size props on Root and the control slot', () => {
    const props: Parameters<typeof Select.Root>[0] = { size: 'sm' };

    expect(props.size).toBe('sm');
    expect(Select.Control).toBeDefined();
  });
});
