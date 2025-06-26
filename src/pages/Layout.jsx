import React from 'react'
import NavContainer from '../components/NavContainer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <NavContainer/>
    <Outlet/>
    </>
  )
}

export default Layout