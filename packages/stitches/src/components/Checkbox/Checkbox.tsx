import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import React from 'react';
import { SXProp } from '../../styles';
import { Media } from '../Media';
import { Text } from '../Text';
import useStyles from './Checkbox.styles';
import { useCheckbox } from './useCheckbox';

export type CheckboxProps = {
  children?: React.ReactNode;
  description?: React.ReactNode;
} & SXProp;

const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { children, description, ...rest } = props;
  const { styles } = useStyles();

  const { getInputProps, getControlProps } = useCheckbox();
  return (
    <Media as="label" {...rest}>
      <Media.Image>
        <input ref={ref} type="checkbox" name="" id="" {...getInputProps()} />
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
      </Media.Image>
      <Media.Content>
        <Text as="span" className={clsx(styles.label)}>
          {children}
        </Text>
        {description && (
          <Text as="span" className={clsx(styles.description)}>
            {description}
          </Text>
        )}
      </Media.Content>
    </Media>
  );
});

Checkbox.displayName = 'Checkbox';

export default Object.assign(Checkbox);
