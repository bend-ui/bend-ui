import { forwardRef } from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import type { RecipeVariantProps } from '@particles/panda-system/css';

const styles = cva({
  base: {},
  variants: {
    variant: {
      solid: {
        bg: 'surface',
        rounded: 'md',
        p: 2,
      },
      outline: {},
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
});

export type InputVariants = RecipeVariantProps<typeof styles>;

export type InputProps = InputVariants;

const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const { className, ...rest } = props;
  return <input ref={ref} className={cx(styles(), className)} {...rest} />;
});

export default Input;
