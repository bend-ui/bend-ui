import { cx } from '@bend-ui/styled-system/css';
import { bend, type HTMLBendUIProps } from '@bend-ui/internal';
import { input, type InputVariantProps } from '@bend-ui/styled-system/recipes';
import type { Assign } from '@bend-ui/styled-system/types';
import type { ReactNode } from 'react';

export type InputRootProps = Assign<HTMLBendUIProps<'div'>, InputVariantProps>;

const InputRoot = (props: InputRootProps) => {
  const [variantProps, elementProps] = input.splitVariantProps(props);
  return (
    <bend.div
      data-part="root"
      {...elementProps}
      className={cx('group', input(variantProps), elementProps.className)}
    />
  );
};

export type InputWrapperProps = HTMLBendUIProps<'label'>;
const InputWrapper = (props: InputWrapperProps) => (
  <bend.label data-part="wrapper" {...props} />
);

export type InputIconProps = HTMLBendUIProps<'div'>;
const InputIcon = (props: InputIconProps) => (
  <bend.div data-part="icon" asChild {...props} />
);

export type InputInputProps = HTMLBendUIProps<'input'>;
const InputInput = (props: InputInputProps) => (
  <bend.input
    data-part="input"
    {...props}
    className={cx('peer', props.className)}
  />
);

export type InputElementProps = HTMLBendUIProps<'div'>;
const InputElement = (props: InputElementProps) => (
  <bend.div data-part="element" {...props} />
);

export type InputAddonProps = HTMLBendUIProps<'div'>;
const InputAddon = (props: InputAddonProps) => (
  <bend.div data-part="addon" {...props} />
);

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
