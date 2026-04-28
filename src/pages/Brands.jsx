import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import AnimatedContent from "@/components/AnimatedContent";

import sultanGoldLogo from "@/assets/sultangold.webp";
import bigStarLogo from "@/assets/bigstar.webp";
import haiwaLogo from "@/assets/haiwa.webp";
import bikanoLogo from "@/assets/bikano.webp";
import bestariLogo from "@/assets/bestari.webp";
import omypopLogo from "@/assets/omypop.webp";

const ownBrands = [
  {
    name: "Sultan Gold",
    tagline: "Premium Basmati Excellence",
    description:
      "Sultan Gold proudly brings you the finest, long-grain Basmati rice, grown and harvested using only sustainable practices for unmatched purity and flavor.",
    category: "Rice",
    logo: sultanGoldLogo,
    icon: "mdi:grain",
    accent: "gold",
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
    accent: "primary",
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
    accent: "red",
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
    accent: "red",
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
    accent: "primary",
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
    accent: "gold",
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

const accentClasses = {
  primary: {
    soft: "bg-primary/10 text-primary",
    icon: "bg-primary/10 text-primary",
    text: "text-primary",
    border: "border-primary/20",
  },
  gold: {
    soft: "bg-gold/15 text-gold",
    icon: "bg-gold/15 text-gold",
    text: "text-gold",
    border: "border-gold/25",
  },
  red: {
    soft: "bg-red/10 text-red",
    icon: "bg-red/10 text-red",
    text: "text-red",
    border: "border-red/20",
  },
};

function BrandCard({ brand }) {
  const styles = accentClasses[brand.accent];

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-secondary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
      <div className="relative flex h-52 items-center justify-center bg-white p-8">
        <div className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl ${styles.icon}`}>
          <Icon icon={brand.icon} className="text-2xl" />
        </div>

        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-28 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-extrabold text-charcoal">{brand.name}</h3>

        <p className={`mt-2 text-sm font-semibold italic ${styles.text}`}>{brand.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{brand.description}</p>

        <div className="mt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-charcoal/40">Product Focus</p>

          <div className="flex flex-wrap gap-2">
            {brand.products.map((product) => (
              <span
                key={product}
                className="rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs font-semibold text-charcoal"
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className={`mt-7 inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:gap-3 ${styles.text}`}
        >
          Enquire About {brand.name}
          <Icon icon="mdi:arrow-right" />
        </Link>
      </div>
    </div>
  );
}

function Brands() {
  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary px-6 pb-20 pt-32">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary/5" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary/80">
            <Icon icon="mdi:star-four-points" />
            Brand Portfolio
          </div>

          <h1 className="mb-5 font-serif text-5xl font-semibold leading-tight tracking-tight text-secondary sm:text-6xl lg:text-7xl">
            Owned Brands & <span className="italic text-gold">Exclusive Partners</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary/70">
            Big Hill Lanka’s portfolio brings together trusted own brands and exclusive international partner brands
            across rice, edible oil, chilled and frozen foods, snacks, sweets, cooking mixes, and popcorn.
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-b from-transparent to-secondary" />
      </section>

      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Brand Network"
            title="Six Brands Across Key FMCG Categories"
            subtitle="A clear portfolio structure covering Big Hill Lanka’s owned brands and exclusive partner brands."
            center
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {allBrands.map((brand, index) => (
              <AnimatedContent key={brand.name} direction="vertical" delay={index * 60}>
                <div className="h-full rounded-2xl border border-primary/10 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-20 items-center justify-center">
                    <img src={brand.logo} alt={brand.name} className="max-h-16 max-w-full object-contain" />
                  </div>

                  <h3 className="text-sm font-extrabold text-charcoal">{brand.name}</h3>

                  <p className="mt-1 text-[11px] text-charcoal/50">{brand.type}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Own Brands"
            title="Brands We Own & Operate"
            subtitle="Big Hill Lanka’s in-house portfolio, built for strong market positioning across food and FMCG categories."
            center
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ownBrands.map((brand, index) => (
              <AnimatedContent key={brand.name} direction="vertical" delay={index * 90}>
                <BrandCard brand={brand} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Exclusive Partner Brands"
            title="International Brands We Exclusively Distribute"
            subtitle="Big Hill Lanka represents selected international and specialty FMCG brands in Sri Lanka through exclusive distribution partnerships."
            center
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnerBrands.map((brand, index) => (
              <AnimatedContent key={brand.name} direction="vertical" delay={index * 90}>
                <BrandCard brand={brand} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Represent Your Brand in Sri Lanka"
        subtitle="Looking for a reliable local partner to distribute and grow your brand? Big Hill Lanka brings strong market relationships, proven distribution capability, and deep FMCG experience across Sri Lanka."
        primaryLabel="Discuss Partnership"
        primaryTo="/contact"
        secondaryLabel="View Our Brands"
      />
    </main>
  );
}

export default Brands;
