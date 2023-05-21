import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r" style={{ background: 'linear-gradient(#3eb599, #63cbb1, #055a61)'}}>
      <h1 className="text-6xl font-bold text-white mb-6">404</h1>
      <p className="text-2xl font-medium text-white mb-10">Page Not Found</p>
      <Link to='/'>
      <button className="px-6 py-3  text-white rounded-full shadow-lg font-medium transition duration-300 ease-in-out" style={{background:'rgb(5, 90, 97)'}}>
        Go Back
      </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
