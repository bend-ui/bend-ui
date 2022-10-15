import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { SXProp, TextStyles } from '../../styles';
import { Box } from '../Box';
import useStyles from './Heading.styles';

export type HeadingProps = {
  variant?: TextStyles;
  align?: 'left' | 'center' | 'right';
} & SXProp;

export const Heading = forwardRef<HeadingProps, 'h1'>((props, ref) => {
  const {
    children,
    as = 'h2',
    variant = 'title',
    align = 'left',
    ...rest
  } = props;
  const { styles } = useStyles({ variant, align });
  return (
    <Box ref={ref} as={as} className={clsx(styles['root'])} {...rest}>
      {children}
    </Box>
  );
});
