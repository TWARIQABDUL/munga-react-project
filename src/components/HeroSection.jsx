import React from 'react'
import img_backhome from '/assets/back.svg'
import hero_img from '/assets/hero-image.png'
import poly from '/assets/poly.svg'
import AnimatedParagragh from '../utils/AnimatedParagragh'
import YellowButons from '../utils/YellowButons'

function HeroSection() {
    return (
        <>
            <div className="back-button" id="back-button">
                <img src={img_backhome} alt="" />
            </div>
            <section className="hero">
                <div className="hero-content">
                    <div className="text-container">
                        <h1>Welcome to Traver</h1>

                        <AnimatedParagragh />
                        <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                            listening. Park gate sell they west hard for the.</p>
                        <div className="buttons">
                            <YellowButons text="Find out more" action={() => {
                                document.getElementById("department").scrollIntoView({ behavior: "smooth" })
                            }} />
                            {/* <button className="more">Find out more</button> */}
                            <button className="play"><span><img src={poly} alt="" /></span> Play Demo</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={hero_img} alt="Hero Image" />
                    </div>

                </div>

            </section>

        </>
    )
}

export default HeroSection