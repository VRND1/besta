import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";

import hero1 from "../assets/slide1.webp";
import hero2 from "../assets/Orange Chicken.webp";
import hero3 from "../assets/Paneer Butter Masala.webp";
import eatTogetherImg from "../assets/eat.webp";
import galleryImage from "../assets/Pineapple.webp";
import manchowSoup from "../assets/Manchow Soup.avif";
import backgroundImage from "../assets/room1.webp";
import chickendumBiryani from "../assets/chicken dum biryani.webp";
import dynamateChicken from "../assets/Dynamite Chicken.webp";
import butterchicken from "../assets/Butter.webp";
import paneertikka from "../assets/Paneer.webp";
import tandooriChicken from "../assets/Tandoori.webp";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const specialities = [
    {
      name: "Manchow Soup",
      description:
        "A spicy, dark Indo-Chinese soup loaded with vegetables and garnished with crunchy fried noodles.",
      image: manchowSoup,
      category: "Soups",
    },
    {
      name: "Butter Chicken",
      description:
        "Juicy tandoori-grilled chicken pieces simmered in creamy tomato gravy - a true Punjabi classic.",
      image: butterchicken,
      category: "Main Course",
    },
    {
      name: "Chicken Dum Biryani",
      description:
        "Classic Hyderabadi dum biryani with long-grain basmati rice layered with spiced chicken.",
      image: chickendumBiryani,
      category: "Biryanis",
    },
    {
      name: "Dynamite Chicken",
      description:
        "Our signature 'Dynamite' appetizer with crispy fried chicken tossed in creamy, fiery chili sauce.",
      image: dynamateChicken,
      category: "Appetizers",
    },
    {
      name: "Paneer Tikka Masala",
      description:
        "Tandoor-grilled paneer cubes simmered in spiced tomato gravy - a vegetarian delight.",
      image: paneertikka,
      category: "Main Course",
    },
    {
      name: "Tandoori Chicken",
      description:
        "The quintessential tandoor dish - whole chicken marinated in spiced yogurt and roasted to perfection.",
      image: tandooriChicken,
      category: "Tandoori",
    },
  ];

  return (
    <>
      <section className="hero-carousel">
        <Slider {...settings}>
          {[hero1, hero2, hero3].map((img, index) => (
            <div key={index} className="hero-slide">
              <img src={img} alt={`Slide ${index + 1}`} className="hero-img" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">Welcome To Besta</h1>
                  <p className="hero-subtitle">The Indian Kitchen</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Fixed Menu Button */}
      <div className="fixed-menu-button">
        <Link to="/menu" className="menu-button">
          MENU
        </Link>
      </div>

      <section
        className="parallax-section"
        style={{ backgroundImage: `url(${eatTogetherImg})` }}
      >
        <div className="parallax-overlay" data-aos="fade-up">
          <h2 className="headline">EAT TOGETHER</h2>
          <p>
            We take inspiration from an age-old approach to dining in which we
            encourage our guests to choose a variety of appetizers and entrées
            to share with their dining companions.
          </p>
        </div>
      </section>

      <section
        className="speciality-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="speciality-container">
          <div className="speciality-header" data-aos="fade-up">
            <div className="speciality-overlay">
              <h1>Our Speciality</h1>
              <p>
                Discover our signature dishes crafted with passion and authentic
                flavors
              </p>
            </div>
          </div>
          <div className="speciality-grid">
            {specialities.map((dish, index) => (
              <div
                key={index}
                className="speciality-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="speciality-image">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200?text=Dish+Image";
                    }}
                  />
                  <div className="category-badge">{dish.category}</div>
                </div>
                <div className="speciality-content">
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="parallax-section"
        style={{ backgroundImage: `url(${galleryImage})` }}
      >
        <div className="parallax-overlay" data-aos="fade-up">
          <h2 className="headline">FLAVORS THAT INSPIRE</h2>
          <p>
            Experience signature dishes crafted from fresh ingredients and
            timeless techniques.
          </p>
        </div>
      </section>
    </>
  );
}
