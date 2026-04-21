import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const BRAND_STYLES = {
  "Sultan Gold": {
    pill: "bg-gold text-white border-gold shadow-[0_10px_24px_rgba(212,167,44,0.28)]",
    dot: "bg-gold",
    ring: "ring-gold/20",
  },
  Bikano: {
    pill: "bg-red text-white border-red shadow-[0_10px_24px_rgba(179,32,37,0.24)]",
    dot: "bg-red",
    ring: "ring-red/20",
  },
  Bestari: {
    pill: "bg-primary text-white border-primary shadow-[0_10px_24px_rgba(14,107,60,0.24)]",
    dot: "bg-primary",
    ring: "ring-primary/20",
  },
  "O My Pop": {
    pill: "bg-red text-white border-red shadow-[0_10px_24px_rgba(179,32,37,0.24)]",
    dot: "bg-red",
    ring: "ring-red/20",
  },
  "Big Star": {
    pill: "bg-gold text-white border-gold shadow-[0_10px_24px_rgba(212,167,44,0.28)]",
    dot: "bg-gold",
    ring: "ring-gold/20",
  },
};

export default function ProductCard({ image, name, brand, description, variant, category }) {
  const brandStyle = BRAND_STYLES[brand] || {
    pill: "bg-primary text-white border-primary shadow-[0_10px_24px_rgba(14,107,60,0.24)]",
    dot: "bg-primary",
    ring: "ring-primary/20",
  };

  const variants = Array.isArray(variant)
    ? variant
    : typeof variant === "string"
      ? variant.split(",").map((item) => item.trim())
      : [];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-black/6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(14,107,60,0.10)]">
      <div className="relative overflow-hidden bg-cream">
        <img
          src={image}
          alt={name}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute right-4 top-4 z-10">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] backdrop-blur-md transition-all duration-300 group-hover:scale-105 ${brandStyle.pill}`}
          >
            <span className="h-2 w-2 rounded-full bg-white/85" />
            {brand}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${brandStyle.dot}`} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">{category}</span>
        </div>

        <h3
          className="mb-3 text-[1.12rem] leading-snug text-charcoal"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
          }}
        >
          {name}
        </h3>

        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-charcoal/65">{description}</p>

        {variants.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {variants.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-cream px-3 py-1 text-xs font-medium text-charcoal/70"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/6 pt-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/45">
            <Icon icon="mdi:package-variant-closed" className="text-base" />
            <span className="font-medium">
              {variants.length > 0 ? `${variants.length} pack option${variants.length > 1 ? "s" : ""}` : "Available"}
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
          >
            <span>Enquire</span>
            <Icon icon="mdi:arrow-right" className="text-base" />
          </Link>
        </div>
      </div>
    </article>
  );
}
