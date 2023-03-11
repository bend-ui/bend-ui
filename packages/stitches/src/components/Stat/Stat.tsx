import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import type { DefaultComponentProps } from '../../styles';

export type StatProps = DefaultComponentProps;

const Stat = forwardRef<StatProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type StatLabelProps = DefaultComponentProps;

const Label = forwardRef<StatLabelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type StatNumberProps = DefaultComponentProps;

const Number = forwardRef<StatNumberProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type StatHelpTextProps = DefaultComponentProps;

const HelpText = forwardRef<StatHelpTextProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Stat, { Label, Number, HelpText });
