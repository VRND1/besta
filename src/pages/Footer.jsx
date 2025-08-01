import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Restaurant Info Section */}
        <div className="footer-section">
          <h3>Besta Restaurant</h3>
          <p className="footer-description">
            Experience authentic Indian cuisine with modern twists. From
            traditional favorites to innovative creations, we bring the flavors
            of India to your table.
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61578627234909"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/besta_restaurant?igsh=bzFjOTBtZGl4OHJm"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://youtube.com/@besta-restaurant?feature=shared"
              className="social-link"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/menu">Menu</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">About Us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>
                  1, Sri, Door No.54, 20/6-10, Gurunanak Nagar Road, beside DBS
                  Bank, Kanaka Durga Gazetted Officers Colony.
                </p>
                <p>Vijayawada, Andhra Pradesh 520007</p>
                <a
                  href="https://maps.app.goo.gl/pRY5sjFAFR6DtgUXA?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-map-link"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <a
                  href="https://wa.me/917891329789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +91 789-1329-789{" "}
                  <i
                    className="fab fa-whatsapp"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <a href="mailto:hello@besta.co.in" className="email-link">
                  hello@besta.co.in{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <div className="opening-hours">
            <div className="hours-item">
              <span className="day">Monday - Sunday</span>
              <span className="time">11:00 AM - 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} Besta Restaurant. All rights
            reserved. | Developed By:{" "}
            <a
              href="https://vrnd.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              BrandWeave Tech Solutions
            </a>
          </p>
          <div className="footer-bottom-links">
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
