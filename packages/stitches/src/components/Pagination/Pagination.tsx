import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import type { DefaultComponentProps } from '../../styles';

export type PaginationProps = DefaultComponentProps;

const Pagination = forwardRef<PaginationProps, 'nav'>((props, ref) => {
  const { children, as = 'nav', ...rest } = props;
  return (
    <Box ref={ref} as={as} {...rest}>
      {children}
      <button>&lt;</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&gt;</button>
    </Box>
  );
});

export default Object.assign(Pagination, {});
