import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Menu.css";

// Image imports - Add your 4 menu images here
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";

const menuImages = [
  { src: menu1, alt: "Menu Page 1" },
  { src: menu2, alt: "Menu Page 2" },
  { src: menu3, alt: "Menu Page 3" },
  { src: menu4, alt: "Menu Page 4" },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="menu-page">
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">Our Menu</h2>
        </div>

        <div className="menu-gallery">
          {menuImages.map((image, index) => (
            <div
              key={index}
              className="menu-image"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
