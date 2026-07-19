import { bend, type HTMLBendUIProps } from '@bend-ui/core';
import { cx } from '@bend-ui/styled-system/css';
import { input, type InputVariantProps } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import type { Assign } from '@bend-ui/styled-system/types';
import { forwardRef, type ReactNode } from 'react';

const { withProvider, withContext } = createStyleContext(input);

export type InputRootProps = Assign<HTMLBendUIProps<'div'>, InputVariantProps>;

const StyledInputRoot = withProvider(bend.div, 'root', {
  defaultProps: { 'data-part': 'root' },
});
const InputRoot = forwardRef<HTMLDivElement, InputRootProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <StyledInputRoot
      {...rest}
      className={cx('group', className)}
      ref={ref}
    />
  );
});

export type InputWrapperProps = HTMLBendUIProps<'label'>;
const InputWrapper = withContext(bend.label, 'wrapper', {
  defaultProps: { 'data-part': 'wrapper' },
});

export type InputIconProps = HTMLBendUIProps<'div'>;
const InputIcon = withContext(bend.div, 'icon', {
  defaultProps: { 'data-part': 'icon', asChild: true },
});

export type InputInputProps = HTMLBendUIProps<'input'>;
const StyledInput = withContext(bend.input, 'input', {
  defaultProps: { 'data-part': 'input' },
});
const InputInput = forwardRef<HTMLInputElement, InputInputProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <StyledInput {...rest} className={cx('peer', className)} ref={ref} />
  );
});

export type InputElementProps = HTMLBendUIProps<'div'>;
const InputElement = withContext(bend.div, 'element', {
  defaultProps: { 'data-part': 'element' },
});

export type InputAddonProps = HTMLBendUIProps<'div'>;
const InputAddon = withContext(bend.div, 'addon', {
  defaultProps: { 'data-part': 'addon' },
});

export interface InputOwnProps {
  icon?: ReactNode;
  iconEnd?: ReactNode;
  elementStart?: ReactNode;
  elementEnd?: ReactNode;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
}

export type InputProps = Assign<
  InputInputProps,
  InputVariantProps & InputOwnProps
>;

const Component = (props: InputProps) => {
  const {
    addonStart,
    addonEnd,
    icon,
    iconEnd,
    elementStart,
    elementEnd,
    size,
    variant,
    ...rest
  } = props;
  return (
    <InputRoot size={size} variant={variant}>
      {addonStart && <InputAddon>{addonStart}</InputAddon>}
      <InputWrapper>
        {icon && <InputIcon>{icon}</InputIcon>}
        {elementStart && <InputElement>{elementStart}</InputElement>}
        <InputInput {...rest} />
        {elementEnd && <InputElement>{elementEnd}</InputElement>}
        {iconEnd && <InputIcon>{iconEnd}</InputIcon>}
      </InputWrapper>
      {addonEnd && <InputAddon>{addonEnd}</InputAddon>}
    </InputRoot>
  );
};

Component.displayName = 'Input';

export const Input = Object.assign(Component, {
  Root: InputRoot,
  Wrapper: InputWrapper,
  Icon: InputIcon,
  Input: InputInput,
  Element: InputElement,
  Addon: InputAddon,
});
