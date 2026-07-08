import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logoWhite from "@/assets/logoWhite.webp";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Brands", path: "/brands" },
  { label: "Contact", path: "/contact" },
];

const brands = ["Sultan Gold", "Big Star", "Haiwa", "Bikano", "Bestari", "O My Pop"];

const socials = [
  {
    icon: "mdi:facebook",
    label: "Facebook",
    href: "https://www.facebook.com/bighill.lk",
  },
  {
    icon: "mdi:instagram",
    label: "Instagram",
    href: "https://www.instagram.com/bighill.lk/",
  },
  {
    icon: "ic:baseline-tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@bighill.lk",
  },
  {
    icon: "mdi:linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bighill/",
  },
];

function Footer() {
  return (
    <footer className="bg-charcoal text-secondary">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-5 inline-block">
              <img src={logoWhite} alt="Big Hill Lanka" className="h-14 w-auto object-contain" />
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-secondary/65">
              Bringing premium FMCG to every shelf, kitchen, and market—serving retail, HORECA, and wholesale
              nationwide.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal"
                >
                  <Icon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-secondary/45">Quick Links</h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-secondary/70 transition-colors hover:text-secondary"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-gold transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-secondary/45">Our Brands</h4>

            <ul className="space-y-2.5">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    to="/brands"
                    className="group flex items-center gap-2 text-sm text-secondary/70 transition-colors hover:text-secondary"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-gold transition-all duration-200 group-hover:w-3" />
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-secondary/45">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon icon="mdi:map-marker" className="mt-0.5 shrink-0 text-lg text-gold" />
                <span className="text-sm leading-relaxed text-secondary/70">
                  4th Floor, Forbes &amp; Walkers Building,
                  <br />
                  38/46 Nawam Mawatha,
                  <br />
                  Colombo 02, Sri Lanka
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="mdi:phone" className="shrink-0 text-lg text-gold" />
                <a href="tel:+94771672564" className="text-sm text-secondary/70 transition-colors hover:text-secondary">
                  +94 77 167 2564
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="mdi:email-outline" className="shrink-0 text-lg text-gold" />
                <a
                  href="mailto:order@bighill.lk"
                  className="text-sm text-secondary/70 transition-colors hover:text-secondary"
                >
                  order@bighill.lk
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="mdi:web" className="shrink-0 text-lg text-gold" />
                <a
                  href="https://www.bighill.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary/70 transition-colors hover:text-secondary"
                >
                  www.bighill.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-secondary/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary/40">
            &copy; {new Date().getFullYear()} Big Hill Lanka Pvt Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-xs text-secondary/40">
            <span>Built for growth</span>
            <span className="text-gold">•</span>
            <span>Powered by trusted distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
