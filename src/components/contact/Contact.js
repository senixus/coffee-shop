import React from "react";

import Navbar from "../navbar/Navbar";

import "./contact.scss";

const Contact = () => {
  return (
    <main className="contact">
      <Navbar />
      <div className="contact-content">
        <form
          className="contact-form"
          action="https://formspree.io/f/xaylzaba"
          method="POST"
        >
          <div className="contact-form__group">
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="contact-form__group">
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="contact-form__group">
            <label htmlFor="message">Message : </label>
            <textarea name="message" required placeholder="Message" />
          </div>
          <div className="contact-form__group ">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
