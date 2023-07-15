import { useState } from 'react';

export interface UseDisclosureProps {
  initialValue?: boolean;
  onOpen?(): void;
  onClose?(): void;
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const { initialValue = false, onOpen, onClose } = props;
  const [isOpen, setOpen] = useState(initialValue);

  const open = () => {
    setOpen(true);
    onOpen?.();
  };

  const close = () => {
    setOpen(false);
    onClose?.();
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  return [isOpen, { open, close, toggle }] as const;
};
