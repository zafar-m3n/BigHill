import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const BRAND_STYLES = {
  "Sultan Gold": {
    pill: "bg-gold text-charcoal border-gold shadow-lg shadow-gold/20",
    dot: "bg-gold",
  },
  Bikano: {
    pill: "bg-red text-secondary border-red shadow-lg shadow-red/20",
    dot: "bg-red",
  },
  Bestari: {
    pill: "bg-primary text-secondary border-primary shadow-lg shadow-primary/20",
    dot: "bg-primary",
  },
  "O My Pop": {
    pill: "bg-red text-secondary border-red shadow-lg shadow-red/20",
    dot: "bg-red",
  },
  "Big Star": {
    pill: "bg-gold text-charcoal border-gold shadow-lg shadow-gold/20",
    dot: "bg-gold",
  },
};

const fallbackBrandStyle = {
  pill: "bg-primary text-secondary border-primary shadow-lg shadow-primary/20",
  dot: "bg-primary",
};

function ProductCard({ product }) {
  const brandStyle = BRAND_STYLES[product.brand] || fallbackBrandStyle;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (product.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % product.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-secondary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-square overflow-hidden bg-secondary pt-5 px-5 rounded-2xl">
        {product.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={product.name}
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 group-hover:scale-105 ${
              index === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}

        <div className="absolute right-4 top-4 z-10">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-300 group-hover:scale-105 ${brandStyle.pill}`}
          >
            <span className="h-2 w-2 rounded-full bg-secondary/85" />
            {product.brand}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${brandStyle.dot}`} />
          <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/45">{product.category}</span>
        </div>

        <h3 className="mb-3 font-serif text-xl font-normal leading-snug text-charcoal">{product.name}</h3>

        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-charcoal/65">{product.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {product.packs.map((pack) => (
            <span
              key={pack}
              className="rounded-full border border-primary/10 bg-secondary px-3 py-1 text-xs font-medium text-charcoal/70"
            >
              {pack}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-primary/10 pt-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/45">
            <Icon icon="mdi:package-variant-closed" className="text-base" />
            <span className="font-medium">
              {product.packs.length} pack option{product.packs.length > 1 ? "s" : ""}
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-secondary transition-all duration-200 hover:bg-gold hover:text-charcoal"
          >
            <span>Enquire</span>
            <Icon icon="mdi:arrow-right" className="text-base" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
