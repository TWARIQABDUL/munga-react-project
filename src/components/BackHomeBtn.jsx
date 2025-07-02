import React from 'react'
import img_backhome from '/assets/back.svg'

function BackHomeBtn() {
    return (
        <div className="back-button" id="back-button">
            <img src={img_backhome} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} alt="" />
            {/* <img src={img_backhome}  onClick={()=>window.scrollTo(0,0,behavior="smooth")} alt="" /> */}
        </div>
    )
}

export default BackHomeBtn