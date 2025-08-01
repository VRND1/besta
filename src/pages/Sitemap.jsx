import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sitemap.css";

export default function Sitemap() {
  const mainPages = [
    {
      path: "/",
      title: "Home",
      description: "Welcome to Besta Restaurant - Authentic Indian Cuisine",
    },
    {
      path: "/about",
      title: "About Us",
      description: "Learn about our story, mission, and culinary philosophy",
    },
    {
      path: "/menu",
      title: "Menu",
      description:
        "Explore our diverse menu featuring traditional and modern Indian dishes",
    },
    {
      path: "/blogs",
      title: "Blog",
      description:
        "Read our latest articles about food, culture, and dining experiences",
    },
    {
      path: "/contact",
      title: "Contact",
      description: "Get in touch with us for reservations and inquiries",
    },
    {
      path: "/private-rooms",
      title: "Private Functions",
      description: "Book our private dining rooms for special events",
    },
  ];

  const externalLinks = [
    {
      url: "https://www.facebook.com/profile.php?id=61578627234909",
      title: "Facebook",
      description: "Follow us on Facebook for updates and special offers",
    },
    {
      url: "https://www.instagram.com/besta_restaurant?igsh=bzFjOTBtZGl4OHJm",
      title: "Instagram",
      description:
        "Follow us on Instagram for food photos and behind-the-scenes content",
    },
    {
      url: "https://youtube.com/@besta-restaurant?feature=shared",
      title: "YouTube",
      description:
        "Watch our videos on YouTube for cooking tips and restaurant tours",
    },
    {
      url: "https://wa.me/917891329789",
      title: "WhatsApp",
      description: "Contact us directly on WhatsApp for quick reservations",
    },
    {
      url: "https://maps.app.goo.gl/pRY5sjFAFR6DtgUXA?g_st=ipc",
      title: "Google Maps",
      description: "Find our location on Google Maps",
    },
    {
      url: "mailto:hello@besta.co.in",
      title: "Email",
      description: "Send us an email at hello@besta.co.in",
    },
  ];

  return (
    <div className="sitemap-container">
      <div className="sitemap-header">
        <h1>Sitemap</h1>
        <p>
          Complete guide to all pages and features on Besta Restaurant website
        </p>
      </div>

      <div className="sitemap-content">
        {/* Main Pages */}
        <section className="sitemap-section">
          <h2>Main Pages</h2>
          <div className="sitemap-grid">
            {mainPages.map((page, index) => (
              <div key={index} className="sitemap-item">
                <Link to={page.path} className="sitemap-link">
                  <h3>{page.title}</h3>
                  <p>{page.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* External Links */}
        <section className="sitemap-section">
          <h2>External Links</h2>
          <div className="sitemap-grid">
            {externalLinks.map((link, index) => (
              <div key={index} className="sitemap-item">
                <a
                  href={link.url}
                  className="sitemap-link external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="sitemap-section">
          <h2>Contact Information</h2>
          <div className="contact-info-sitemap">
            <div className="contact-item-sitemap">
              <h3>Address</h3>
              <p>
                1, Sri, Door No.54, 20/6-10, Gurunanak Nagar Road, beside DBS
                Bank, Kanaka Durga Gazetted Officers Colony.
              </p>
              <p>Vijayawada, Andhra Pradesh 520007</p>
            </div>
            <div className="contact-item-sitemap">
              <h3>Phone</h3>
              <p>+91 789-1329-789</p>
            </div>
            <div className="contact-item-sitemap">
              <h3>Email</h3>
              <p>hello@besta.co.in</p>
            </div>
            <div className="contact-item-sitemap">
              <h3>Opening Hours</h3>
              <p>7 Days a Week: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
