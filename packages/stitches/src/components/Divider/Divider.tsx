import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
} & SXProp;

const Divider = forwardRef<DividerProps, 'hr'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box as="hr" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Divider);
