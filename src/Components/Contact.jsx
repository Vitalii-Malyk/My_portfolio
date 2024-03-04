import React, { useState } from "react";
import { ReactComponent as LinkedInn } from "../Helpers/icons/mdi--linkedin.svg";
import { ReactComponent as GitHub } from "../Helpers/icons/bxl--github.svg";
import { ReactComponent as Telegram } from "../Helpers/icons/ic--baseline-telegram.svg";

const Contact = () => {
  const [client, setClient] = useState({ name: "", email: "", message: "" });
  const [sentStatus, setSentStatus] = useState("");
  const [valid, setValid] = useState(false);

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
        <form
          action="https://formspree.io/f/meqykydd"
          onSubmit={async (el) => {
            el.preventDefault();
            const options = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(client),
            };

            await fetch("https://formspree.io/f/meqykydd", options)
              .then((response) => {
                if (response.ok) {
                  setSentStatus(true);
                  document.querySelector("#formU").reset();
                }
                return response.json();
              })
              .catch(() => setSentStatus(false));
          }}
          method="post"
          id="formU"
        >
          <input
            type="text"
            name="name"
            onChange={(el) => {
              setClient({
                ...client,
                name: el.target.value,
              });
              if (
                el.target.value !== "" &&
                client.email !== "" &&
                client.message !== ""
              ) {
                setValid(true);
              } else {
                setValid(false);
              }
            }}
            placeholder="Your Name"
            min="2"
            maxLength="30"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={(el) => {
              setClient({
                ...client,
                email: el.target.value,
              });
              if (
                el.target.value !== "" &&
                client.name !== "" &&
                client.message !== ""
              ) {
                setValid(true);
              } else {
                setValid(false);
              }
            }}
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            id=""
            className="userSMS "
            onChange={(el) => {
              setClient({
                ...client,
                message: el.target.value,
              });
              if (
                el.target.value !== "" &&
                client.email !== "" &&
                client.name !== ""
              ) {
                setValid(true);
              } else {
                setValid(false);
              }
            }}
            cols="40"
            rows="10"
            placeholder="Hey I'd like to connect to..."
            required
          />
          {sentStatus && <p>Your Message was sent successfully</p>}
          {sentStatus === false && (
            <p>
              Uups! Could not sent your Message please check your connection and
              try again!
            </p>
          )}
          <button
            className={valid ? "btn" : "btn"}
            disabled={!valid}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
