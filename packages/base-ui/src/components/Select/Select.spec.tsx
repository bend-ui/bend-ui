import { expect } from 'vitest';
import type { SelectProps } from './Select';

describe('Select public props', () => {
  it.each(['sm', 'md', 'lg'] as const)(
    'accepts the %s recipe size on the convenience component',
    (size) => {
      const props: Pick<SelectProps<string>, 'size'> = { size };

      expect(props.size).toBe(size);
    },
  );
});
