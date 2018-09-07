import React from 'react'

const ContactPage = () => (
  <div className="container">
    <h2>Contact</h2>
    <p>Use this form to get in touch with us.</p>

    <form id="contact">
      <div className="row">
        <div className="six columns">
          <label htmlFor="name">Your name</label>
          <input
            required=""
            className="u-full-width"
            type="text"
            placeholder="Bob Smith"
            id="name"
          />
        </div>
        <div className="six columns">
          <label htmlFor="email">Your email</label>
          <input
            required=""
            className="u-full-width"
            type="email"
            placeholder="bob@mailbox.com"
            id="email"
          />
        </div>
      </div>
      <label htmlFor="message">Message</label>
      <textarea
        required=""
        className="u-full-width"
        placeholder="Write us a message here"
        id="message"
      />
      <input className="button-primary" type="submit" value="Submit" />
    </form>
  </div>
)

export default ContactPage
