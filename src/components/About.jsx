import React from 'react'
import about_image from "/assets/hero-image.png" 
function About() {
  return (
    <section className="about-section">
  <div className="text">
    <h2>About Traver</h2>
    <p>At Traver, we believe travel is more than just visiting places – it's about creating memories, exploring new cultures, and transforming perspectives. Our platform offers curated travel experiences to make your journeys seamless, safe, and unforgettable.</p>
    <ul>
      <li>🌍 Handpicked Destinations</li>
      <li>✈️ Seamless Booking</li>
      <li>🛡️ Reliable Support</li>
    </ul>
    <button className="learn-more">Learn More</button>
  </div>
  <div className="image">
  <img src={about_image}alt="About Us"/>
  </div>
</section>
  )
}

export default About