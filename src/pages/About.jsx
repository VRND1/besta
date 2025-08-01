import React, { useEffect } from "react";
import "../styles/About.css";
import teamImg from "../assets/Thai Garlic Soup 2.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only happens once when visible
    });
  }, []);

  return (
    <div className="page-container">
      <section className="about-section">
        <div className="about-img" data-aos="fade-right">
          <img src={teamImg} alt="Team" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h2>Our Story</h2>
          <p>
            For over three decades, our Boyapati Dairy has been a trusted
            presence in your daily nourishment. Our journey began with a simple
            thought - To bring you purest quality food that we make at home to
            your life. Our Goal - To be a healthy change in your life. Every.
            Single. Day.
          </p>
          <p>
            Now, we are proud to bring the next part of our nourishment journey
            to you. Besta - The Indian Kitchen. This is beyond a restaurant.
            This is our way of celebrating our cultural mantra “Atithi Devo
            Bhava”. This is a beautifully crafted place to bring warm
            hospitality like how we welcome guests to our home, heartfelt
            service like how we thoughtfully take care of them, and a selection
            of contemporary Indian food that we hope will become your
            everyday favorites.
          </p>
        </div>
      </section>
    </div>
  );
}
