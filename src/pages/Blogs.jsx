import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Blogs.css";

// Google Sheet ID from published URL
// URL: https://docs.google.com/spreadsheets/d/e/2PACX-1vRYgsUTvxMlJSQtDRUCDsffaT8S0c3HRnhlmpB_cYvEZ9unmIG7LE37tsDxQntpjgq9ihWJJYfNO2u5/pubhtml
const GOOGLE_SHEET_ID = "2PACX-1vRYgsUTvxMlJSQtDRUCDsffaT8S0c3HRnhlmpB_cYvEZ9unmIG7LE37tsDxQntpjgq9ihWJJYfNO2u5";
const GOOGLE_SHEET_GID = "0"; // Usually 0 for the first sheet

// Helper function to convert Google Drive URL to direct image URL
const convertGoogleDriveUrl = (url) => {
  if (!url) return url;
  
  // If it's already a direct image URL, return as is
  if (url.match(/\.(jpg|jpeg|png|gif|webp|avif)(\?.*)?$/i)) {
    return url;
  }
  
  // Convert Google Drive share URL to direct image URL
  const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (driveIdMatch) {
    return `https://drive.google.com/uc?export=view&id=${driveIdMatch[1]}`;
  }
  
  // If it's already a uc?export URL, return as is
  if (url.includes('uc?export=view')) {
    return url;
  }
  
  return url;
};

// Helper function to parse CSV data from Google Sheets
// This properly handles multi-line content and quoted fields
const parseCSVData = (csvText) => {
  try {
    if (!csvText || csvText.trim() === '') {
      return [];
    }

    // Parse entire CSV respecting quotes that may span multiple lines
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    
    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      const nextChar = csvText[i + 1];
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          // Escaped quote (double quote)
          currentField += '"';
          i++; // Skip next quote
        } else {
          // Toggle quote state
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        // End of field (only if not in quotes)
        currentRow.push(currentField.trim());
        currentField = '';
      } else if ((char === '\n' || (char === '\r' && nextChar === '\n')) && !inQuotes) {
        // End of row (only if not in quotes)
        if (char === '\r') {
          i++; // Skip \n after \r
        }
        currentRow.push(currentField.trim());
        // Only add row if it has at least one non-empty field
        if (currentRow.some(field => field !== '')) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentField = '';
      } else {
        // Regular character
        currentField += char;
      }
    }
    
    // Add last field and row
    if (currentField || currentRow.length > 0) {
      currentRow.push(currentField.trim());
      if (currentRow.some(field => field !== '')) {
        rows.push(currentRow);
      }
    }
    
    if (rows.length < 2) {
      return [];
    }
    
    const blogPosts = [];
    // Skip header row (index 0), start from index 1
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      
      // Ensure we have at least 6 columns (id, title, excerpt, content, imageUrl, source)
      while (row.length < 6) {
        row.push('');
      }
      
      const id = row[0]?.trim() || "";
      const title = row[1]?.trim() || "";
      const excerpt = row[2]?.trim() || "";
      const content = row[3]?.trim() || "";
      const imageUrl = row[4]?.trim() || "";
      const source = row[5]?.trim() || "";
      
      // Only process rows that have at least an ID and title
      if (id !== "" && title !== "") {
        blogPosts.push({
          id: id || i.toString(),
          title: title,
          excerpt: excerpt,
          content: content,
          imageUrl: convertGoogleDriveUrl(imageUrl),
          source: source,
        });
      }
    }
    
    return blogPosts;
  } catch (error) {
    return [];
  }
};

const Blogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // Fetch data from published Google Sheet as CSV (works with web page publishing)
        const url = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEET_ID}/pub?output=csv&gid=${GOOGLE_SHEET_GID}`;
        
        const response = await axios.get(url, {
          headers: {
            'Accept': 'text/csv,text/plain,*/*'
          },
          responseType: 'text'
        });
        
        const posts = parseCSVData(response.data);
        
        if (posts.length === 0) {
          setError("No blog posts found. Please check that your Google Sheet has data starting from row 2.");
        } else {
          setBlogPosts(posts);
          setError(null);
        }
      } catch (err) {
        setError(`Failed to load blogs: ${err.message}. Please check the Google Sheet is published and accessible.`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (blog) {
    return (
      <div className="page-container">
        <section className="blog-detail-container" data-aos="fade-up">
          <button onClick={() => navigate("/blogs")} className="back-btn">
            Back to Blogs
          </button>
          <h2 className="blog-title">{blog.title}</h2>
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="blog-detail-img"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <article className="blog-content">
            {blog.content || blog.excerpt || "No content available."}
          </article>
        </section>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="page-container">
        <div className="blogs-inner">
          <h2 className="blogs-heading">Our Blogs</h2>
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p>Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="blogs-inner">
          <h2 className="blogs-heading">Our Blogs</h2>
          <div style={{ textAlign: "center", padding: "3rem", color: "#d35400" }}>
            <p>{error}</p>
            <p style={{ fontSize: "0.9rem", marginTop: "1rem", color: "#666" }}>
              Please make sure the Google Sheet is published and the Sheet ID is correct.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="blogs-inner">
        <h2 className="blogs-heading" data-aos="fade-up">
          Our Blogs
        </h2>
        {blogPosts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p>No blogs available yet.</p>
          </div>
        ) : (
          <div className="blogs-grid">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {post.imageUrl && post.imageUrl.trim() !== "" ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title || "Blog image"}
                    className="blog-img"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
                <div
                  className="blog-card-content"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {post.source && (
                    <h3 className="blog-source">{post.source}</h3>
                  )}
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
        )}
      </div>
    </div>
  );
};

export default Blogs;
