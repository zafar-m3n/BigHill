// Brands.jsx
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SectionHeader from "../components/SectionHeader";
import CTASection from "../components/CTASection";
import RevealOnScroll from "../components/RevealOnScroll";

import sultanGoldLogo from "../assets/sultangold.webp";
import bigStarLogo from "../assets/bigstar.webp";
import haiwaLogo from "../assets/haiwa.webp";
import bikanoLogo from "../assets/bikano.webp";
import bestariLogo from "../assets/bestari.webp";
import omypopLogo from "../assets/omypop.webp";

const ownBrands = [
  {
    name: "Sultan Gold",
    tagline: "Premium Basmati Excellence",
    description:
      "Sultan Gold proudly brings you the finest, long-grain Basmati rice, grown and harvested using only sustainable practices for unmatched purity and flavor.",
    category: "Rice",
    logo: sultanGoldLogo,
    icon: "mdi:grain",
    color: "#D4A72C",
    badge: "Owned Brand",
    products: ["1121 Steam XXL Premium Basmati Rice", "5KG Pack"],
  },
  {
    name: "Big Star",
    tagline: "Pure Sunflower Oil for Everyday Cooking",
    description:
      "Big Star offers premium, light-tasting Sunflower Oil, extracted from the highest quality seeds to deliver superior purity and health benefits for all your culinary needs.",
    category: "Edible Oil",
    logo: bigStarLogo,
    icon: "mdi:bottle-tonic-plus",
    color: "#0E6B3C",
    badge: "Owned Brand",
    products: ["100% Pure Sunflower Oil", "1L", "5L", "20L"],
  },
  {
    name: "Haiwa",
    tagline: "Premium Chilled & Frozen Food Solutions",
    description:
      "Haiwa provides a comprehensive selection of premium-quality chilled and frozen food solutions, encompassing core proteins, prepared meats, value-added products, and gourmet sauces.",
    category: "Chilled & Frozen Foods",
    logo: haiwaLogo,
    icon: "mdi:snowflake",
    color: "#B32025",
    badge: "Owned Brand",
    products: ["Core Proteins", "Prepared Meats", "Value-Added Products", "Gourmet Sauces"],
  },
];

const partnerBrands = [
  {
    name: "Bikano",
    tagline: "Authentic Indian Snacks & Sweets",
    description:
      "Bikano is one of India’s most beloved and top-tier brands, renowned for its authentic portfolio of traditional Indian snacks and sweets, including the world-famous Bikaneri Bhujia and high-quality namkeen.",
    category: "Snacks, Namkeen & Sweets",
    logo: bikanoLogo,
    icon: "mdi:cookie-outline",
    color: "#B32025",
    badge: "Exclusive Distributor",
    products: ["Chips", "Namkeen", "Mixtures", "Ambient Sweets", "Soan Papdi", "Gulab Jamun"],
  },
  {
    name: "Bestari",
    tagline: "Convenient Ready-to-Cook Solutions",
    description:
      "Bestari specializes in convenient, ready-to-cook food solutions, offering high-quality frying flours, seasonings, and instant premixes for modern culinary needs.",
    category: "Cooking Mixes & Premixes",
    logo: bestariLogo,
    icon: "mdi:food-turkey",
    color: "#0E6B3C",
    badge: "Exclusive Distributor",
    products: ["Crispy Frying Flour Mix", "Hot & Spicy Mix", "Chicken Stock", "Tempura Batter"],
  },
  {
    name: "O My Pop",
    tagline: "Bold Flavoured Popcorn",
    description:
      "O My Pop offers intensely flavoured popcorn in freshness-sealed tubular packaging, featuring both bold savoury and indulgent sweet options.",
    category: "Flavoured Popcorn",
    logo: omypopLogo,
    icon: "mdi:popcorn",
    color: "#D4A72C",
    badge: "Exclusive Distributor",
    products: [
      "Tomato Ketchup",
      "Dark Cocoa",
      "Baked Cheese",
      "Sour Cream & Onion",
      "Barbecue Curry",
      "Golden Caramel",
    ],
  },
];

const allBrands = [
  { name: "Sultan Gold", logo: sultanGoldLogo, type: "Owned Brand" },
  { name: "Big Star", logo: bigStarLogo, type: "Owned Brand" },
  { name: "Haiwa", logo: haiwaLogo, type: "Owned Brand" },
  { name: "Bikano", logo: bikanoLogo, type: "Exclusive Partner Brand" },
  { name: "Bestari", logo: bestariLogo, type: "Exclusive Partner Brand" },
  { name: "O My Pop", logo: omypopLogo, type: "Exclusive Partner Brand" },
];

