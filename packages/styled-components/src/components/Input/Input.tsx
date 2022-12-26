import { useRef } from 'react';
import { forwardRef } from '@particles/primitives';
import { system, SystemProps } from '../../system';
import useStyles from './Input.styles';

export type InputProps = {
  variant?: 'solid' | 'outline';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
} & SystemProps;

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const { as = 'input', prefix, suffix, ...rest } = props;
  const { styles } = useStyles();

  const inputRef = useRef<HTMLInputElement>();

  const handleWrapperClick = () => {
    inputRef.current.focus();
  };

  return (
    <system.div sx={styles.wrapper} onClick={handleWrapperClick}>
      {prefix && (
        <system.span onClick={handleWrapperClick} sx={styles.prefix}>
          {prefix}
        </system.span>
      )}
      <system.input ref={inputRef} as={as} sx={styles.input} {...rest} />
      {suffix && (
        <system.span onClick={handleWrapperClick} sx={styles.suffix}>
          {suffix}
        </system.span>
      )}
    </system.div>
  );
});
