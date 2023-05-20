import { FC, useState, ChangeEvent } from 'react';
import '../scss/username.scss';
import '../scss/profile.scss';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from 'formik';
import { profileValidate } from '../helpers/validate';
import convertToBase64 from '../helpers/convert';

const Profile: FC = () => {
  const [file, setFile] = useState<string>('');

  const registerFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      mobileNo: '',
      email: '',
      address: '',
      profile: '',
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await { ...values, profile: file || '' };
      console.table(values);
      registerFormik.resetForm();
    },
  });

  //formik doesn't support the file uploads so making this handler
  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = await e.target.files?.[0];
    if (selectedFile) {
      const base64 = await convertToBase64(selectedFile);
      setFile(base64);
    }
  }


  return (
    <div className="container mx-auto">
      <div className='glass'>

        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Profile</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can update the details
          </span>
        </div>

        <form className='py-1' onSubmit={registerFormik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <label htmlFor="profile">
              <img src={file || avatar} className='profile_img' alt="avatar" />
            </label>

            <input onChange={onUpload} type="file" id='profile' name='profile' />
          </div>

          <div className=" flex flex-col items-center gap-6">
            <div className='name flex w-3/4 gap-10'>
              <input {...registerFormik.getFieldProps('firstName')} className='textbox' type="text" placeholder='Firstname' />
              <input {...registerFormik.getFieldProps('lastName')} className='textbox' type="text" placeholder='Lastname' />
            </div>

            <div className='name flex w-3/4 gap-10'>
              <input {...registerFormik.getFieldProps('mobileNo')} className='textbox' type="text" placeholder='Mobile No' />
              <input {...registerFormik.getFieldProps('email')} className='textbox' type="text" placeholder='Email' />
            </div>

            <input {...registerFormik.getFieldProps('address')} className='textbox' type="text" placeholder='Address' />
            <button className='btn' type='submit'>Register</button>

          </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>Come back later? <Link className='text-red-500' to="/">Logout</Link></span>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Profile;