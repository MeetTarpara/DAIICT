import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function MainRoute() {
  return (
    <div className='flex flex-row jusfity-between'>
      <Header/>
      <Outlet/>
    </div>
  )
}
