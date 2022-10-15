import { useToastDispatchContext } from './ToastProvider';

export type AddToastProps = {
  id?: string;
  title: string;
  content: string;
  onOpen?(): void;
  onClose?(): void;
};

export const useToast = () => {
  const dispatch = useToastDispatchContext();

  const addToast = ({ id, title, content, onOpen, onClose }: AddToastProps) => {
    const uuid = id || Math.random().toString(36).substr(2, 9);
    dispatch({
      type: 'ADD',
      toast: {
        id: uuid,
        title,
        content,
      },
    });

    onOpen?.();

    setTimeout(() => {
      dispatch({
        type: 'REMOVE',
        id,
      });
      onClose?.();
    }, 5000);
  };

  const dismissToast = (id) =>
    dispatch({
      type: 'REMOVE',
    });

  const updateToast = () =>
    dispatch({
      type: 'UPDATE',
    });

  return {
    addToast,
    dismissToast,
    updateToast,
  };
};
