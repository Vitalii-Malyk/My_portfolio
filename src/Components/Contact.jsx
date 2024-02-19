import React from "react";
import { ReactComponent as LinkedInn } from "../Helpers/icons/mdi--linkedin.svg";
import { ReactComponent as GitHub } from "../Helpers/icons/bxl--github.svg";
import { ReactComponent as Telegram } from "../Helpers/icons/ic--baseline-telegram.svg";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <h4>Let's Work Together</h4>
        <div className="contact-list">
          <li>
            <a href="#">Plzen</a>
          </li>
          <li>
            <a href="mailto: malyk.vitaliy@gmail.com">
              malyk.vitaliy@gmail.com
            </a>
          </li>
          <li>
            <a href="#">+420736746211</a>
          </li>
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/vitalii-malyk/" target="blank">
            <i className="bx bxl-linkedin">
              <LinkedInn />
            </i>
          </a>
          <a href="https://github.com/Vitalii-Malyk" target="blank">
            <i className="bx bxl-github">
              <GitHub />
            </i>
          </a>
          <a href="https://t.me/Vit_lii_M" target="blank">
            <i className="bx bxl-telegram">
              <Telegram />
            </i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form action="">
          <input type="email" placeholder="Enter Your Email" required />
          <input type="" placeholder="Enter Your Subject" />
          <textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
