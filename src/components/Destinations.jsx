import React from 'react'
import dest1 from '../assets/dest1.png'
import dest2 from '../assets/dest2.png'
import DestinationCard from '../utils/DestinationCard'
function Sestinations() {
  return (
    <section className="services" id="department">
      <div className="title">
        <h3>Top Selling</h3>
        <p>Top Destinations</p>
      </div>
      <div className="filter">
        <select name="" id="locationFilter">
          <option value="price">Fitler By Price</option>
          <option value="location">Fitler By Location</option>
          <option value="temperature">Fitler By Temprature</option>
        </select>
        <input type="text" placeholder="Search by city" id="search-input" />
      </div>
      <div className="card-container">

        <div className="destination-cards">
          <DestinationCard/>
          <DestinationCard/>
          <DestinationCard/>

          </div>
      </div>
    </section>
  )
}

export default Sestinations