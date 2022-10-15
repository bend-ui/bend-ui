import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Text.styles';

export type TextProps = DefaultComponentProps & {
  variant?:
    | 'display'
    | 'headline'
    | 'title'
    | 'subtitle'
    | 'lead'
    | 'body'
    | 'small'
    | 'caption';
};

const Text = forwardRef<TextProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'div',
    className,
    variant = 'body',
    ...rest
  } = useDefaultProps('Text', props);

  const { styles } = useStyles({ variant }, { name: 'Text' });

  return (
    <Box as={as} ref={ref} className={clsx(styles.root, className)} {...rest}>
      {children}
    </Box>
  );
});

Text.displayName = 'Text';

export default createComponent(Text);
