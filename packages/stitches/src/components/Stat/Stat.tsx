import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';

export type StatProps = SXProp;

const Stat = forwardRef<StatProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type StatLabelProps = SXProp;

const Label = forwardRef<StatLabelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type StatNumberProps = SXProp;

const Number = forwardRef<StatNumberProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type StatHelpTextProps = SXProp;

const HelpText = forwardRef<StatHelpTextProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Stat, { Label, Number, HelpText });
