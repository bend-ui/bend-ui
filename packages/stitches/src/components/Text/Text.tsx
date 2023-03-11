import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import useStyles from './Text.styles';
import type { DefaultComponentProps } from '../../styles';
import type { TextStylesParams } from './Text.styles';

export type TextProps = TextStylesParams & DefaultComponentProps;

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
