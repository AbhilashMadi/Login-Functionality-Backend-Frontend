import React from 'react';
import { toast } from 'react-hot-toast';
import CustomButton from '../components/custom/CustomButton';
import CustomInput from '../components/custom/CustomInput';

const Username = () => {

  return (
    <>
      <div>
        <CustomInput
          error=''
          label='testing label'
          name='testing_name'
          placeholder='testeteo'
          className=''
          onChange={() => null}
          onBlur={() => null} />
      </div>
    </>
  )
}

export default Username