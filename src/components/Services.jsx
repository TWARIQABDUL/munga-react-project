import React from 'react'
import Card from './Card'

function Services() {
  return (
     <section className="services" id="services">
            <div className="title">
                <h3>CATEGORY</h3>
                <p>We Offer Best Services</p>
            </div>
            <div className="container">

                <div className="service-cards">
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>
        </section>
  )
}

export default Services