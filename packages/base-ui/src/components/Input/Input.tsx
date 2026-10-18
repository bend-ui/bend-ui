import type { SlotRecipeComponent } from '@bend-ui/core';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { bend, type HTMLBendUIProps } from '@bend-ui/core';
import { cx } from '@bend-ui/styled-system/css';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { input, type InputVariantProps } from '@bend-ui/styled-system/recipes';
import type { Assign } from '@bend-ui/styled-system/types';
import type { ReactNode } from 'react';

const { withProvider, withContext } = createSlotRecipeContext(input);

export type InputRootProps = Assign<HTMLBendUIProps<'div'>, InputVariantProps>;
const InputRoot: SlotRecipeComponent<
  typeof bend.div,
  (typeof input)['__type']
> = withProvider(bend.div, 'root', {
  defaultProps: { 'data-part': 'root' },
});

export type InputWrapperProps = HTMLBendUIProps<'label'>;
const InputWrapper: SlotRecipeComponent<typeof bend.label> = withContext(
  bend.label,
  'wrapper',
  {
    defaultProps: { 'data-part': 'wrapper' },
  },
);

export type InputIconProps = HTMLBendUIProps<'span'>;
const InputIcon: SlotRecipeComponent<typeof bend.span> = withContext(
  bend.span,
  'icon',
  {
    defaultProps: { 'data-part': 'icon' },
  },
);

export type InputInputProps = InputPrimitive.Props;
const InputControl: SlotRecipeComponent<typeof InputPrimitive> = withContext(
  InputPrimitive,
  'input',
  {
    defaultProps: { 'data-part': 'input' },
  },
);

const InputStandaloneControl = (props: InputInputProps) => {
  const { className, ...rest } = props;
  return (
    <InputPrimitive
      data-part="input"
      className={(state) =>
        cx(
          input().input,
          typeof className === 'function' ? className(state) : className,
        )
      }
      {...rest}
    />
  );
};

export type InputElementProps = HTMLBendUIProps<'div'>;
const InputElement: SlotRecipeComponent<typeof bend.div> = withContext(
  bend.div,
  'element',
  {
    defaultProps: { 'data-part': 'element' },
  },
);

export type InputAddonProps = HTMLBendUIProps<'div'>;
const InputAddon: SlotRecipeComponent<typeof bend.div> = withContext(
  bend.div,
  'addon',
  {
    defaultProps: { 'data-part': 'addon' },
  },
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
        <InputControl {...rest} />
        {elementEnd && <InputElement>{elementEnd}</InputElement>}
        {iconEnd && <InputIcon>{iconEnd}</InputIcon>}
      </InputWrapper>
      {addonEnd && <InputAddon>{addonEnd}</InputAddon>}
    </InputRoot>
  );
};

Object.assign(Component, { displayName: 'Input' });

export const Input = Object.assign(Component, {
  Root: InputRoot,
  Wrapper: InputWrapper,
  Icon: InputIcon,
  Input: InputControl,
  Control: InputStandaloneControl,
  Element: InputElement,
  Addon: InputAddon,
});
