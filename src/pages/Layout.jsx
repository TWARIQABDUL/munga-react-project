import NavContainer from '../components/NavContainer'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
        <NavContainer />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout