import { ReactNode } from 'react';
import { createComponent } from '../../utils';
import { Portal } from '../Portal';
import {
  ModalProvider,
  useModal,
  useModalContext,
  UseModalProps,
} from './useModal';

export type ModalRootProps = UseModalProps & {
  children?: ReactNode;
};

const Root = (props: ModalRootProps) => {
  const { children, ...rest } = props;
  const ctx = useModal(rest);
  return <ModalProvider value={ctx}>{children}</ModalProvider>;
};

export type ModalDialogProps = {
  children?: ReactNode;
};

const Dialog = (props: ModalDialogProps) => {
  const { children } = props;
  const ctx = useModalContext();

  return ctx.isOpen ? (
    <Portal>
      <div {...ctx.getFloatingProps()}>{children}</div>
    </Portal>
  ) : null;
};

export type ModalContentProps = {
  children?: ReactNode;
};

const Content = (props: ModalContentProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export type ModalTitleProps = {
  children?: ReactNode;
};

const Title = (props: ModalTitleProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export type ModalDescriptionProps = {
  children?: ReactNode;
};

const Description = (props: ModalDescriptionProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

const Dismiss = () => {
  const ctx = useModalContext();
  return (
    <button type="button" onClick={ctx.onClose}>
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
        ></path>
      </svg>
      <span>Close modal</span>
    </button>
  );
};

export default createComponent(
  Root,
  {
    Root,
    Dialog,
    Content,
    Dismiss,
    Title,
    Description,
  },
  'Modal'
);
