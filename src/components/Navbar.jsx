import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "..";
import {toast} from 'react-hot-toast'
import axios from 'axios'

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async()=>{
    try {
      const {data} = await axios.get(`${server}/user/logout`,{
        withCredentials:true
      })
      
      setIsAuthenticated(false)
      toast.success("Logout Successfully");
    } catch (error) {

      setIsAuthenticated(isAuthenticated);
      toast.error("Error");
    }
  }


  return (
    <nav
      className="flex items-center justify-between py-4 px-36 max-[730px]:px-4"
      style={{ background: "#055a61" }}
    >
      <div className="text-white text-xl font-bold"><Link to={"/"}>POSTHUB</Link></div>
      <div className="space-x-4">
        <Link
          to="/myposts"
          className="text-white hover:text-gray-300 font-bold"
        >
          My Posts
        </Link>
        {isAuthenticated ? (
          <button
            onClick={logoutHandler}
            className="text-white hover:text-gray-300 font-bold"
          >
            Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
