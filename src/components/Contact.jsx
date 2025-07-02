import React from 'react'
import InputGroup from './InputGroup'

function Contact() {
  return (
    <div class="container">
            <div class="form-container">
                <h2>Contact Us</h2>
                <form action="#" method="post">
                    <InputGroup label="Name" type="text" />
                    <InputGroup label="Email" type="email" />
                    <div class="form-group">
                        <label forHtml="message">Message</label>
                        <textarea id="message" name="message" rows="4" required=""></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
  )
}

export default Contact