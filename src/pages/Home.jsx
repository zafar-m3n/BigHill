import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import BrandRibbon from "../components/BrandRibbon";
import SectionHeader from "../components/SectionHeader";
import CTASection from "../components/CTASection";
import RevealOnScroll from "../components/RevealOnScroll";

import homeAbout from "../assets/homeAbout.webp";
import fmcg from "../assets/fmcg.webp";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import rice from "../assets/rice.webp";
import macaroni from "../assets/macaroni.webp";
import pasta from "../assets/pasta.webp";
import warehouse from "../assets/warehouse.webp";

const SERIF = { fontFamily: "'Instrument Serif', serif", fontWeight: 400 };

const categories = [
  {
    icon: "mdi:grain",
    title: "Indian Basmati Rice",
    description:
      "Imported staple food products that support both household demand and large-scale HORECA supply requirements.",
    image: rice,
  },
  {
    icon: "mdi:pasta",
    title: "Macaroni",
    description:
      "High-demand staple food products distributed efficiently through supermarket and nationwide sales networks.",
    image: macaroni,
  },
  {
    icon: "mdi:food-variant",
    title: "Pasta",
    description: "Essential imported food lines positioned for strong retail movement and broad market availability.",
    image: pasta,
  },
  {
    icon: "mdi:cookie",
    title: "FMCG Portfolio Brands",
    description: "A growing portfolio built for market penetration across key consumer and trade segments.",
    image: fmcg,
  },
  {
    icon: "mdi:warehouse",
    title: "Warehousing & Distribution",
    description: "Backed by warehousing, logistics, and dependable stock flow to support islandwide operations.",
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
    description:
      "Our specialized expertise ensures the successful introduction and rapid scale-up of new brands, driving sustained consumer adoption and equity in competitive markets.",
    color: "#B32025",
  },
  {
    icon: "mdi:account-group-outline",
    title: "Strong Sales & Field Team",
    description:
      "Our competitive advantage is powered by a robust, highly motivated sales force, ensuring deep market penetration and maximized retail visibility.",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:earth",
    title: "International Standard Distribution",
    description:
      "We operate a highly efficient distribution network engineered to meet rigorous international standards for speed, reliability, and cold chain integrity.",
    color: "#D4A72C",
  },
];

const stats = [
  { value: "2019", label: "Since" },
  { value: "FMCG", label: "Core Sector" },
  { value: "HORECA", label: "Key Channel" },
  { value: "10,000+", label: "Sq Ft Facility" },
];

