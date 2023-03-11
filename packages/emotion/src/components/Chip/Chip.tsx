import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import type { DefaultComponentProps } from '../../types';

type ChipProps = DefaultComponentProps;

const Chip = forwardRef<ChipProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    ...rest
  } = useDefaultProps('Chip', props);
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default Chip;
