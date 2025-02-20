import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                 `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6 mt-12 transition-transform duration-300 ease-in-out">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Articles", path: "/articles" },
          { name: "Contact", path: "/contact" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transition-opacity transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
