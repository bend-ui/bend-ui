import {
  createComponent,
  forwardRef,
  Modal as ModalPrimitive,
  ModalRootProps,
} from '@particles/primitives';
import { ReactNode } from 'react';
import { createStyles } from '../../styles';

export type ModalProps = ModalRootProps & {
  children?: ReactNode;
};

const useStyles = createStyles({
  root: {
    base: [
      'fixed',
      'top-0',
      'left-0',
      'right-0',
      'flex',
      'justify-center',
      'z-50',
      'w-full',
      'p-4',
      'overflow-x-hidden',
      'overflow-y-auto',
      'md:inset-0',
      'md:h-full',
    ],
  },
  backdrop: {
    base: ['bg-shark-900', 'bg-opacity-80', 'fixed', 'inset-0'],
  },
  dialog: {
    base: ['relative', 'w-full', 'h-full', 'max-w-2xl', 'md:h-auto'],
  },
  content: {
    base: [
      'relative',
      'bg-surface',
      'border',
      'border-surface-accent',
      'rounded-lg',
      'shadow',
      'drop-shadow-md',
    ],
  },
  header: {
    base: ['p-4'],
  },
  body: {
    base: ['px-4'],
  },
  footer: {
    base: ['p-4'],
  },
});

const Modal = forwardRef<ModalProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <ModalPrimitive.Root ref={ref} {...rest}>
      <ModalPrimitive.Portal>
        <div className={cn(classes.root)}>
          <ModalPrimitive.Backdrop className={classes.backdrop} />
          <ModalPrimitive.Dialog className={classes.dialog}>
            <ModalPrimitive.Content className={classes.content}>
              <div className={classes.header}>
                <ModalPrimitive.Title className="text-2xl font-bold">
                  Sign up today
                </ModalPrimitive.Title>
                <ModalPrimitive.Description className="text-lg font-light">
                  Enter your email and choose a password to setup your account
                </ModalPrimitive.Description>
                <ModalPrimitive.Dismiss></ModalPrimitive.Dismiss>
              </div>
              <div className={classes.body}>{children}</div>
              <div className={classes.footer}>Footer</div>
            </ModalPrimitive.Content>
          </ModalPrimitive.Dialog>
        </div>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  );
});

export default createComponent(Modal);
