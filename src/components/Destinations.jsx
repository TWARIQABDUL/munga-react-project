import DestinationCard from '../utils/DestinationCard'
import { cityInfo } from '../data/cityinfo'
import { useEffect, useState } from 'react'

function Destinations() {
  const [choice, setChoice] = useState("price")
  const [cities, setCities] = useState([...cityInfo])
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    let filtered = [...cityInfo]
    switch (choice) {
      case "price":
        filtered = filtered.sort((a, b) => a.price - b.price)
        break
      case "location":
        filtered = filtered.sort((a, b) => a.location.localeCompare(b.location))
        break
      case "temperature":
        filtered = filtered.sort((a, b) => a.temperature - b.temperature)
        break
      default:
        break
    }
    if (searchTerm) {
      filtered = filtered.filter(city =>
        city.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setCities(filtered)
  }, [choice, searchTerm])

  return (
    <section className="services" id="department">
      <div className="title">
        <h3>Top Selling</h3>
        <p>Top Destinations</p>
      </div>
      <div className="filter">
        <select
          name=""
          id="locationFilter"
          value={choice}
          onChange={(ev) => setChoice(ev.target.value)}
        >
          <option value="price">Filter By Price</option>
          <option value="location">Filter By Location</option>
          <option value="temperature">Filter By Temperature</option>
        </select>
        <input type="text" placeholder="Search by city" id="search-input" value={searchTerm} onChange={(ev) => {
          setSearchTerm(ev.target.value);
          console.log(ev.target.value);
        }} /> 
      </div>
      <div className="card-container">
        <div className="destination-cards">
          {cities.map((city, index) => (
            <DestinationCard key={index} itemKey={index} aboutCity={city} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations