import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo.webp";
import logoWhite from "@/assets/logoWhite.webp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Brands", path: "/brands" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-black/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={scrolled ? logo : logoWhite}
            alt="Big Hill Lanka"
            className="h-12 w-auto md:h-14 object-contain transition-all duration-300"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 relative ${
                  active
                    ? scrolled
                      ? "text-primary font-semibold"
                      : "text-white font-semibold"
                    : scrolled
                      ? "text-charcoal hover:text-primary"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300 ${
                    active ? (scrolled ? "w-4 bg-primary" : "w-4 bg-white") : "w-0 bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-0.5"
          >
            Partner With Us
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
        >
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-gray-100 bg-white shadow-xl transition-all duration-300 ease-in-out ${
          menuOpen
            ? "visible opacity-100 max-h-125 pointer-events-auto"
            : "invisible opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                  active ? "bg-primary/10 text-primary font-semibold" : "text-charcoal hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="mt-2 px-5 py-3 rounded-full bg-primary text-white text-sm font-semibold text-center hover:bg-primary-dark transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
}
