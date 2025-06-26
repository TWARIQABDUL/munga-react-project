import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'

function Home() {
  return (
    
      <main>
        <HeroSection/>
        <Services />
        <Destinations/>
        <Subscribe />
        <Footer />
      </main>
  )
}

export default Home