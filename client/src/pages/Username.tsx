import React from 'react';
import { toast } from 'react-hot-toast';

const Username = () => {
  const showToast = () => {
    toast('Hello world');
  }
  return (
    <div>Username
      <div>
        <button onClick={showToast}>show toast</button>
      </div>
    </div>
  )
}

export default Username