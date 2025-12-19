import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="page-container">
      <section className="contact-section">
        <h2>Contact Us</h2>
        
        <div className="contact-page-info">
          <div className="contact-page-item contact-page-item-top">
            <div className="contact-page-icon">🕒</div>
            <div className="contact-page-details">
              <h3>Opening Hours</h3>
              <p>Monday - Sunday<br />11:00 AM - 11:00 PM</p>
            </div>
          </div>

          <div className="contact-page-item contact-page-item-top">
            <div className="contact-page-icon">📞</div>
            <div className="contact-page-details">
              <h3>Phone</h3>
              <a
                href="https://wa.me/917891329789"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-phone-link"
              >
                +91 789-1329-789
              </a>
            </div>
          </div>

          <div className="contact-page-item contact-page-item-top">
            <div className="contact-page-icon">✉️</div>
            <div className="contact-page-details">
              <h3>Email</h3>
              <a href="mailto:hello@besta.co.in" className="contact-email-link">
                hello@besta.co.in
              </a>
            </div>
          </div>

          <div className="contact-page-item contact-page-item-address">
            <div className="contact-page-icon">📍</div>
            <div className="contact-page-details">
              <h3>Address</h3>
              <p>
                1, Sri, Door No.54, 20/6-10, Gurunanak Nagar Road,<br />
                beside DBS Bank, Kanaka Durga Gazetted Officers Colony,<br />
                Vijayawada, Andhra Pradesh 520007
              </p>
              <a
                href="https://maps.app.goo.gl/pRY5sjFAFR6DtgUXA?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="contact-buttons">
          <a
            href="https://www.eazydiner.com/vijayawada/besta-restaurant-gurunanak-colony-vijayawada-708012"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button reserve-button"
          >
            Reserve Your Table
          </a>
          <a
            href="https://order.besta.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button order-button"
          >
            Order Online
          </a>
        </div>
      </section>
    </div>
  );
}
