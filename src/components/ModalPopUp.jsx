import React from 'react'

function ModalPopUp() {
  return (
    <div class="modal-box" style="display: block;">
            <div class="modal-content">
            <div class="place-review">
                    <img id="main-image" src="images/dest2.png" alt="destination1.png"/>
                    <div class="small-cards">
                        <img src="images/dest1.png" class="previews" data-image="images/dest1.png" alt="destination1.png"/>
                        <img src="images/dest2.png" class="previews" data-image="images/dest2.png" alt="destination1.png"/>
                        <img src="images/dest1.png" class="previews" data-image="images/dest1.png" alt="destination1.png"/>
                    </div>
                </div>
                <div class="description">
                    <h3>London <span>rated</span></h3>
                    <p class="description"> abeautififul place to take vation do not forget to watch your back</p>
                    <p class="title">Usefull info</p>
                    <p class="info">population <span>190</span></p><p class="info">racism <span>2</span></p><p class="info">hospitality <span>Perfect</span></p>
                    
                    <p class="info">popular Places  <span class="place">place1</span><span class="place">place2</span><span class="place">place3</span></p>
                    <button class="buttons">Book Your Trip</button>
                </div>
                <div class="close">
                    <img src="images/icon-close.svg" alt="close modal"/>
                </div>
            </div>
        </div>
  )
}

export default ModalPopUp