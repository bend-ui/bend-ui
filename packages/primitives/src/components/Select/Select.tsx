import {
  createComponent,
  createContext,
  forwardRef,
  mergeRefs,
} from '../../utils';
import { useDisclosure } from '../../hooks';
import { useSelect } from './useSelect';
import type { ReactNode } from 'react';

export type SelectContextProps = ReturnType<typeof useSelect>;

export const [SelectProvider, useSelectContext] =
  createContext<SelectContextProps>('Select');

export interface SelectTargetProps {
  children?: ReactNode;
}

const Target = forwardRef<SelectTargetProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;
  const { reference, getTargetProps } = useSelectContext();
  return (
    <Component
      ref={mergeRefs([ref, reference])}
      {...getTargetProps()}
      {...rest}
    >
      {children}
    </Component>
  );
});

export interface SelectContentProps {
  children?: ReactNode;
}

const Content = forwardRef<SelectContentProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const { floating, isOpen } = useSelectContext();

  if (!isOpen) {
    return null;
  }

  return (
    <Component ref={mergeRefs([ref, floating])} {...rest}>
      {children}
    </Component>
  );
});

export interface SelectItemProps {
  children?: ReactNode;
}

const Item = forwardRef<SelectItemProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface SelectRootProps {
  children?: ReactNode;
}

const Root = forwardRef<SelectRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const { isOpen, toggle } = useDisclosure();
  const context = useSelect({ isOpen, onOpenChange: toggle });
  return (
    <SelectProvider value={context}>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </SelectProvider>
  );
});

export default createComponent(Root, { Root, Target, Content, Item }, 'Select');
