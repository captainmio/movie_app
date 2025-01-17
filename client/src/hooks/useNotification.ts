import { toast, ToastPosition } from 'react-toastify';

interface ToastOptions {
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: string;
}

const defaultOptions = {
  autoClose: 3000, 
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light"
}

const useNotification = () => {

  const showSuccessToast = (title: string, options: ToastOptions = {}) => {
    toast.success(title, {
      position: 'top-right' as ToastPosition,
      ...defaultOptions,
      ...options,
    });
  };

  const showErrorToast = (title: string, options: ToastOptions = {}) => {
    toast.error(title, {
      position: 'top-right' as ToastPosition,
      ...defaultOptions,
      ...options,
    });
  };

  const showInfoToast = (title: string, options: ToastOptions = {}) => {
    toast.info(title, {
      position: 'top-right' as ToastPosition,
      ...defaultOptions,
      ...options,
    });
  };

  const showWarningToast = (title: string, options: ToastOptions = {}) => {
    toast.warn(title, {
      position: 'top-right' as ToastPosition,
      ...defaultOptions,
      ...options,
    });
  };

  return { showSuccessToast, showErrorToast, showInfoToast, showWarningToast };
};

export default useNotification;
