import { FC, useEffect } from 'react';
import '../scss/username.scss';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';

const Username: FC = () => {
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

          <form className='py-1'>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} alt='avatar' className='profile_img' />
            </div>
            <div className='flex flex-col items-center gap-6'>
              <input type='text' placeholder='Username' className='textbox' />
              <button type='submit' className='btn'>Let's Go'</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Not a member
                <Link to='/register' className='link'> Register now</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Username