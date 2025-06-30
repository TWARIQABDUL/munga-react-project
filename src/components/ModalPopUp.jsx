import React, { useState } from 'react'
import close from "/assets/icon-close.svg"
import { cityInfo } from "../data/cityinfo";
import YellowButons from '../utils/YellowButons';
function ModalPopUp({ controlModal, itemKey }) {
    const [mainImage,setMainImage]=useState(cityInfo[itemKey].icon)
    console.log(cityInfo[itemKey]);

    return (
        <div className="modal-box">
            <div className="modal-content">
                <div className="place-review">
                    <img id="main-image" src={mainImage} alt="destination1.png" />
                    <div className="small-cards">
                        {cityInfo[itemKey].metaImages.map((im,index) => <img key={index} src={im} onClick={()=>setMainImage(im)} className="previews" data-image="images/dest1.png" alt="destination1.png" />)}
                    </div>
                </div>
                <div className="description">
                    <h3>{cityInfo[itemKey].location} <span>rated</span></h3>
                    <p className="description"> {cityInfo[itemKey].description} </p>
                    <p className="title">Usefull info</p>
                    {Object.entries(cityInfo[itemKey].metaDatas).map(([key,value])=>{
                        
                       return  <p key={key} className="info">{key} <span>{value}</span></p>
                    })}
                    <p className="info">popular Places  
                        {cityInfo[itemKey].popularPlaces.map((place, index) => {
                            return <span key={index} className="place">{place}</span>
                        })}
                        </p>
                        {/* <span className="place">place1</span><span className="place">place2</span><span className="place">place3</span></p> */}
                    <YellowButons text="Continue to Bookings" className="buttons"/>
                    {/* <button className="buttons">Book Your Trip</button> */}
                </div>
                <div className="close" onClick={controlModal}>
                    <img src={close} alt="close modal" />
                </div>
            </div>
        </div>
    )
}

export default ModalPopUp