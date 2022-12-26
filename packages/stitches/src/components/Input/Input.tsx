import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { DefaultComponentProps, useDefaultProps } from '../../styles';
import { Box } from '../Box';
import useStyles, { InputStylesParams } from './Input.styles';

export type InputProps = DefaultComponentProps &
  InputStylesParams & {
    icon?: React.ReactElement;
    iconEnd?: React.ReactElement;
    labelStart?: string;
    labelEnd?: string;
    contentStart?: ReactNode;
    contentEnd?: ReactNode;
  };

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

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    as = 'input',
    icon,
    iconEnd,
    isInvalid,
    variant,
    size,
    isRounded,
    labelStart,
    labelEnd,
    contentStart,
    contentEnd,
    ...rest
  } = useDefaultProps('Input', props);

  const { styles } = useStyles({
    withIcon: !!icon || isInvalid,
    isInvalid,
    variant,
    size,
    isRounded,
  });

  return (
    <Box className={clsx(styles['wrapper'])}>
      {!!icon && <Box className={clsx(styles['icon'])}>{icon}</Box>}
      {!!labelStart && <>{labelStart}</>}
      {!!contentStart && <>{contentStart}</>}
      <Box ref={ref} as={as} className={clsx(styles['root'])} {...rest}></Box>
      {isInvalid && (
        <Box className={clsx(styles['icon'])}>
          <InvalidIcon />
        </Box>
      )}
      {!!contentEnd && <>{contentEnd}</>}
      {!!labelEnd && <>{labelEnd}</>}
      {iconEnd}
    </Box>
  );
});
