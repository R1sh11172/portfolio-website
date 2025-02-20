import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-red-200 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="font-mono text-xl font-bold text-black">
              Rishi Aniga
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-red-500 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(menuOpen => !menuOpen)}
              aria-label="Open Mobile Menu"
            >
              ☰
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-red-500 transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-red-500 transition-colors">
                Projects
              </Link>
              <Link to="/articles" className="text-gray-800 hover:text-red-500 transition-colors">
                Articles
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-red-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};
