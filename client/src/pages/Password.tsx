import { FC } from 'react';
import '../scss/username.scss';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from 'formik';
import { passwordValidate } from '../helpers/validate';

const Password: FC = () => {

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.table(values);

      formik.resetForm();
    }
  })


  return (
    <div className='container'>
      <div className='flex justify-center items-center'>

        <div className='glass'>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
              Explore more by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} alt='avatar' className='profile_img' />
            </div>
            <div className='flex flex-col items-center gap-6 relative'>
              <input type='password' placeholder='Password' className='textbox' {...formik.getFieldProps('password')} />
              <button type='button' className='absolute right-14 top-5'>show</button>
              <button type='submit' className='btn'>Sign Up</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Forgot password?
                <Link to='/recovery' className='link'> Recover Now!</Link>
              </span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Password;