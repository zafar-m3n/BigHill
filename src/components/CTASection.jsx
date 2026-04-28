import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/AnimatedContent";

function CTASection({
  headline = "Looking for a Trusted Distribution Partner?",
  subtitle = "Join a growing network of wholesalers, retailers, and HORECA partners across Sri Lanka. We bring quality brands to your shelves.",
  primaryLabel = "Contact Us",
  primaryTo = "/contact",
  secondaryLabel = "WhatsApp Us",
  whatsappNumber = "94771234567",
}) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <AnimatedContent direction="vertical" distance={40}>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-charcoal p-10 text-center md:p-16">
            <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary/5" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-gold/10" />

            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <span className="rounded-full bg-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                  Become a Partner
                </span>
              </div>

              <h2 className="mb-5 font-serif text-4xl font-normal leading-tight text-secondary md:text-5xl">
                {headline}
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-secondary/70 md:text-lg">
                {subtitle}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to={primaryTo}
                  className="flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-xl"
                >
                  <Icon icon="mdi:arrow-right" />
                  {primaryLabel}
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-secondary/30 px-8 py-3.5 text-sm font-bold text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary/10"
                >
                  <Icon icon="mdi:whatsapp" className="text-lg text-gold" />
                  {secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

export default CTASection;
