import React from 'react'
import Header from './Ui/Header'
import Footer from './Ui/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
