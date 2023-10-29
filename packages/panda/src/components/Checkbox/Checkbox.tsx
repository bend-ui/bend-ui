import {
  Checkbox as CheckboxPrimitive,
  createComponent,
  forwardRef,
} from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import { TbCheck } from 'react-icons/tb';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

export const styles = {
  root: cva({
    base: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '2',
    },
  }),
  control: cva({
    base: {
      w: 4,
      h: 4,
      bg: 'surface',
      rounded: 'sm',
      '&[data-state="checked"]': {
        bg: 'primary',
      },
    },
  }),
  label: cva({
    base: {
      userSelect: 'none',
    },
  }),
};

export type CheckboxVariants = RecipeVariantProps<typeof styles.root>;

export type CheckboxProps = CheckboxVariants & {
  children?: ReactNode;
};

const Component = forwardRef<'input', CheckboxProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <CheckboxPrimitive.Root className={cx(styles.root(), className)}>
      <CheckboxPrimitive.Input ref={ref} hidden {...rest} />
      <CheckboxPrimitive.Control className={styles.control()}>
        <TbCheck />
      </CheckboxPrimitive.Control>
      <CheckboxPrimitive.Label className={styles.label()}>
        {children}
      </CheckboxPrimitive.Label>
    </CheckboxPrimitive.Root>
  );
});

export const Checkbox = createComponent(Component, {});
