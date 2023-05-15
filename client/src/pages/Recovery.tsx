import { FC } from 'react';
import '../scss/username.scss';

const Recovery: FC = () => {

  return (
    <div className='container'>
      <div className='flex justify-center items-center'>

        <div className='glass'>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
              Enter OTP to recover password..
            </span>
          </div>

          <form className='py-1'>
            <div className='flex flex-col items-center gap-6'>
              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 digit OTP sent to your email address.
              </span>
              <input type='text' placeholder='Username' className='textbox' />
              <button type='submit' className='btn'>Let's Go</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Not a member
                <button> Register now</button>
              </span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Recovery;