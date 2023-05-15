import { FC } from 'react';
import { useFormik } from 'formik';
import '../scss/username.scss';
import { resetPasswordValidate } from '../helpers/validate';

const Reset: FC = () => {

  const resetFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: resetPasswordValidate,
    onSubmit: async (values) => {
      console.table(values);
    }
  })

  return (
    <div className='container'>

      <div className='glass w-[50%]'>
        <div className='title flex flex-col items-center'>
          <h4 className='text-5xl font-bold'>Reset</h4>
          <span className='py-4 text-xl text-center text-gray-5'>
            Enter new password.
          </span>
        </div>

        <form className='py-5' onSubmit={resetFormik.handleSubmit}>
          <div className='flex flex-col items-center gap-6'>
            <input type='password' placeholder='New password' className='textbox' {...resetFormik.getFieldProps('password')} />
            <input type='password' placeholder='Confirm Password' className='textbox' {...resetFormik.getFieldProps('confirmPassword')} />
            <button type='submit' className='btn'>Reset</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Reset;