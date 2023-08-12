import { createComponent, forwardRef } from '../../utils';
import { Portal } from '../Portal';
import { ModalProvider, useModal, useModalContext } from './useModal';
import type { UseModalProps } from './useModal';
import type { ReactNode } from 'react';

export type ModalRootProps = UseModalProps & {
  children?: ReactNode;
};

const Root = (props: ModalRootProps) => {
  const { children, ...rest } = props;
  const ctx = useModal(rest);
  return <ModalProvider value={ctx}>{children}</ModalProvider>;
};

Root.displayName = 'ModalPrimitive.Root';

export interface ModalPortalProps {
  children?: ReactNode;
}

const ModalPortal = (props: ModalPortalProps) => {
  const { children, ...rest } = props;
  const ctx = useModalContext();
  return ctx?.isOpen ? <Portal {...rest}>{children}</Portal> : null;
};

ModalPortal.displayName = 'ModalPrimitive.Portal';

export interface ModalDialogProps {
  children?: ReactNode;
}

const Dialog = forwardRef<'div', ModalDialogProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const ctx = useModalContext();

  if (!ctx?.isOpen) return null;

  return (
    <Component ref={ref} {...ctx?.getFloatingProps()} {...rest}>
      {children}
    </Component>
  );
});

Dialog.displayName = 'ModalPrimitive.Dialog';

export interface ModalBackdropProps {
  children?: ReactNode;
}

const Backdrop = forwardRef<'div', ModalBackdropProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface ModalContentProps {
  children?: ReactNode;
}

const Content = forwardRef<'div', ModalContentProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface ModalTitleProps {
  children?: ReactNode;
}

const Title = forwardRef<'div', ModalTitleProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface ModalDescriptionProps {
  children?: ReactNode;
}

const Description = forwardRef<'div', ModalDescriptionProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

const Dismiss = () => {
  const ctx = useModalContext();
  return (
    <button type="button" onClick={ctx?.onClose}>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span>Close modal</span>
    </button>
  );
};

export default createComponent(Root, {
  Root,
  Portal: ModalPortal,
  Dialog,
  Backdrop,
  Content,
  Dismiss,
  Title,
  Description,
});
