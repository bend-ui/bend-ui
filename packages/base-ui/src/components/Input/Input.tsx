import { Input as InputPrimitive } from '@base-ui/react/input';
import { input, type InputVariantProps } from '@bend-ui/styled-system/recipes';
import { css, cx } from '@bend-ui/styled-system/css';
import { splitCssProps } from '@bend-ui/styled-system/jsx';
import type { Assign } from '@bend-ui/styled-system/types';

const InputRoot = InputPrimitive;
export type InputProps = Assign<InputPrimitive.Props, InputVariantProps>;

const Component = (props: InputProps) => {
  const [variantProps, remainingProps] = input.splitVariantProps(props);
  const [styleProps, elementProps] = splitCssProps(
    remainingProps as InputPrimitive.Props,
  );
  const { className, ...rest } = elementProps;
  return (
    <InputRoot
      className={(state) =>
        cx(
          input(variantProps),
          css(styleProps),
          typeof className === 'function' ? className(state) : className,
        )
      }
      {...rest}
    />
  );
};

export const Input = Object.assign(Component, {
  Root: InputRoot,
  Control: InputRoot,
});
