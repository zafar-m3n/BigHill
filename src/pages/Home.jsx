import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import BrandRibbon from "@/components/BrandRibbon";
import BrandNetwork from "@/components/BrandNetwork";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import AnimatedContent from "@/components/AnimatedContent";

import homeAbout from "@/assets/homeAbout.webp";
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";

import rice from "@/assets/rice.webp";
import fmcg from "@/assets/fmcg.webp";
import warehouse from "@/assets/warehouse.webp";
import sunflower from "@/assets/sunflower.webp";
import popcorn from "@/assets/popcorn.webp";

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
    accent: "primary",
  },
  {
    icon: "mdi:rocket-launch-outline",
    title: "Brand Launch and Building",
    description: "Our specialized expertise ensures the successful introduction and rapid scale-up of new brands.",
    accent: "red",
  },
  {
    icon: "mdi:account-group-outline",
    title: "Strong Sales & Field Team",
    description: "A highly motivated sales force delivering deep market penetration and retail visibility.",
    accent: "primary",
  },
  {
    icon: "mdi:warehouse",
    title: "10,000+ Sq Ft Facility",
    description: "Modern warehousing and distribution operations built for dependable throughput.",
    accent: "gold",
  },
];

const stats = [
  { value: "2019", label: "Established" },
  { value: "750+", label: "HORECA" },
  { value: "1,000+", label: "Large Modern Markets" },
  { value: "2,000+", label: "Modern Markets" },
  { value: "40,000+", label: "Retailers" },
  { value: "Islandwide", label: "Coverage" },
];

const accentClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  red: {
    bg: "bg-red/10",
    text: "text-red",
  },
  gold: {
    bg: "bg-gold/15",
    text: "text-gold",
  },
};

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-b from-primary via-primary to-secondary">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-20 h-80 w-80 translate-x-1/3 rounded-full bg-secondary/5 md:h-120 md:w-120 lg:h-150 lg:w-150" />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/3 rounded-full bg-gold/10 md:h-100 md:w-100" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-dvh max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:pb-24 lg:pt-28">
          <div className="max-w-2xl">
            <AnimatedContent direction="vertical" distance={24}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary/80 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                Business Profile
              </div>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={32} delay={80}>
              <h1 className="mb-6 font-serif text-5xl font-normal uppercase leading-none tracking-tight text-secondary sm:text-6xl lg:text-7xl">
                Big Hill Lanka Pvt Ltd
                <br />
                <span className="capitalize italic text-gold">Since 2019</span>
              </h1>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={32} delay={140}>
              <h2 className="mb-2 max-w-xl text-xl font-bold leading-relaxed text-secondary/75">
                Powering Sri Lanka's Food Supply Chain
              </h2>

              <p className="mb-10 max-w-xl text-base leading-relaxed text-secondary/75">
                Bringing premium FMCG to every shelf, kitchen, and market—serving retail, HORECA, and wholesale
                nationwide.
              </p>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={32} delay={200}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-xl"
                >
                  <Icon icon="mdi:package-variant" />
                  Explore Products
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary/30 px-7 py-3.5 text-sm font-bold text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary/10"
                >
                  View Profile
                  <Icon icon="mdi:arrow-right" className="text-gold" />
                </Link>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent direction="horizontal" distance={40}>
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img src={hero1} alt="Big Hill Lanka" className="h-80 w-full object-cover" />
              </div>

              <div className="absolute -bottom-6 -left-8 w-44 overflow-hidden rounded-xl border-4 border-secondary shadow-xl">
                <img src={hero2} alt="Distribution" className="h-28 w-full object-cover" />
              </div>

              <div className="absolute -right-6 -top-6 w-36 overflow-hidden rounded-xl border-4 border-secondary shadow-xl">
                <img src={hero3} alt="Warehouse" className="h-24 w-full object-cover" />
              </div>

              <div className="absolute -right-6 bottom-20 max-w-44 rounded-2xl bg-secondary p-4 shadow-xl">
                <div className="mb-2 flex items-center gap-2">
                  <Icon icon="mdi:check-circle" className="text-lg text-primary" />
                  <span className="text-xs font-bold text-charcoal">Trusted Supply</span>
                </div>
                <p className="text-xs leading-relaxed text-charcoal/55">
                  Reliable stock flow and strong nationwide channel support
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="-mt-20 bg-secondary px-6 pb-14 overflow-hidden">
        <div className="relative z-20 mx-auto max-w-7xl">
          <AnimatedContent direction="vertical" distance={32}>
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-primary/10 bg-white p-5 shadow-xl shadow-primary/5 lg:grid-cols-6 lg:p-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-primary/10 bg-secondary p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="text-2xl font-extrabold leading-tight text-primary lg:text-2xl">{item.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-charcoal/55">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      <BrandRibbon />
      <BrandNetwork />

      <section className="bg-secondary px-6 py-24 overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedContent direction="horizontal" reverse>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src={homeAbout} alt="About Big Hill" className="h-80 w-full object-cover sm:h-96" />
              </div>

              <div className="absolute -bottom-6 right-4 max-w-56 rounded-2xl bg-primary p-6 text-secondary shadow-xl sm:-right-6">
                <div className="text-3xl font-extrabold">FMCG</div>
                <div className="mt-1 text-sm text-secondary/80">Distribution & HORECA Supply</div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent direction="horizontal">
            <div>
              <SectionHeader
                eyebrow="About Us"
                title="A Trusted Name in Food Distribution"
                subtitle="Established in 2019, Big Hill Lanka Pvt Ltd is a leading distributor and exporter serving Sri Lanka through modern trade, HORECA supply, and strategic brand partnerships."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Exclusive distribution of Bikano, Bestari, and O My Pop.",
                  "Own brands include Sultan Gold, Big Star, and Haiwa.",
                  "Trusted by HORECA buyers and leading modern trade outlets.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon icon="mdi:check-bold" className="text-sm text-primary" />
                    </div>
                    <span className="text-sm text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal"
              >
                Learn More
                <Icon icon="mdi:arrow-right" />
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Leading FMCG Brands Across Sri Lanka"
            subtitle="From rice and edible oils to snacks, sweets, frozen foods, and foodservice mixes."
            center
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className="md:col-span-6">
              <AnimatedContent direction="horizontal" reverse>
                <div className="group relative h-80 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={categories[0].image}
                    alt={categories[0].title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/45" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-secondary">{categories[0].title}</h3>
                    <p className="mt-2 text-sm text-secondary/80">{categories[0].description}</p>
                  </div>
                </div>
              </AnimatedContent>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-6">
              {categories.slice(1).map((item, index) => (
                <AnimatedContent key={item.title} direction="vertical" delay={index * 80}>
                  <div className="group relative h-44 overflow-hidden rounded-2xl shadow-md sm:h-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/45" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-sm font-bold text-secondary">{item.title}</h3>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Competitive Advantages"
            title="What Sets Us Apart"
            subtitle="Built for growth, visibility, and dependable supply."
            center
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, index) => {
              const styles = accentClasses[item.accent];

              return (
                <AnimatedContent key={item.title} direction="vertical" delay={index * 80}>
                  <div className="h-full rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${styles.bg}`}>
                      <Icon icon={item.icon} className={`text-2xl ${styles.text}`} />
                    </div>

                    <h3 className="mb-2 font-bold text-charcoal">{item.title}</h3>

                    <p className="text-sm leading-relaxed text-charcoal/65">{item.description}</p>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default Home;
