import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const showWarning = name => {
  iziToast.info({
    message: `Your contacts book already exists ${name}`,
    position: 'center',
    backgroundColor: '#afbef3',
    messageColor: 'white',
    maxWidth: 300,
    timeout: 3000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};
