
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

type NotificationProps = {
  message : string;
  type : string;
}

const useNotification = () => {
  const notyf = new Notyf();

  const showNotification = ( { message , type } : NotificationProps) => {
    notyf.open({
      type: type,
      message: message,
      background : 'rgba(1,150,44,0.8)',
      duration: 2500,
      position: {
        x: 'right',
        y: 'top',
      },
      dismissible: true,
    });
  };

  return { showSuccess: (message : string) => showNotification( { message , type:'success'} ), 
        showError: (message : string) => showNotification ( { message , type : 'error'}),
      showWarning : (message : string) => showNotification( { message ,type : 'warning'}) };
};

export default useNotification;