import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import useStyles, { InputStylesParams } from './Input.styles';

export type InputProps = InputStylesParams & {
  icon?: React.ReactElement;
  iconEnd?: React.ReactElement;
} & SXProp;

const InvalidIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export const Input = forwardRef((props, ref) => {
  const { as = 'input', icon, iconEnd, isInvalid, ...rest } = props;
  const { styles } = useStyles({ withIcon: !!icon || isInvalid, isInvalid });
  return (
    <Box className={clsx(styles['wrapper'])}>
      {!!icon && <Box className={clsx(styles['icon'])}>{icon}</Box>}
      <Box ref={ref} as={as} className={clsx(styles['root'])} {...rest}></Box>
      {isInvalid && (
        <Box className={clsx(styles['icon'])}>
          <InvalidIcon />
        </Box>
      )}
      {iconEnd}
    </Box>
  );
});
