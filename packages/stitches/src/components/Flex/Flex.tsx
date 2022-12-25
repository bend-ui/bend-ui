import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';

export type FlexProps = DefaultComponentProps;

export const Flex = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} sx={{ display: 'flex' }} {...rest}>
      {children}
    </Box>
  );
});
