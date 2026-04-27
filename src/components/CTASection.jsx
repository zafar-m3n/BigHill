import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import RevealOnScroll from "./RevealOnScroll";

export default function CTASection({
  headline = "Looking for a Trusted Distribution Partner?",
  subtitle = "Join a growing network of wholesalers, retailers, and HORECA partners across Sri Lanka. We bring quality brands to your shelves.",
  primaryLabel = "Contact Us",
  primaryTo = "/contact",
  secondaryLabel = "WhatsApp Us",
  whatsappNumber = "94771234567",
}) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll direction="up">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
            style={{ background: "linear-gradient(135deg, #0E6B3C 0%, #0a5230 60%, #1E1E1E 100%)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold/10 translate-y-1/3 -translate-x-1/3" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-700 uppercase tracking-widest"
                  style={{ fontWeight: 700 }}
                >
                  Become a Partner
                </span>
              </div>
              <h2
                className="text-white leading-tight mb-5"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                }}
              >
                {headline}
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={primaryTo}
                  className="px-8 py-3.5 rounded-full bg-white text-primary font-700 text-sm hover:bg-cream transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
                  style={{ fontWeight: 700 }}
                >
                  <Icon icon="mdi:arrow-right" />
                  {primaryLabel}
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-700 text-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
                  style={{ fontWeight: 700 }}
                >
                  <Icon icon="mdi:whatsapp" className="text-green-400 text-lg" />
                  {secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
