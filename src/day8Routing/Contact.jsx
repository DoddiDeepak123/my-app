import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Form</h1>

        <form className="contact-form">
          <div className="form-group">
            <label>Name <span className="required">(Required)</span></label>
            <div className="name-fields">
              <input type="text" placeholder="First" />
              <input type="text" placeholder="Last" />
            </div>
          </div>

          <div className="form-group">
            <label>Email <span className="required">(Required)</span></label>
            <div className="email-fields">
              <input type="email" placeholder="Enter Email" />
              <input type="email" placeholder="Confirm Email" />
            </div>
          </div>

          <div className="form-group">
            <label>Comments <span className="required">(Required)</span></label>
            <textarea
              placeholder="Please let us know what's on your mind. Have a question for us? Ask away."
              rows="5"
            ></textarea>
            <small>0 of 400 max characters</small>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
