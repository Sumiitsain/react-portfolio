import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_dreef0r",
      "template_0g5uxjk",
      form.current,
      "SvEte4epmlv9T2meZ"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully ✅");
        form.current.reset();
      },
      (error) => {
        console.log("ERROR:", error);
        alert("Failed to send message ❌");
      }
    );
};

  return (
    <section className="contact">

      <div className="contact-heading">
        <h4>Get In Touch</h4>
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>thakursumit3253@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 79886 40544</p>
          </div>

          <div className="info-box">
            <h3>📍 Location</h3>
            <p>Haryana, India</p>
          </div>

        </div>

       <form ref={form} onSubmit={sendEmail} className="contact-form">

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <input
    type="text"
    name="title"
    placeholder="Subject"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message"
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>

      </div>

    </section>
  );
}

export default Contact;