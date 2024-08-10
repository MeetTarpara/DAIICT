import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import MainRoute from './pages/MainRoute';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <>
   
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/home' element={<MainRoute/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </>
    
  )
}

 