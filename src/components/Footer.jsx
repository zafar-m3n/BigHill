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
    icon: "mdi:web",
    label: "Website",
    href: "https://www.bighill.lk",
  },
  {
    icon: "mdi:email-outline",
    label: "Email",
    href: "mailto:order@bighill.lk",
  },
  {
    icon: "mdi:whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/94771672564",
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logoWhite} alt="Big Hill Lanka" className="h-14 w-auto object-contain" />
            </Link>

            <p className="text-sm text-white/65 leading-relaxed mb-6">
              Big Hill Lanka Pvt Ltd is a trusted FMCG import, export, and distribution company serving businesses
              across Sri Lanka with a growing portfolio of quality brands.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon icon={social.icon} className="text-lg text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white/45 mb-5">Quick Links</h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold group-hover:w-3 transition-all duration-200 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white/45 mb-5">Our Brands</h4>

            <ul className="space-y-2.5">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    to="/brands"
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:w-3 transition-all duration-200 inline-block" />
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white/45 mb-5">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon icon="mdi:map-marker" className="text-gold text-lg mt-0.5 shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  4th Floor, Forbes &amp; Walkers Building,
                  <br />
                  38/46 Nawam Mawatha,
                  <br />
                  Colombo 02, Sri Lanka
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="mdi:phone" className="text-primary-light text-lg shrink-0" />
                <a href="tel:+94771672564" className="text-sm text-white/70 hover:text-white transition-colors">
                  +94 77 167 2564
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="mdi:email-outline" className="text-primary-light text-lg shrink-0" />
                <a href="mailto:order@bighill.lk" className="text-sm text-white/70 hover:text-white transition-colors">
                  order@bighill.lk
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="mdi:web" className="text-primary-light text-lg shrink-0" />
                <a
                  href="https://www.bighill.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  www.bighill.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Big Hill Lanka Pvt Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-xs text-white/40">
            <span>Built for growth</span>
            <span className="text-gold">•</span>
            <span>Powered by trusted distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
