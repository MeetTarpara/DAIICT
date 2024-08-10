
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import ExportSubsidy from './pages/ExportSubsidy';
import FertilizerSubsidy from './pages/FertilizerSubsidy';
import MainRoute from './pages/MainRoute';
import PowerSubsidy from './pages/PowerSubsidy';
import Profile from './pages/Profile';
import SeedSubsidy from './pages/SeedSubsidy';

import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import PlantDetect from './pages/PlantDetect';




export default function App() {
  return (
    <>

    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/' element={<MainRoute/>}>
          <Route path='export-subsidy' element={<ExportSubsidy/>}></Route>
          <Route path='power-subsidy' element={<PowerSubsidy/>}></Route>
          <Route path='seed-subsidy' element={<SeedSubsidy/>}></Route>
          <Route path='fertilizer-subsidy' element={<FertilizerSubsidy/>}></Route>

        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </>

  )
}

