// Home.jsx
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import BrandRibbon from "../components/BrandRibbon";
import SectionHeader from "../components/SectionHeader";
import CTASection from "../components/CTASection";
import RevealOnScroll from "../components/RevealOnScroll";

import homeAbout from "../assets/homeAbout.webp";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";

import rice from "../assets/rice.webp";
import fmcg from "../assets/fmcg.webp";
import warehouse from "../assets/warehouse.webp";
import sunflower from "../assets/sunflower.webp";
import popcorn from "../assets/popcorn.webp";
import BrandNetwork from "../components/BrandNetwork";

const SERIF = {
  fontFamily: "'Instrument Serif', serif",
  fontWeight: 400,
};

const categories = [
  {
    icon: "mdi:grain",
    title: "Premium Basmati Rice",
    description: "Imported premium Basmati rice from trusted supply origins for household, trade, and HORECA demand.",
    image: rice,
  },
  {
    icon: "mdi:bottle-tonic-plus",
    title: "Sunflower Oil",
    description:
      "High-quality edible oil solutions under our trusted Big Star brand for homes and foodservice kitchens.",
    image: sunflower,
  },
  {
    icon: "mdi:popcorn",
    title: "Snacks & Popcorn",
    description: "Popular consumer snack brands including Bikano and O My Pop with strong retail movement.",
    image: popcorn,
  },
  {
    icon: "mdi:food",
    title: "FMCG Brand Portfolio",
    description: "A growing portfolio of imported and owned brands positioned across key market segments.",
    image: fmcg,
  },
  {
    icon: "mdi:warehouse",
    title: "Warehousing & Logistics",
    description: "Reliable stock flow, storage capability, and islandwide distribution support.",
    image: warehouse,
  },
];

const whyUs = [
  {
    icon: "mdi:chart-box-outline",
    title: "Rapid Market Share Creation",
    description:
      "We possess a proven, agile strategy for quickly seizing and securing significant market share for our portfolio brands across key consumer segments.",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:rocket-launch-outline",
    title: "Brand Launch and Building",
    description: "Our specialized expertise ensures the successful introduction and rapid scale-up of new brands.",
    color: "#B32025",
  },
  {
    icon: "mdi:account-group-outline",
    title: "Strong Sales & Field Team",
    description: "A highly motivated sales force delivering deep market penetration and retail visibility.",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:warehouse",
    title: "10,000+ Sq Ft Facility",
    description: "Modern warehousing and distribution operations built for dependable throughput.",
    color: "#D4A72C",
  },
];

const stats = [
  { value: "2019", label: "Since" },
  { value: "10,000+", label: "Sq Ft" },
  { value: "6+", label: "Brands" },
  { value: "Islandwide", label: "Reach" },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a5230 0%, #0E6B3C 55%, #13854a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-150 h-150 rounded-full bg-white/5 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-gold/10 -translate-x-1/2 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs mb-8 backdrop-blur-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Business Profile
            </div>

            <h1
              className="text-white mb-6"
              style={{
                ...SERIF,
                fontSize: "clamp(2.8rem, 6vw, 4.6rem)",
                lineHeight: 1.05,
              }}
            >
              Big Hill Lanka Pvt Ltd
              <br />
              <span style={{ color: "#D4A72C", fontStyle: "italic" }}>Since 2019</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-10">
              A trusted name in food distribution, import, export, FMCG brand building, HORECA supply, and reliable
              nationwide logistics across Sri Lanka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary text-sm font-bold hover:bg-cream transition-all duration-200"
              >
                <Icon icon="mdi:package-variant" />
                Explore Products
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-all duration-200"
              >
                View Profile
                <Icon icon="mdi:arrow-right" />
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/20">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl md:text-3xl text-white font-extrabold">{item.value}</div>
                  <div className="text-xs text-white/60 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={hero1} alt="Big Hill Lanka" className="w-full h-80 object-cover" />
            </div>

            <div className="absolute -bottom-6 -left-8 w-44 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img src={hero2} alt="Distribution" className="w-full h-28 object-cover" />
            </div>

            <div className="absolute -top-6 -right-6 w-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img src={hero3} alt="Warehouse" className="w-full h-24 object-cover" />
            </div>

            <div className="absolute bottom-20 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-44">
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="mdi:check-circle" className="text-primary text-lg" />
                <span className="text-xs font-bold text-charcoal">Trusted Supply</span>
              </div>
              <p className="text-[11px] text-gray-500">Reliable stock flow and strong nationwide channel support</p>
            </div>
          </div>
        </div>
      </section>

      <BrandRibbon />
      <BrandNetwork />

      {/* ABOUT */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={homeAbout} alt="About Big Hill" className="w-full h-96 object-cover" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl max-w-56">
                <div className="text-3xl font-extrabold">FMCG</div>
                <div className="text-sm text-white/80 mt-1">Distribution & HORECA Supply</div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <SectionHeader
              eyebrow="About Us"
              title="A Trusted Name in Food Distribution"
              subtitle="Established in 2019, Big Hill Lanka Pvt Ltd is a leading distributor and exporter serving Sri Lanka through modern trade, HORECA supply, and strategic brand partnerships."
            />

            <div className="space-y-4 mt-8">
              {[
                "Exclusive distribution of Bikano, Bestari, and O My Pop.",
                "Own brands include Sultan Gold, Big Star, and Haiwa.",
                "Trusted by HORECA buyers and leading modern trade outlets.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon icon="mdi:check-bold" className="text-primary text-sm" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-bold mt-8"
            >
              Learn More
              <Icon icon="mdi:arrow-right" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Leading FMCG Brands Across Sri Lanka"
            subtitle="From rice and edible oils to snacks, sweets, frozen foods, and foodservice mixes."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <RevealOnScroll direction="left" className="md:col-span-6">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-md group">
                <img
                  src={categories[0].image}
                  alt={categories[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{categories[0].title}</h3>
                  <p className="text-white/80 text-sm mt-2">{categories[0].description}</p>
                </div>
              </div>
            </RevealOnScroll>

            <div className="md:col-span-6 grid grid-cols-2 gap-5">
              {categories.slice(1).map((item, i) => (
                <RevealOnScroll key={item.title} direction="up" delay={i * 80}>
                  <div className="relative rounded-2xl overflow-hidden h-40 shadow-md group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-sm font-bold">{item.title}</h3>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Competitive Advantages"
            title="What Sets Us Apart"
            subtitle="Built for growth, visibility, and dependable supply."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => (
              <RevealOnScroll key={item.title} direction="up" delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-primary/10 shadow-sm h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon icon={item.icon} className="text-2xl" style={{ color: item.color }} />
                  </div>

                  <h3 className="text-charcoal font-bold mb-2">{item.title}</h3>

                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
