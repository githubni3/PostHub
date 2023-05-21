import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-36 max-[730px]:px-4" style={{ background: '#055a61'}}>
      <div className="text-white text-xl font-bold">POSTHUB</div>
      <div className="space-x-4">
        <Link
          to="/myposts"
          className="text-white hover:text-gray-300 font-bold"
        >
          My Posts
        </Link>
        <Link
          to="/signIn"
          className="text-white hover:text-gray-300 font-bold"
        >
          Sign In
        </Link>
        <Link
          to="/SignUp"
          className="text-white hover:text-gray-300 font-bold"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
