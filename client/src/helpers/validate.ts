import CustomToast from './CustomToast';

type FormErros = {
  [filed: string]: string;
}

/** verify username */
function usernameVerify(error: FormErros = {}, values: any) {
  if (!values.username) {
    error.username = CustomToast({ icon: '🥲', message: 'Username is required' });
  } else if (values.username.length < 4 || values.username.length > 20) {
    error.username = CustomToast({ icon: '🤏', message: 'Username must be between 4 and 20 characters' });
  } else if (values.username.includes(' ')) {
    error.username = CustomToast({ icon: '😤', message: 'Username cannot contain spaces' });
  }

  return error;
}

/** Validate the login page username */
export async function usernameValidate(values: any) {
  const errors = usernameVerify({}, values);
  return errors;
}

/** validate password */
function passwordVerify(error: FormErros = {}, values: any) {
  if (!values.password) {
    error.password = CustomToast({ icon: '🥲', message: 'Password is required' });
  } else if (values.password.length < 8) {
    error.password = CustomToast({ icon: '😶‍🌫️', message: 'Password must be at least 8 characters' });
  } else if (!/\d/.test(values.password)) {
    error.password = CustomToast({ icon: '🫠', message: 'Password must contain at least one digit' });
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    error.password = CustomToast({ icon: '🫤', message: 'Password must contain at least one special character (!@#$%^&*)' });
  }

  return error;
}

/** Validate the login page password */
export async function passwordValidate(values: any) {
  const error = passwordVerify({}, values);
  return error;
}