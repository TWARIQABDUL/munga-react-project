import React from 'react'
import dest1 from '../assets/dest1.png'

function DestinationCard() {
    const sorry = ()=>{
        console.log("yoo");
        
    }
    return (
        <>
            <div className="card" data-location="Kigali" onClick={sorry
            }>
                <img src={dest1} />
                <div className="destination-info">
                    <p>Kigali<span>$100</span></p>
                    <p>Humidity<span>53 🌡</span></p>
                    <p>Curentntly<span>sunny ☀</span></p>
                    <p>temp<span>295 🌡</span></p>
                </div>
            </div>
        </>
    )
}

export default DestinationCard