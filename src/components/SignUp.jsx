import React, { useState } from 'react';
import {ImFacebook} from 'react-icons/im';
import {RiGoogleFill} from 'react-icons/ri';
import {BsLinkedin} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpForm = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className='flex justify-center mt-20 max-[642px]:mt-10 h-75vh '>

    <div className='flex max-[642px]:flex-col max-[642px]:items-center max-[642px]:justify-center'>

        <div className='shadow-md max-[784px]:w-3/5 max-[642px]:w-full max-[642px]:h-36 rounded-tl-xl rounded-bl-xl max-[642px]:rounded-tr-xl max-[642px]:rounded-bl-none' style={{ background: 'linear-gradient(#3eb599, #63cbb1, #055a61)'}}>

        <div className='flex flex-col justify-center h-full max-[642px]:py-16'>
              
        <h1 class="text-4xl text-white font-bold text-center ">Welcome Back!</h1>

        <p className='text-white mt-2 px-12 max-[784px]:px-5'>To keep connected with us please login with your personal info</p>

        <Link to='/signIn'>
        <div className="text-center">
        <button
          className="text-white py-2 px-10 rounded-3xl mt-5 focus:outline-none focus:shadow-outline"
          style={{border: '1px solid white'}}
        >
          SIGN IN
        </button>
        </div>
        </Link>

        </div>

        </div>

        <div className='shadow-md pt-14 max-[642px]:pt-5 max-[642px]:min-w-full max-[642px]:h-full rounded-tr-xl rounded-br-xl max-[642px]:rounded-tr-none max-[642px]:rounded-bl-xl' style={{ width: '75%'}}>
        <form className="px-8 pb-8">
        <h1 className="text-5xl  max-[784px]:text-4xl font-bold text-center" style={{color: '#22b493'}}>Create Account</h1>

        <div className="my-5 flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
            <ImFacebook className="cursor-pointer text-black-500 text-xl" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 ml-4">
                <RiGoogleFill className="cursor-pointer text-black-500 text-xl" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 ml-4">
                <BsLinkedin className="cursor-pointer text-black-500 text-xl" />
            </div>
        </div>

        <div className='text-center'>
            <p className="text-gray-500">or use your email for registration.</p>

            <p></p>
        </div>


      <div className="mb-4">
   
      <span className="relative top-8 left-2">
          <BiUser className="text-gray-500" />
        </span>
        <input
          className="shadow appearance-none border rounded-lg w-full py-3 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder='User Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{backgroundColor: '#f5f9f8'}}
        />
      </div>
      <div className="mb-4">
      <span className="relative top-8 left-2">
          <MdOutlineEmail className="text-gray-500" />
        </span>
        <input
          className="shadow appearance-none border rounded-lg w-full py-3 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{backgroundColor: '#f5f9f8'}}
        />
      </div>
      <div className="mb-6">
      <span className="relative top-8 left-2">
          <RiLockPasswordLine className="text-gray-500" />
        </span>
        <input
          className="shadow appearance-none border rounded-lg w-full py-3 px-7 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{backgroundColor: '#f5f9f8'}}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSignUpForm}
          style={{backgroundColor: '#3aaea1', fontWeight : '400'}}
        >
          SIGN UP
        </button>
      </div>
    </form>
        </div>
    </div>


    </div>


  );
};

export default SignUp;
