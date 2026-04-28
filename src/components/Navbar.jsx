import { useEffect, useState } from "react";
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

function Navbar() {
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

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-secondary py-3 shadow-lg shadow-charcoal/5" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={scrolled ? logo : logoWhite}
              alt="Big Hill Lanka"
              className="h-12 w-auto object-contain transition-all duration-300 md:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
                    active
                      ? scrolled
                        ? "font-semibold text-primary"
                        : "font-semibold text-secondary"
                      : scrolled
                        ? "text-charcoal hover:text-primary"
                        : "text-secondary/90 hover:text-secondary"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300 ${
                      active ? (scrolled ? "w-4 bg-primary" : "w-4 bg-secondary") : "w-0 bg-transparent"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-lg hover:shadow-charcoal/10"
            >
              Partner With Us
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`rounded-lg p-2 transition-colors duration-300 md:hidden ${
              scrolled ? "text-charcoal" : "text-secondary"
            }`}
          >
            <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-charcoal/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col overflow-hidden bg-secondary shadow-2xl shadow-charcoal/20 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5">
          <Link to="/" className="flex shrink-0 items-center">
            <img src={logo} alt="Big Hill Lanka" className="h-12 w-auto object-contain" />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-secondary"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
        </div>

        <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-6">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm transition-all duration-200 ${
                    active
                      ? "bg-primary text-secondary"
                      : "bg-secondary text-charcoal hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <span className="font-semibold">{link.label}</span>
                  <Icon icon="mdi:chevron-right" className="text-xl" />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto border-t border-primary/10 pt-4">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-secondary transition-all duration-200 hover:bg-gold hover:text-charcoal"
            >
              Partner With Us
              <Icon icon="mdi:arrow-right" />
            </Link>

            <p className="mt-4 text-center text-xs leading-relaxed text-charcoal/55">
              Trusted importer & distributor of premium FMCG.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
