import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import picSpices from "../assets/picSpices.avif";
import picPlating from "../assets/picPlating.avif";
import logo from "../assets/Besta Logo-5.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Blogs.css";

const blogPosts = [
  {
    id: 1,
    title: "Spices That Define South Indian Cuisine",
    excerpt: "Explore the essential spices behind every authentic dish.",
    content: `South Indian cuisine is a symphony of flavors powered by a wide variety of spices. From the earthiness of mustard seeds to the heat of dried red chilies, each spice plays a critical role in the taste and aroma of the dishes. Curry leaves add an unmistakable freshness, while tamarind lends its signature tang.

Some of the most commonly used spices include:
- Mustard seeds: Popped in oil for a nutty base.
- Dried red chilies: Used whole or ground to add heat.
- Curry leaves: Aromatic and essential in tempering.
- Fenugreek: Slightly bitter, used in pickles and stews.
- Asafoetida: A pungent spice that enhances depth.

Together, they create the rich, complex flavors that make South Indian food truly unforgettable.`,
    image: picSpices,
    source: "SpiceTales Weekly",
  },
  {
    id: 2,
    title: "Modern Plating for Traditional Meals",
    excerpt: "A guide to elevating presentation while staying true to roots.",
    content: `Presentation matters—especially in a world where people eat with their eyes before their mouths. At Besta, we believe in preserving the heart of tradition while introducing elegance through thoughtful plating.

Here are ways we modernize South Indian presentation:
- Using minimalist white ceramic platters to contrast vibrant curries.
- Creating symmetrical arrangements with dosas, chutneys, and sambhar.
- Garnishing with microgreens or edible flowers for freshness.
- Drizzling sauces artistically without overpowering the dish.

This approach elevates traditional meals into fine-dining experiences while maintaining their cultural essence.`,
    image: picPlating,
    source: "The Art of Plating South",
  },
  {
    id: 3,
    title: "Why Besta Means More Than Food",
    excerpt: "Our philosophy in crafting a complete dining experience.",
    content: `Besta isn't just a place to eat—it's a celebration of culture, community, and creativity. Every detail, from the playlist to the plating, is crafted to immerse you in a story that connects past and present.

Our philosophy includes:
- Honoring age-old recipes passed down through generations.
- Sourcing ingredients locally and ethically.
- Fostering community through events and partnerships.
- Focusing on hospitality and connection, not just transactions.

At Besta, food is only the beginning of the journey. It's about how you feel when you're here—seen, nourished, and inspired.`,
    image: logo,
    source: "Culinary Narratives Journal",
  },
];

const Blogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  if (blog) {
    return (
      <div className="page-container">
        <section className="blog-detail-container" data-aos="fade-up">
          <button onClick={() => navigate("/blogs")} className="back-btn">
            Back to Home
          </button>
          <h2 className="blog-title">{blog.title}</h2>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-detail-img"
            />
          )}
          <article className="blog-content">
            {blog.content || blog.excerpt || "No content available."}
          </article>
        </section>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="blogs-inner">
        <h2 className="blogs-heading" data-aos="fade-up">
          Our Blogs
        </h2>
        <div className="blogs-grid">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={post.image}
                alt={post.title}
                className="blog-img"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <div
                className="blog-card-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="blog-source">{post.source}</h3>
                <Link
                  to="/blogs"
                  state={{ blog: post }}
                  className="blog-title-link"
                >
                  {post.title}
                </Link>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to="/blogs" state={{ blog: post }} className="read-more">
                  Read story &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
