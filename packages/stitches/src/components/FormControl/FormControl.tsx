import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';

export type FormControlProps = DefaultComponentProps;

const FormControl = forwardRef<FormControlProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type FormControlLabelProps = DefaultComponentProps;

const Label = forwardRef<FormControlLabelProps, 'label'>((props, ref) => {
  const { children, as = 'label', ...rest } = props;
  return (
    <Box as={as} ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export type FormControlDescriptionProps = DefaultComponentProps;

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

export type FormControlErrorProps = DefaultComponentProps;

const Error = forwardRef<FormControlErrorProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(FormControl, { Label, Description, Error });
