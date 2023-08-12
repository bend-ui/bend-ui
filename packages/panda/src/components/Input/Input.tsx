import { createComponent, forwardRef } from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

const styles = {
  root: cva({
    base: {
      position: 'relative',
      display: 'flex',
      height: '8',
    },
  }),
  input: cva({
    base: {
      'div ~ &': {
        pl: '8',
      },
    },
    variants: {
      variant: {
        solid: {
          color: {
            base: 'black',
            _dark: 'white',
          },
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
  }),
  icon: cva({
    base: {
      position: 'absolute',
      width: '8',
      height: '8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
};

export type InputVariants = RecipeVariantProps<typeof styles.input>;

export type InputProps = InputVariants & {
  icon?: ReactNode;
};

export const Root = forwardRef<'input', InputProps>((props, ref) => {
  const { className, icon, ...rest } = props;
  return (
    <div className={styles.root()}>
      {icon && <div className={styles.icon()}>{icon}</div>}
      <input ref={ref} className={cx(styles.input(), className)} {...rest} />
    </div>
  );
});

Root.displayName = 'Input';

export const Input = createComponent(Root);
