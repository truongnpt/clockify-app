import { toast } from 'react-toastify';
import { ToastSuccess, ToastError, ToastWarning } from 'components/Toast';

/*
A wrapper for toast.
*/
class ToastAlertFactory {
  error(message: any, options?: object) {
    let msg = '';
    if (typeof message === 'string') {
      msg = message;
    } else if (typeof message === 'object') {
      if (message.error_message) {
        msg = message.error_message;
      } else if (message.message) {
        msg = message.message;
      } else {
        msg = 'Unknown error.';
      }
    }
    ToastError('Oops...', msg, options);
  }

  warn(message: string, options?: object) {
    ToastWarning('Bad news...', message, options);
  }

  info(message: string, options?: object) {
    toast.info(message, options);
  }

  success(message: string, options?: object) {
    ToastSuccess('Success', message, options);
  }

  successWithTitle(title: string, message: string, options?: object) {
    ToastSuccess(title, message, options);
  }

  errorWithTitle(title: string, message: string, options?: object) {
    ToastError(title, message, options);
  }

  warningWithTitle(title: string, message: string, options?: object) {
    ToastWarning(title, message, options);
  }
}
// To use code completion in Editor
const ToastAlert = new ToastAlertFactory();
export default ToastAlert;
