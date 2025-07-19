import { input } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { InputVariantProps } from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';
import { HTMLParticlesProps, particles } from '../factory';
import { Assign } from '@particles/styled-system/types';
import { cx } from '@particles/styled-system/css';

export type InputRootProps = HTMLParticlesProps<'input'> & InputVariantProps;

const InputRoot = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [variantProps, rest] = input.splitVariantProps(props);
  const classes = input(variantProps);
  return (
    <particles.div
      ref={ref}
      data-part="root"
      {...rest}
      className={cx('group', classes, rest.className)}
    />
  );
});

export type InputWrapperProps = HTMLParticlesProps<'label'>;

const InputWrapper = forwardRef<HTMLLabelElement, InputWrapperProps>(
  (props, ref) => {
    return <particles.label ref={ref} data-part="wrapper" {...props} />;
  },
);

export type InputIconProps = HTMLParticlesProps<'div'>;

const InputIcon = forwardRef<HTMLDivElement, InputIconProps>((props, ref) => {
  return <particles.div ref={ref} data-part="icon" asChild {...props} />;
});

export type InputInputProps = HTMLParticlesProps<'input'>;

const InputInput = forwardRef<HTMLInputElement, InputInputProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <particles.input
        ref={ref}
        data-part="input"
        className={cx('peer', className)}
        {...rest}
      />
    );
  },
);

export type InputElementProps = HTMLParticlesProps<'div'>;

const InputElement = forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => {
    return <particles.div ref={ref} data-part="element" {...props} />;
  },
);

export type InputAddonProps = HTMLParticlesProps<'div'>;

const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>((props, ref) => {
  return <particles.div ref={ref} data-part="addon" {...props} />;
});

export interface InputProps
  extends Assign<HTMLParticlesProps<'input'>, InputVariantProps> {
  icon?: ReactNode;
  iconEnd?: ReactNode;
  elementStart?: ReactNode;
  elementEnd?: ReactNode;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
}

const Component = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
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
});

Component.displayName = 'Input';

export const Input = Object.assign(Component, {
  Root: InputRoot,
  Wrapper: InputWrapper,
  Icon: InputIcon,
  Input: InputInput,
  Element: InputElement,
  Addon: InputAddon,
});
