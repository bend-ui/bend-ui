import { input } from '@particles/styled-system/recipes';
import type { InputVariantProps } from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';
import { HTMLParticlesProps, particles } from '../factory';
import { Assign } from '@particles/styled-system/types';
import { cx } from '@particles/styled-system/css';

export type InputRootProps = HTMLParticlesProps<'input'> & InputVariantProps;

const InputRoot = (props: InputRootProps) => {
  const { ref, ...rest } = props;
  const [variantProps, elementProps] = input.splitVariantProps(rest);
  const classes = input(variantProps);
  return (
    <particles.div
      ref={ref}
      data-part="root"
      {...elementProps}
      className={cx('group', classes, elementProps.className)}
    />
  );
};

export type InputWrapperProps = HTMLParticlesProps<'label'>;

const InputWrapper = (props: InputWrapperProps) => {
  const { ref, ...rest } = props;
  return <particles.label ref={ref} data-part="wrapper" {...rest} />;
};

export type InputIconProps = HTMLParticlesProps<'div'>;

const InputIcon = (props: InputIconProps) => {
  const { ref, ...rest } = props;
  return <particles.div ref={ref} data-part="icon" asChild {...rest} />;
};

export type InputInputProps = HTMLParticlesProps<'input'>;

const InputInput = (props: InputInputProps) => {
  const { ref, className, ...rest } = props;
  return (
    <particles.input
      ref={ref}
      data-part="input"
      className={cx('peer', className)}
      {...rest}
    />
  );
};

export type InputElementProps = HTMLParticlesProps<'div'>;

const InputElement = (props: InputElementProps) => {
  const { ref, ...rest } = props;
  return <particles.div ref={ref} data-part="element" {...rest} />;
};

export type InputAddonProps = HTMLParticlesProps<'div'>;

const InputAddon = (props: InputAddonProps) => {
  const { ref, ...rest } = props;
  return <particles.div ref={ref} data-part="addon" {...rest} />;
};

export interface InputProps
  extends Assign<HTMLParticlesProps<'input'>, InputVariantProps> {
  icon?: ReactNode;
  iconEnd?: ReactNode;
  elementStart?: ReactNode;
  elementEnd?: ReactNode;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
}

const Component = (props: InputProps) => {
  const {
    ref,
    addonStart,
    addonEnd,
    icon,
    iconEnd,
    elementStart,
    elementEnd,
    ...rest
  } = props;
  return (
    <InputRoot {...rest}>
      {addonStart && <InputAddon>{addonStart}</InputAddon>}
      <InputWrapper>
        {icon && <InputIcon>{icon}</InputIcon>}
        {elementStart && <InputElement>{elementStart}</InputElement>}
        <InputInput ref={ref} />
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
