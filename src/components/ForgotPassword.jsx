import React, { useState } from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import forgot from '../assets/forgot.png';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [userEmail, setUseremail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUseremail('');
    // Handle form submission here
    console.log('Email:', userEmail);
    navigate('/reset')

  };

  return (

    <div className='flex justify-center mt-20 max-[642px]:mt-10 h-75vh '>

    <div className='flex max-[800px]:flex-col max-[642px]:items-center max-[642px]:justify-center'>

        <div className='max-[800px]:min-w-min'>
          <img id='forgotimg' src={forgot} alt="forgot" />
        </div>

        <div className='shadow-md  max-[800px]:min-w-full max-[642px]:h-full flex justify-center items-center w-2/3 '>
          <form className="">
          <h1 className="text-4xl  max-[914px]:text-3xl font-bold text-center" style={{color: '#22b493'}}>Forgot Password?</h1>



          <div className='text-center my-6 max-[914px]:mx-2'>
              <p className="text-gray-500">Enter the email address associated with your account</p>

              <p></p>
          </div>


        <div className="mb-6 max-[914px]:mx-3 max-[914px]:mb-3">
        <span className="relative top-8 left-2">
            <MdOutlineEmail className="text-gray-500" />
          </span>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUseremail(e.target.value)}
            style={{backgroundColor: '#f5f9f8'}}
          />
        </div>

          <div className="flex items-center justify-center mb-5 mx-3">
          <button
            className="text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
            style={{backgroundColor: '#3aaea1', fontWeight : '400'}}
          >
            CONTINUE
          </button>
        </div>
    

    
        
        
          </form>
        </div>
    </div>


    </div>


  );
};

export default ForgotPassword;
