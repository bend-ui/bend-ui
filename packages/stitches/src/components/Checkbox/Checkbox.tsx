import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Media } from '../Media';
import { Text } from '../Text';
import { Box } from '../Box';
import { Group } from '../Group';
import { useCheckbox } from './useCheckbox';
import useStyles from './Checkbox.styles';

export type CheckboxProps = {
  children?: React.ReactNode;
  description?: React.ReactNode;
} & DefaultComponentProps;

const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { children, as = 'input', description, ...rest } = props;
  const { styles } = useStyles();

  const { getInputProps, getControlProps } = useCheckbox();
  return (
    <Group {...rest}>
      <Box
        as={as}
        ref={ref}
        type="checkbox"
        name=""
        id="checkbox-id"
        {...getInputProps()}
      />
      <span className={clsx(styles['control'])} {...getControlProps()}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          height="0.75em"
          width="0.75em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <label htmlFor="checkbox-id">
        <Text as="span" className={clsx(styles.label)}>
          {children}
        </Text>
        {description && (
          <Text as="span" className={clsx(styles.description)}>
            {description}
          </Text>
        )}
      </label>
    </Group>
  );
});

Checkbox.displayName = 'Checkbox';

export default Object.assign(Checkbox);
