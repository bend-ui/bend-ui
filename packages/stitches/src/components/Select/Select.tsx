import { Children, cloneElement, isValidElement } from 'react';
import clsx from 'clsx';
import { useDisclosure, useSelect } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import { Panel } from '../Panel';
import useStyles from './Select.styles';
import { Option } from './SelectOption';

export type SelectProps = {
  children: React.ReactNode;
  placeholder: string;
  onChange?(value: string): void;
} & SXProp;

const Select = (props: SelectProps) => {
  const { children, placeholder } = props;
  const { styles } = useStyles();
  const { isOpen, toggle } = useDisclosure();
  const { getTriggerProps, getListboxProps, getOptionProps } = useSelect({
    isOpen,
    onOpenChange: toggle,
    offset: 4,
  });
  return (
    <>
      <Box as="button" className={clsx(styles.trigger)} {...getTriggerProps()}>
        {placeholder}
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </Box>
      {isOpen && (
        <Panel className={clsx(styles.dropdown)} {...getListboxProps()}>
          {Children.toArray(children).map(
            (child) =>
              isValidElement(child) &&
              cloneElement(
                child,
                getOptionProps({
                  onClick: () => {
                    console.log('item clicked');
                    toggle();
                  },
                })
              )
          )}
        </Panel>
      )}
    </>
  );
};

Select.displayName = 'Select';

type SelectOptionGroup = {
  children: React.ReactNode;
};

const OptionGroup = (props: SelectOptionGroup) => {
  const { children } = props;
  return <Box>{children}</Box>;
};

OptionGroup.displayName = 'Select.OptionGroup';

export default Object.assign(Select, { Option, OptionGroup });
