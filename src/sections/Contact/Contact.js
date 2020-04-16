import React from "react";

import WaveEmoji from "../../components/WaveEmoji/WaveEmoji";

import "./index.scss";

const Contact = () => (
  <section id="contact">
    <h2 className="title">
      Want to say "Hi" <WaveEmoji />?
    </h2>
    <h2 className="title">Drop me a line!</h2>
    <p className="subtitle">
      Contact me via{" "}
      <a
        href="mailto:nicholasadamouemail@gmail.com?subject=Hello"
        aria-hidden="true"
        className="link"
      >
        email
      </a>{" "}
      for business inquiries.
    </p>
    <form
      action="https://formspree.io/nicholasadamouemail@gmail.com"
      method="POST"
    >
      <div className="field is-horizontal">
        <label className="field-label" htmlFor="name">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="name"
          />
        </div>
      </div>
      <div className="field is-horizontal">
        <label className="field-label" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="email"
          />
        </div>
      </div>
      <div className="field is-horizontal">
        <label className="field-label" htmlFor="message">
          Message
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="message"
            placeholder="Your message"
            aria-label="message"
          ></textarea>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Send Message
          </button>
        </div>
      </div>
      <input type="hidden" name="_next" value="form-success.html" />
      <input
        type="hidden"
        name="_subject"
        value="New Submission from nicholasadamou.com/"
      />
    </form>
  </section>
);

export default Contact;
