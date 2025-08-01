import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import PrivateRooms from "./pages/PrivateRoom";
import Sitemap from "./pages/Sitemap";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time — replace with actual data load if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/private-rooms" element={<PrivateRooms />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
