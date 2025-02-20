import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const AppRoutes = () => {
  return (
    <Router basename = "/portfolio-website">
      <Navbar menuOpen={false} setMenuOpen={() => {}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};
