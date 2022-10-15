import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';

export type FlexProps = SXProp;

export const Flex = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} sx={{ display: 'flex' }} {...rest}>
      {children}
    </Box>
  );
});
