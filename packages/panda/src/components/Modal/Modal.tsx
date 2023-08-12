import { cva, cx } from '@particles/panda-system/css';
import { forwardRef, Modal as ModalPrimitive } from '@particles/primitives';
import type { ModalRootProps } from '@particles/primitives';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

const styles = {
  backdrop: cva({
    base: {
      position: 'fixed',
      inset: '0',
      bg: 'neutral.900',
      display: 'grid',
      placeItems: 'center',
    },
  }),
  dialog: cva({
    base: {
      position: 'relative',
      bg: 'surface',
      p: 4,
      rounded: 'md',
      minWidth: '360px',
    },
  }),
};

export type ModalVariants = RecipeVariantProps<typeof styles.dialog>;

export type ModalProps = ModalRootProps &
  ModalVariants & {
    children?: ReactNode;
  };

const Modal = forwardRef<'div', ModalProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <ModalPrimitive.Root {...rest}>
      <ModalPrimitive.Portal>
        <ModalPrimitive.Backdrop className={styles.backdrop()}>
          <ModalPrimitive.Dialog className={cx(styles.dialog(), className)}>
            <ModalPrimitive.Dismiss />
            <ModalPrimitive.Content>{children}</ModalPrimitive.Content>
          </ModalPrimitive.Dialog>
        </ModalPrimitive.Backdrop>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  );
});

export default Modal;
