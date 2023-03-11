import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import { Button, ButtonGroup } from '../Button';
import { Level } from '../Level';
import { Text } from '../Text';
import type { DefaultComponentProps } from '../../types';

type PaginationProps = DefaultComponentProps;

const Pagination = forwardRef<PaginationProps, 'div'>((props, ref) => {
  const { as: Component = 'div', ...rest } = useDefaultProps(
    'Pagination',
    props
  );
  return (
    <Component ref={ref} {...rest}>
      <Level>
        <ButtonGroup>
          <Button palette="neutral">Previous</Button>
          <Button palette="neutral">1</Button>
          <Button palette="neutral">2</Button>
          <Button palette="neutral">3</Button>
          <Button palette="neutral">...</Button>
          <Button palette="neutral">12</Button>
          <Button palette="neutral">13</Button>
          <Button palette="neutral">14</Button>
          <Button palette="neutral">Next</Button>
        </ButtonGroup>
        <Box>
          <Text>Page 1 of 10</Text>
        </Box>
      </Level>
    </Component>
  );
});

export default Pagination;
