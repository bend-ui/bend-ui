import { cva, cx } from '@particles/panda-system/css';
import { forwardRef, Modal as ModalPrimitive } from '@particles/primitives';
import type { ModalRootProps } from '@particles/primitives';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

const styles = {
  root: cva({
    base: {},
  }),
  dialog: cva({
    base: { bg: 'surface', p: 4, rounded: 'md' },
  }),
};

export type ModalVariants = RecipeVariantProps<typeof styles.root>;

export type ModalProps = ModalRootProps &
  ModalVariants & {
    children?: ReactNode;
  };

const Modal = forwardRef<ModalProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <ModalPrimitive.Root {...rest}>
      <ModalPrimitive.Portal>
        <ModalPrimitive.Backdrop />
        <ModalPrimitive.Dialog className={cx(styles.dialog(), className)}>
          <ModalPrimitive.Dismiss />
          <ModalPrimitive.Content>{children}</ModalPrimitive.Content>
        </ModalPrimitive.Dialog>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  );
});

export default Modal;
