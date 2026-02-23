import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-me">
        <h1>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=enmanueljiron12@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact me
  <RiSendPlaneFill className="icon" size={30} />
</a>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
