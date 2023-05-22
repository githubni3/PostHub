import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import Posts from './components/Posts';
import MyPosts from './components/MyPosts';
import ResetPassword from './components/ResetPassword';
import PageNotFound from './components/PageNotFound';
import { Toaster } from 'react-hot-toast';
import { Context, server } from '.';
import axios from 'axios'

const App = () => {
  const {setUser,setIsAuthenticated} = useContext(Context)

  useEffect(()=>{
    axios.get(`${server}/user/profile`,{
      withCredentials:true
    }).then((res)=>{
      setUser(res.data.user);
      setIsAuthenticated(true);
    }).catch((error)=>{
      setUser({})
      setIsAuthenticated(false);
    })
  },[])
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Posts/>}/>
          <Route path={'/signUp'} element={<SignUp/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/reset/:id' element={<ResetPassword/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/myposts' element={<MyPosts/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>

    </>
  )
}

export default App
