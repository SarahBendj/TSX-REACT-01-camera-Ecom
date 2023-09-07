
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const useNotification = () => {
  const notyf = new Notyf();

  const showNotification = (message :string) => {
    notyf.open({
      
      message: message,
      background : '#842E1B',
      duration: 2000,
      position: {
        x: 'right',
        y: 'top',
      },
      dismissible: true,
    });
  };

  return { showSuccess: (message:string) => showNotification(message, 'hdjsqjkl'), 
        showError: (message:string) => showNotification(message, 'error') };
};

export default useNotification;