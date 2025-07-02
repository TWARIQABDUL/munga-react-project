import React, { useContext, useState } from 'react'
import NavContainer from '../components/NavContainer'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
  // const AuthCont = useContext(AuthContext)
  const names = 'Twariki'
  return (
    <>
        <NavContainer />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout