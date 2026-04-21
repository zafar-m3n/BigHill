import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SectionHeader from "../components/SectionHeader";
import BrandFeature from "../components/BrandFeature";
import CTASection from "../components/CTASection";
import RevealOnScroll from "../components/RevealOnScroll";

const ownBrands = [
  {
    brand: "Sultan Gold",
    tagline: "Premium Basmati Excellence",
    description:
      "Sultan Gold proudly brings you the finest, long-grain Basmati rice, grown and harvested using only sustainable practices for unmatched purity and flavor.",
    category: "Rice",
    image: "https://picsum.photos/seed/brand-sultan/700/500",
    reverse: false,
  },
  {
    brand: "Big Star",
    tagline: "Pure Sunflower Oil for Everyday Cooking",
    description:
      "Big Star offers premium, light-tasting Sunflower Oil, extracted from the highest quality seeds to deliver superior purity and health benefits for all your culinary needs.",
    category: "Edible Oil",
    image: "https://picsum.photos/seed/brand-bigstar/700/500",
    reverse: true,
  },
  {
    brand: "Haiwa",
    tagline: "Premium Chilled & Frozen Food Solutions",
    description:
      "Haiwa provides a comprehensive selection of premium-quality chilled and frozen food solutions, encompassing core proteins, prepared meats, value-added products, and gourmet sauces, ensuring superior quality and convenience for all culinary environments.",
    category: "Frozen & Chilled Foods",
    image: "https://picsum.photos/seed/brand-haiwa/700/500",
    reverse: false,
  },
];

const partnerBrands = [
  {
    name: "Bikano",
    origin: "India",
    category: "Snacks & Sweets",
    description:
      "Bikano is one of India's most beloved and top-tier brands, renowned for its authentic and diverse portfolio of traditional Indian snacks and sweets, including the world-famous Bikano Bhujia and wide variety of high-quality namkeen.",
    icon: "mdi:cookie-outline",
    image: "https://picsum.photos/seed/brand-bikano/500/350",
    color: "#B32025",
  },
  {
    name: "Bestari",
    origin: "Premium Ready-to-Cook",
    category: "Flours, Seasonings & Premixes",
    description:
      "Bestari is a premium brand specializing in convenient, ready-to-cook food solutions, offering a concise portfolio of high-quality frying flours, seasonings, and instant premixes that deliver superior flavor and exceptional ease for modern culinary needs.",
    icon: "mdi:food-turkey",
    image: "https://picsum.photos/seed/brand-bestari/500/350",
    color: "#0E6B3C",
  },
  {
    name: "O My Pop",
    origin: "Premium Snack Brand",
    category: "Flavoured Popcorn",
    description:
      "O My Pop is a premium snack brand offering intensely flavored popcorn in innovative, freshness-sealed tubular packaging, featuring a gourmet range of both bold savory and indulgent sweet options for the modern consumer.",
    icon: "mdi:popcorn",
    image: "https://picsum.photos/seed/brand-omypop/500/350",
    color: "#D4A72C",
  },
];

export default function Brands() {
  return (
    <main>
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a5230 0%, #0E6B3C 100%)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-600 mb-6"
            style={{ fontWeight: 600 }}
          >
            <Icon icon="mdi:star-four-points" />
            Brand Portfolio
          </div>

          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            Trusted Brands <span style={{ color: "#D4A72C", fontStyle: "italic" }}>We Represent</span>
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Our portfolio brings together strong in-house brands and trusted partner brands across rice, edible oil,
            frozen foods, snacks, premixes, and popcorn.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #FAF8F3 100%)" }}
        />
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Own Brands"
            title="Brands We Own & Operate"
            subtitle="These are the brands Big Hill Lanka has developed and positioned within its own growing portfolio."
          />

          {ownBrands.map((brand) => (
            <BrandFeature key={brand.brand} {...brand} />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Partner Brands"
            title="Brands We Distribute"
            subtitle="In addition to our own portfolio, Big Hill Lanka represents selected international and specialty brands in Sri Lanka."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {partnerBrands.map((brand, i) => (
              <RevealOnScroll key={brand.name} direction="up" delay={i * 90}>
                <div className="card-hover group bg-cream rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1.5 rounded-full text-white text-xs font-700 shadow-md"
                        style={{ backgroundColor: brand.color, fontWeight: 700 }}
                      >
                        {brand.origin}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-800 text-charcoal" style={{ fontWeight: 800 }}>
                          {brand.name}
                        </h3>
                        <span
                          className="text-xs font-600 uppercase tracking-wider block mt-1"
                          style={{ color: brand.color, fontWeight: 600 }}
                        >
                          {brand.category}
                        </span>
                      </div>

                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${brand.color}15` }}
                      >
                        <Icon icon={brand.icon} style={{ color: brand.color }} className="text-2xl" />
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{brand.description}</p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-600 transition-all duration-200 hover:gap-3"
                      style={{ color: brand.color, fontWeight: 600 }}
                    >
                      <span>Enquire About {brand.name}</span>
                      <Icon icon="mdi:arrow-right" className="text-sm" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll direction="up">
            <div
              className="relative rounded-3xl overflow-hidden p-10 md:p-16"
              style={{ background: "linear-gradient(135deg, #1E1E1E 0%, #2d2d2d 100%)" }}
            >
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/20 translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold/10 -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-700 mb-5"
                    style={{ fontWeight: 700 }}
                  >
                    <Icon icon="mdi:handshake" />
                    Brand Partnership
                  </div>

                  <h3 className="text-3xl font-800 text-white leading-tight mb-4" style={{ fontWeight: 800 }}>
                    Represent Your Brand in Sri Lanka
                  </h3>

                  <p className="text-white/70 text-base leading-relaxed">
                    Looking for a reliable local partner to distribute and grow your brand in Sri Lanka? Big Hill Lanka
                    brings market knowledge, trade relationships, and distribution capability across multiple product
                    categories.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "mdi:map-marker-multiple",
                      text: "Growing distribution reach across key Sri Lankan markets",
                    },
                    {
                      icon: "mdi:store",
                      text: "Established trade relationships in retail, wholesale, and food service",
                    },
                    {
                      icon: "mdi:chart-line",
                      text: "Experience across staples, snacks, oils, and ready-to-cook products",
                    },
                    {
                      icon: "mdi:handshake",
                      text: "Collaborative and commercially focused partnership approach",
                    },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon icon={item.icon} className="text-primary text-sm" />
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{item.text}</p>
                    </div>
                  ))}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-700 text-sm hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mt-2"
                    style={{ fontWeight: 700 }}
                  >
                    <Icon icon="mdi:arrow-right" />
                    Discuss Partnership
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
