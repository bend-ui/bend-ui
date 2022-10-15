import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import useStyles, { TextStylesParams } from './Text.styles';

export type TextProps = TextStylesParams & SXProp;

export const Text = forwardRef<TextProps, 'p'>((props, ref) => {
  const {
    children,
    as = 'p',
    variant = 'body',
    align = 'left',
    fontWeight = null,
    ...rest
  } = props;
  const { styles } = useStyles({ variant, align, fontWeight });
  return (
    <Box ref={ref} as={as} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});
