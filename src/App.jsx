import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Learning from './components/Learning'
import AuthProvider from './components/Context'
function App() {
  // const Authcont = useContext(AuthContext)
  // console.log(Authcont);
  
  return (
    <>
{/* <AuthProvider> */}
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs/>} />
        </Route>
        <Route path="/register" element={<Login/>} />
        {/* <Route path="/learning" element={<Learning/>} /> */}

      </Routes>
      </AuthProvider>

    </BrowserRouter>
    {/* </AuthProvider> */}

    </>
  )
}

export default App



