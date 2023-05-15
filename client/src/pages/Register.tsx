import { FC } from 'react';
import '../scss/username.scss';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from 'formik';
import { passwordValidate } from '../helpers/validate';

const Register: FC = () => {

  const registerFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.table(values);
    }
  })


  return (
    <div className="container mx-auto">
        <div className='glass'>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Happy to join you!
            </span>
          </div>

          <form className='py-1' onSubmit={registerFormik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
                <img src={avatar} className='profile_img' alt="avatar" />
              </label>

              <input onChange={() => null} type="file" id='profile' name='profile' />
            </div>

            <div className=" flex flex-col items-center gap-6">
              <input {...registerFormik.getFieldProps('email')} className='textbox' type="text" placeholder='Email*' />
              <input {...registerFormik.getFieldProps('username')} className='textbox' type="text" placeholder='Username*' />
              <input {...registerFormik.getFieldProps('password')} className='textbox' type="text" placeholder='Password*' />
              <button className='btn' type='submit'>Register</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login Now</Link></span>
            </div>
          </form>

        </div>
      </div>
  )
}

export default Register;