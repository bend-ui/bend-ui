import { createContext, useContext, useReducer } from 'react';
import { Portal } from '@particles/primitives';
import { Toast } from '../Toast';

const ToastStateContext = createContext({ toasts: [] });
export const useToastStateContext = () => useContext(ToastStateContext);

const ToastDispatchContext = createContext(null);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);

const ToastReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }
    case 'REMOVE': {
      const updateToasts = state.toasts.filter(
        (toast) => toast.id !== action.id
      );
      return {
        ...state,
        toasts: updateToasts,
      };
    }
    case 'UPDATE': {
      return;
    }
    default:
      throw new Error('Unhandled Action');
  }
};

export const ToastsContainer = () => {
  const { toasts } = useToastStateContext();
  return (
    <Portal>
      <div
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {toasts &&
          toasts.map((toast) => (
            <Toast key={toast.id} id={toast.id}>
              {toast.title}
              {toast.content}
            </Toast>
          ))}
      </div>
    </Portal>
  );
};

export type ToastProviderProps = {
  children?: React.ReactNode;
};

export const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  });

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};
