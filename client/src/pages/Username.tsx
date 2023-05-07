import React from 'react';
import { toast } from 'react-hot-toast';
import CustomButton from '../components/custom/CustomButton';
import CustomInput from '../components/custom/CustomInput';
import { Link } from 'react-router-dom';
import CustomAvatar from '../components/custom/CustomAvatar';

const Username = () => {

  return (
    <div className='username'>
      <div className='username__text'>
        <h3>Hello Again!!</h3>
        <p>Explore by connecting with us</p>
      </div>
      <CustomAvatar name='user image'/>
      <div className='username_fileds'>
        <CustomInput
          error=''
          label='Enter your password'
          name='password'
          placeholder=''
          className='username__input'
          onChange={() => null}
          type='password'
          onBlur={() => null} />
          <CustomButton
          text='Sign in'
          className='username_button'
          />
      CustomAvatar</div>
      <footer className='username__footer'>
        <p>Forgot passowrd <Link to="#" className='username__recover'>Recover Now</Link></p>
      </footer>
    </div>
  )
}

export default Username