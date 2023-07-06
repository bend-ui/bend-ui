import { buttonStyles } from '@particles/primitives';
import { cva } from 'styled-system/css';
import type { RecipeVariantProps } from 'styled-system/css';
import type { ReactNode } from 'react';

const styles = cva({
  base: {
    ...buttonStyles.root,
    padding: '3',
    borderRadius: 'md',
  },
  variants: {
    palette: {
      primary: {
        bg: 'blue.500',
      },
      secondary: {
        bg: 'orange.500',
      },
    },
  },
  defaultVariants: {
    palette: 'primary',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof styles>;

export type ButtonProps = ButtonVariants & {
  children?: ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children, palette, ...rest } = props;
  return (
    <button className={styles({ palette })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
