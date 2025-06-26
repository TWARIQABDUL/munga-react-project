import React from 'react'
import NavContainer from './components/NavContainer'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Destinations from './components/Destinations'
function App() {
  return (
    <>
      <NavContainer />
      <main>
        <HeroSection />
        <Services />
        <Destinations/>
        <Subscribe />
        <Footer />
      </main>

    </>
  )
}

export default App



