import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import type { DefaultComponentProps } from '../../styles';

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
} & DefaultComponentProps;

const Divider = forwardRef<DividerProps, 'hr'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box as="hr" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Divider);
