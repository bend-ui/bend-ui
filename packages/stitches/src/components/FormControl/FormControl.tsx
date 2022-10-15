import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';

export type FormControlProps = SXProp;

const FormControl = forwardRef<FormControlProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type FormControlLabelProps = SXProp;

const Label = forwardRef<FormControlLabelProps, 'label'>((props, ref) => {
  const { children, as = 'label', ...rest } = props;
  return (
    <Box as={as} ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type FormControlDescriptionProps = SXProp;

const Description = forwardRef<FormControlDescriptionProps, 'div'>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <Box ref={ref} {...rest}>
        {children}
      </Box>
    );
  }
);

export type FormControlErrorProps = SXProp;

const Error = forwardRef<FormControlErrorProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(FormControl, { Label, Description, Error });
