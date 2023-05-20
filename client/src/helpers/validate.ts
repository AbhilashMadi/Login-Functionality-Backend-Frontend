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


/** validate reset password */
export async function resetPasswordValidate(values: any) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirmPassword) {
    errors.exist = CustomToast({ icon: '🤞', message: 'Password not match...!' })
  }

  return errors;

}

/** Validate the register form */
export async function registerValidate(values: any) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/** Email verify */
function emailVerify(error: FormErros = {}, values: any) {
  if (!values.email) {
    error.email = CustomToast({ icon: '🥲', message: 'Email is required' });
  } else if (!isValidEmail(values.email)) {
    error.email = CustomToast({ icon: '😢', message: 'Invalid email format' });
  }

  return error;
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


/** validate the profile page */
export async function profileValidate(values: any) {
  const errors = emailVerify({}, values);
  return errors;
}