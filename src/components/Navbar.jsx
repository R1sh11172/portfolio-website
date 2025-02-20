// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="fixed top-0 w-full z-40 bg-white border-b border-red-200 shadow-md">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <a href="#home" className="font-mono text-xl font-bold text-black">
//             Rishi Aniga
//           </a>

//           {/* Mobile Menu Button */}
//           <div
//             className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-red-500"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             &#9776;
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#home"
//               className="text-gray-800 hover:text-red-500 transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className="text-gray-800 hover:text-red-500 transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="#projects"
//               className="text-gray-800 hover:text-red-500 transition-colors"
//             >
//               Projects
//             </a>
//             <a
//               href="#articles"
//               className="text-gray-800 hover:text-red-500 transition-colors"
//             >
//               Articles
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-800 hover:text-red-500 transition-colors"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white border-b border-red-200 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-mono text-xl font-bold text-black">
            Rishi Aniga
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-red-500"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-red-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-red-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 hover:text-red-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/articles"
              className="text-gray-800 hover:text-red-500 transition-colors"
            >
              Articles
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden">
          <div className="absolute right-0 w-64 bg-white h-full p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 text-red-500 text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col space-y-4 mt-10">
              <Link to="/" className="text-gray-800 hover:text-red-500 text-lg" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-red-500 text-lg" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-red-500 text-lg" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link to="/articles" className="text-gray-800 hover:text-red-500 text-lg" onClick={() => setMenuOpen(false)}>
                Articles
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-red-500 text-lg" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

