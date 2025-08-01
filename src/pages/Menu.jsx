import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Menu.css";

// Image imports
import menu1 from "../assets/1.png";
import menu2 from "../assets/2.png";
import menu3 from "../assets/3.png";
import menu4 from "../assets/4.png";
import menu5 from "../assets/5.png";
import menu6 from "../assets/6.png";
import menu7 from "../assets/7.png";
import menu8 from "../assets/8.png";
import menu9 from "../assets/9.png";
import menu10 from "../assets/10.png";
import menu11 from "../assets/11.png";
import menu12 from "../assets/12.png";
import menu13 from "../assets/13.png";
import menu14 from "../assets/14.png";
import menu15 from "../assets/15.png";
import menu16 from "../assets/16.png";

const menuImages = [
  { src: menu1, alt: "Menu Page 1" },
  { src: menu2, alt: "Menu Page 2" },
  { src: menu3, alt: "Menu Page 3" },
  { src: menu4, alt: "Menu Page 4" },
  { src: menu5, alt: "Menu Page 5" },
  { src: menu6, alt: "Menu Page 6" },
  { src: menu7, alt: "Menu Page 7" },
  { src: menu8, alt: "Menu Page 8" },
  { src: menu9, alt: "Menu Page 9" },
  { src: menu10, alt: "Menu Page 10" },
  { src: menu11, alt: "Menu Page 11" },
  { src: menu12, alt: "Menu Page 12" },
  { src: menu13, alt: "Menu Page 13" },
  { src: menu14, alt: "Menu Page 14" },
  { src: menu15, alt: "Menu Page 15" },
  { src: menu16, alt: "Menu Page 16" },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="menu-page">
      {" "}
      {/* ADD THIS WRAPPER */}
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
              data-aos-delay={index * 100}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div> // CLOSE menu-page wrapper
  );
};

export default Menu;
