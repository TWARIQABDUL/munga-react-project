import React from 'react'
import email from "/assets/email.svg"
function Subscribe() {
  return (
    <section className="newsletter" id="news-lette">
            <div className="newsletter-content">
                <h3>Subscribe to our Newsletter</h3>
                <p>Get the latest news and updates about our services.</p>
                <form action="#" method="post">
                    <div className="email">
                        <img src={email} alt=""/>
                        <input type="email" placeholder="Enter your email" required/>
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
  )
}

export default Subscribe