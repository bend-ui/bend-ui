import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../../Box';
import useStyles from './SelectOption.styles';

interface SelectOption {
  children: React.ReactNode;
}

const Option = forwardRef<SelectOption, 'button'>((props, ref) => {
  const { children, as = 'button', ...rest } = props;
  const { styles } = useStyles();

  return (
    <Box ref={ref} as={as} className={clsx(styles.option)} {...rest}>
      {children}
    </Box>
  );
});

Option.displayName = 'Select.Option';

export default Option;
