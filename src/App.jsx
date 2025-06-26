import React from 'react'
import NavContainer from './components/NavContainer'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Destinations from './components/Destinations'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App



