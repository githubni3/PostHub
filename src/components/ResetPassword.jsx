import React, { useState } from 'react';
import {RiLockPasswordLine} from 'react-icons/ri';
import reset from '../assets/reset.png';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmnewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewPassword('');
    setConfirmNewPassword('');
    // Handle form submission here
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmnewPassword);

  };

  return (

    <div className='flex justify-center mt-32 max-[642px]:mt-10 h-75vh'>

    <div className='flex max-[800px]:flex-col max-[642px]:items-center max-[642px]:justify-center  max-[800px]:mb-10'>

        <div className='max-[800px]:min-w-min '>
          <img id='forgotimg' src={reset} alt="forgot" />
        </div>

        <div className='shadow-md  max-[800px]:min-w-full max-[642px]:h-full flex justify-center items-center w-2/3 '>
          <form className="">
          <h1 className="text-4xl  max-[914px]:text-3xl font-bold text-center" style={{color: '#22b493'}}>Reset Password?</h1>



          <div className='text-center my-6 max-[914px]:mx-2'>
              <p className="text-gray-500">Please enter the new password</p>

              <p></p>
          </div>



        <div className="mb-2 max-[914px]:mx-3 max-[914px]:mb-3">
        <span className="relative top-8 left-2">
            <RiLockPasswordLine className="text-gray-500" />
          </span>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            style={{backgroundColor: '#f5f9f8'}}
            onChange={(e) => setNewPassword(e.target.value)}

          />
        </div>
        
        <div className="mb-2 max-[914px]:mx-3 max-[914px]:mb-3">
        <span className="relative top-8 left-2">
            <RiLockPasswordLine className="text-gray-500" />
          </span>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            style={{backgroundColor: '#f5f9f8'}}
            onChange={(e) => setConfirmNewPassword(e.target.value)}

          />
        </div>

          <div className="flex items-center justify-center mt-4 mx-3 max-[800px]:mb-5">
          <button
            className="text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
            style={{backgroundColor: '#3aaea1', fontWeight : '400'}}
          >
            RESET PASSWORD
          </button>
        </div>
    

    
        
        
          </form>
        </div>
    </div>


    </div>


  );
};

export default ResetPassword;
