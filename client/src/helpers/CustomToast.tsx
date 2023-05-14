import toast from 'react-hot-toast';
import { CSSProperties } from 'react';

interface ICustomToast {
  message: string;
  icon?: any;
}

function CustomToast({ icon, message }: ICustomToast) {
  const theme = localStorage.getItem('themeMode')
  const toastTheme = theme === 'dark' ? {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
  } : {}
  return toast(message, {
    icon: icon,
    style: {
      ...toastTheme
    } as CSSProperties, // <-- Casting the style object to CSSProperties
  });
}

export default CustomToast;
