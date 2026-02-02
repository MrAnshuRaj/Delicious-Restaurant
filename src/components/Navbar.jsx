import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Events", path: "/events" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "FAQ", path: "/faq" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink
          to="/"
          className={`flex items-center gap-3 font-bold text-xl tracking-wide ${
            isScrolled ? "text-black" : "text-[#d4af37]"
          }`}
        >
          <img
            src={logo}
            alt="Restaurant Logo"
            className="h-10 w-10 object-cover rounded-full shadow overflow-hidden"
          />
          <span className="font-serif">Delicious</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all ${
                  isScrolled
                    ? "text-black hover:text-[#d4af37]"
                    : "text-white hover:text-[#f5d76e]"
                } ${
                  isActive
                    ? "after:w-full after:bg-[#d4af37]"
                    : "after:w-0 after:bg-[#d4af37] hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <NavLink
          to="/reservation"
          className={`hidden md:block px-6 py-2 rounded-full font-semibold text-sm transition ${
            isScrolled
              ? "bg-black text-[#d4af37] border border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
              : "bg-gradient-to-r from-[#d4af37] to-[#f5d76e] text-black hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
          }`}
        >
          Reserve Table
        </NavLink>

        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-[#d4af37]"}`}
          />
          <span
            className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-[#d4af37]"}`}
          />
          <span
            className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-[#d4af37]"}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isScrolled ? "bg-white" : "bg-black"}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `text-2xl tracking-wide transition ${
                isScrolled
                  ? "text-black hover:text-[#d4af37]"
                  : "text-white hover:text-[#f5d76e]"
              } ${isActive ? "text-[#d4af37]" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <NavLink
          to="/reservation"
          onClick={() => setIsMenuOpen(false)}
          className={`px-8 py-3 rounded-full font-semibold text-lg transition ${
            isScrolled
              ? "bg-black text-[#d4af37] border border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
              : "bg-gradient-to-r from-[#d4af37] to-[#f5d76e] text-black"
          }`}
        >
          Reserve Table
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
