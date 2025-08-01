import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone: "",
    Enquiryfor: "Reservation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // EmailJS configuration
    const serviceId = "service_4syn2k6";
    const templateId = "template_extxddr";
    const publicKey = "Z9Emn7EtRWRaO7_D1";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          Phone: "",
          Enquiryfor: "Reservation",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="page-container">
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            type="tel"
            name="Phone"
            placeholder="Your Phone Number"
            value={formData.Phone}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="enquiryFor" style={{ marginTop: "10px" }}>
            Enquiry For*
          </label>
          <select
            name="Enquiryfor"
            id="enquiryFor"
            value={formData.Enquiryfor}
            onChange={handleInputChange}
            required
            className="custom-dropdown"
          >
            <option value="Reservation">Reservation</option>
            <option value="Feedback">Feedback</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="error-message">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
