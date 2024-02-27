import React, { useState } from "react";
import { ReactComponent as LinkedInn } from "../Helpers/icons/mdi--linkedin.svg";
import { ReactComponent as GitHub } from "../Helpers/icons/bxl--github.svg";
import { ReactComponent as Telegram } from "../Helpers/icons/ic--baseline-telegram.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setIsSubmitted(true);
    clearForm();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <h4>Let's Work Together</h4>
        <ul className="contact-list">
          <li>
            <a
              href="https://maps.app.goo.gl/HCpjD4oSEwGvknGf8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pilsen, Czech Republic
            </a>
          </li>
          <li>
            <a href="mailto:malyk.vitaliy@gmail.com">malyk.vitaliy@gmail.com</a>
          </li>
          <li>
            <a href="tel:+420736746211">+420736746211</a>
          </li>
        </ul>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/vitalii-malyk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin">
              <LinkedInn />
            </i>
          </a>
          <a
            href="https://github.com/Vitalii-Malyk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github">
              <GitHub />
            </i>
          </a>
          <a
            href="https://t.me/Vit_lii_M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram">
              <Telegram />
            </i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            pattern="([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            value={formData.subject}
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            name="message"
            id=""
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
        {isSubmitted && (
          <p style={{ color: "gray", alignItems: "end" }}>Send successful!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
