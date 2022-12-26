import {
  Checkbox as CheckboxPrimitive,
  CheckboxProps,
  forwardRef,
  useCheckbox,
} from '@particles/primitives';
import { FiCheck } from 'react-icons/fi';
import { system } from '../../system';
import useStyles from './Checkbox.styles';

export const Checkbox = forwardRef<CheckboxProps, 'div'>((props, ref) => {
  const { getLabelProps, getIndicatorProps, getInputProps, isChecked } =
    useCheckbox({
      defaultValue: props.defaultChecked,
    });

  const { styles } = useStyles();

  return (
    <system.div ref={ref} sx={styles.root} {...getInputProps()} {...props}>
      <system.div
        as={CheckboxPrimitive.Indicator}
        sx={styles.indicator}
        {...getIndicatorProps()}
      >
        {isChecked && <FiCheck />}
      </system.div>
      <system.label as={CheckboxPrimitive.Label} {...getLabelProps()}>
        Label
      </system.label>
    </system.div>
  );
});

Checkbox.displayName = 'Checkbox';