function BrandCard({ brand }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
      <div className="relative flex h-52 items-center justify-center bg-white p-8">
        <div
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${brand.color}15` }}
        >
          <Icon icon={brand.icon} className="text-2xl" style={{ color: brand.color }} />
        </div>

        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-28 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-wider"
          style={{
            backgroundColor: `${brand.color}15`,
            color: brand.color,
            fontWeight: 700,
          }}
        >
          <Icon icon={brand.badge === "Owned Brand" ? "mdi:shield-star-outline" : "mdi:handshake-outline"} />
          {brand.badge} / {brand.category}
        </span>

        <h3 className="text-2xl text-charcoal" style={{ fontWeight: 800 }}>
          {brand.name}
        </h3>

        <p className="mt-2 text-sm italic" style={{ color: brand.color, fontWeight: 600 }}>
          {brand.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">{brand.description}</p>

        <div className="mt-6">
          <p className="mb-3 text-xs uppercase tracking-wider text-gray-400" style={{ fontWeight: 700 }}>
            Product Focus
          </p>

          <div className="flex flex-wrap gap-2">
            {brand.products.map((product) => (
              <span
                key={product}
                className="rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs text-charcoal"
                style={{ fontWeight: 600 }}
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
          style={{ color: brand.color, fontWeight: 700 }}
        >
          Enquire About {brand.name}
          <Icon icon="mdi:arrow-right" />
        </Link>
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <main>
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32"
        style={{ background: "linear-gradient(135deg, #0a5230 0%, #0E6B3C 100%)" }}
      >
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80"
            style={{ fontWeight: 600 }}
          >
            <Icon icon="mdi:star-four-points" />
            Brand Portfolio
          </div>

          <h1
            className="mb-5 text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            Owned Brands & <span style={{ color: "#D4A72C", fontStyle: "italic" }}>Exclusive Partners</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            Big Hill Lanka’s portfolio brings together trusted own brands and exclusive international partner brands
            across rice, edible oil, chilled and frozen foods, snacks, sweets, cooking mixes, and popcorn.
          </p>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #FAF8F3 100%)" }}
        />
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Brand Network"
            title="Six Brands Across Key FMCG Categories"
            subtitle="A clear portfolio structure covering Big Hill Lanka’s owned brands and exclusive partner brands."
            center
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {allBrands.map((brand, i) => (
              <RevealOnScroll key={brand.name} direction="up" delay={i * 60}>
                <div className="h-full rounded-2xl border border-primary/10 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-20 items-center justify-center">
                    <img src={brand.logo} alt={brand.name} className="max-h-16 max-w-full object-contain" />
                  </div>

                  <h3 className="text-sm text-charcoal" style={{ fontWeight: 800 }}>
                    {brand.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-500">{brand.type}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Own Brands"
            title="Brands We Own & Operate"
            subtitle="Big Hill Lanka’s in-house portfolio, built for strong market positioning across food and FMCG categories."
            center
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ownBrands.map((brand, i) => (
              <RevealOnScroll key={brand.name} direction="up" delay={i * 90}>
                <BrandCard brand={brand} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Exclusive Partner Brands"
            title="International Brands We Exclusively Distribute"
            subtitle="Big Hill Lanka represents selected international and specialty FMCG brands in Sri Lanka through exclusive distribution partnerships."
            center
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnerBrands.map((brand, i) => (
              <RevealOnScroll key={brand.name} direction="up" delay={i * 90}>
                <BrandCard brand={brand} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll direction="up">
            <div
              className="relative overflow-hidden rounded-3xl p-10 md:p-16"
              style={{ background: "linear-gradient(135deg, #1E1E1E 0%, #2d2d2d 100%)" }}
            >
              <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/20" />
              <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-gold/10" />

              <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div>
                  <div
                    className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1.5 text-xs text-gold"
                    style={{ fontWeight: 700 }}
                  >
                    <Icon icon="mdi:handshake" />
                    Brand Partnership
                  </div>

                  <h3 className="mb-4 text-3xl leading-tight text-white" style={{ fontWeight: 800 }}>
                    Represent Your Brand in Sri Lanka
                  </h3>

                  <p className="text-base leading-relaxed text-white/70">
                    Looking for a reliable local partner to distribute and grow your brand in Sri Lanka? Big Hill Lanka
                    brings market knowledge, trade relationships, and distribution capability across multiple FMCG
                    product categories.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Distribution reach across key Sri Lankan markets",
                    "Relationships across retail, wholesale, HORECA, and food service",
                    "Experience across rice, snacks, sweets, oils, and ready-to-cook products",
                    "Commercially focused partnership approach",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                        <Icon icon="mdi:check-bold" className="text-sm text-primary" />
                      </div>
                      <p className="text-sm leading-relaxed text-white/80">{text}</p>
                    </div>
                  ))}

                  <Link
                    to="/contact"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
                    style={{ fontWeight: 700 }}
                  >
                    Discuss Partnership
                    <Icon icon="mdi:arrow-right" />
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
