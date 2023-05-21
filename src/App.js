import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import Posts from './components/Posts';
import MyPosts from './components/MyPosts';
import ResetPassword from './components/ResetPassword';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Posts/>}/>
          <Route path={'/signUp'} element={<SignUp/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/reset' element={<ResetPassword/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/myposts' element={<MyPosts/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