export default function Home() {
  return (
    <main>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a5230 0%, #0E6B3C 55%, #13854a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-150 h-150 rounded-full bg-white/5 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-gold/10 -translate-x-1/2 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-gold opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs mb-8 backdrop-blur-sm"
              style={{ fontWeight: 600 }}
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Business Profile
            </div>

            <h1
              className="text-white mb-6"
              style={{
                ...SERIF,
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Big Hill Lanka Pvt Ltd
              <br />
              <span style={{ color: "#D4A72C", fontStyle: "italic" }}>Since 2019</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-10">
              A trusted name in food distribution, serving Sri Lanka through FMCG distribution, HORECA supply, strong
              sales execution, and reliable nationwide distribution capability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary text-sm hover:bg-cream transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ fontWeight: 700 }}
              >
                <Icon icon="mdi:package-variant" />
                Explore Products
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white text-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
                style={{ fontWeight: 700 }}
              >
                View Profile
                <Icon icon="mdi:arrow-right" />
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/20">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl text-white" style={{ fontWeight: 800 }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={hero1} alt="Big Hill Lanka home hero" className="w-full h-80 object-cover" />
              </div>

              <div className="absolute -bottom-6 -left-8 w-44 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img src={hero2} alt="Food distribution" className="w-full h-28 object-cover" />
              </div>

              <div className="absolute -top-6 -right-6 w-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img src={hero3} alt="Warehouse and logistics" className="w-full h-24 object-cover" />
              </div>

              <div className="absolute bottom-20 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-42.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon icon="mdi:check-circle" className="text-primary text-sm" />
                  </div>
                  <span className="text-xs text-charcoal" style={{ fontWeight: 700 }}>
                    Trusted Supply
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">Reliable stock flow and strong nationwide channel support</p>
              </div>

              <div className="absolute top-16 -left-10 bg-white rounded-2xl p-4 shadow-xl max-w-37.5">
                <div className="text-2xl text-primary" style={{ fontWeight: 800 }}>
                  2019
                </div>
                <div className="text-xs text-gray-500 mt-0.5">Since Established</div>
              </div>
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute bottom-8 right-8 w-56 h-56 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #FAF8F3 100%)" }}
        />
      </section>

      <BrandRibbon />

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={homeAbout} alt="About Big Hill Lanka" className="w-full h-96 object-cover" />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl max-w-55">
                  <div className="text-3xl" style={{ fontWeight: 800 }}>
                    FMCG
                  </div>
                  <div className="text-sm text-white/80 mt-1">Distribution and HORECA supply in Sri Lanka</div>
                </div>

                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gold flex items-center justify-center shadow-lg">
                  <Icon icon="mdi:warehouse" className="text-white text-4xl" />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div>
                <SectionHeader
                  eyebrow="About Us"
                  title="A Trusted Name in Food Distribution"
                  subtitle="Our foundation, built upon pioneering achievements in the food sector, paved the way for the successful establishment of a comprehensive FMCG and HORECA distribution operation in Sri Lanka."
                />

                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: "mdi:grain",
                      text: "Started with imported staples such as Indian Basmati rice, macaroni, and pasta.",
                    },
                    {
                      icon: "mdi:storefront-outline",
                      text: "Now serving virtually every HORECA customer and major supermarket channels nationwide.",
                    },
                    {
                      icon: "mdi:cash-multiple",
                      text: "Strong financial capability supports uninterrupted stock availability and flexible payment terms.",
                    },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon icon={item.icon} className="text-primary text-lg" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900/20"
                  style={{ fontWeight: 700 }}
                >
                  Learn More
                  <Icon icon="mdi:arrow-right" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="FMCG Distribution and HORECA Supply in Sri Lanka"
            subtitle="Starting with imported staples and expanding significantly, our product reach supports both retail and HORECA channels across the country."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <RevealOnScroll direction="left" className="md:col-span-6">
              <div className="card-hover group relative rounded-2xl overflow-hidden h-80 shadow-md">
                <img
                  src={categories[0].image}
                  alt={categories[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Icon icon={categories[0].icon} className="text-white text-xl" />
                  </div>

                  <h3 className="text-white text-xl mb-1" style={{ fontWeight: 700 }}>
                    {categories[0].title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">{categories[0].description}</p>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-gold text-sm mt-3 hover:gap-2 transition-all"
                    style={{ fontWeight: 600 }}
                  >
                    View Products <Icon icon="mdi:arrow-right" className="text-sm" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <div className="md:col-span-6 grid grid-cols-2 gap-5">
              {categories.slice(1).map((cat, i) => (
                <RevealOnScroll key={cat.title} direction="up" delay={i * 80}>
                  <div className="card-hover group relative rounded-2xl overflow-hidden h-37 shadow-md">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                        <Icon icon={cat.icon} className="text-white text-sm" />
                      </div>

                      <h3 className="text-white text-sm leading-snug" style={{ fontWeight: 700 }}>
                        {cat.title}
                      </h3>

                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1 text-gold text-xs mt-1 hover:gap-2 transition-all"
                        style={{ fontWeight: 600 }}
                      >
                        View <Icon icon="mdi:arrow-right" className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #FAF8F3 0%, #f0ece3 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Competitive Advantages"
            title="What Sets Us Apart"
            subtitle="Our operations combine market-building capability, strong sales execution, international-standard distribution, and dependable warehousing support."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => (
              <RevealOnScroll key={item.title} direction="up" delay={i * 80}>
                <div
                  className={`card-hover group bg-white rounded-2xl p-7 border border-primary/10 shadow-sm hover:border-primary/20 ${
                    i === 1 ? "md:mt-6" : ""
                  } ${i === 3 ? "md:mt-3" : ""}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: item.color + "15" }}
                  >
                    <Icon icon={item.icon} style={{ color: item.color }} className="text-2xl" />
                  </div>

                  <h3 className="text-charcoal text-base mb-2" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg text-charcoal mb-2" style={{ fontWeight: 700 }}>
                Integrated Logistics & Warehousing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our robust operations are anchored by a strategic, 10,000+ square foot modern warehousing and
                distribution facility, guaranteeing optimal inventory management and highly efficient throughput across
                the supply chain.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg text-charcoal mb-2" style={{ fontWeight: 700 }}>
                Financial Strength & Stability
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The company is underpinned by significant financial robustness, enabling strategic investment in growth,
                inventory, and long-term market expansion initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
