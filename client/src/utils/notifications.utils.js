import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/scss/notification.scss';
import 'animate.css';

const addNotification = (title, message, type, insert, container, animationIn, animationOut, duration, showIcon) => store.addNotification({
  title,
  message,
  type,
  insert,
  container,
  animationIn: ['animate__animated', `animate__${ animationIn }`],
  animationOut: ['animate__animated', `animate__${ animationOut }`],
  dismiss: {
    duration,
    showIcon,
  }
});

export default addNotification;
