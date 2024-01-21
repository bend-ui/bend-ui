import { useToast } from './useToast';
import { Toast, ToastProvider, ToastViewport } from '.';

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div>
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && (
              <Toast.Description>{description}</Toast.Description>
            )}
          </div>
          {action}
          <Toast.Close />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};
