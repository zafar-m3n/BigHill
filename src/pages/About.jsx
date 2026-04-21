import { Icon } from "@iconify/react";
import SectionHeader from "../components/SectionHeader";
import TimelineSection from "../components/TimelineSection";
import LeadershipCard from "../components/LeadershipCard";
import ValueCard from "../components/ValueCard";
import CTASection from "../components/CTASection";
import RevealOnScroll from "../components/RevealOnScroll";

import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";
import about4 from "../assets/about4.webp";

const leadership = [
  {
    name: "Faizal Rasan",
    role: "Founder & Director",
    description:
      "Faizal sets the company's strategic vision. With over a decade of experience across sales, brand management, and distribution, this role guarantees operational effectiveness from product development through market delivery.",
    image: "https://picsum.photos/seed/faizal-rasan/300/300",
    featured: true,
  },
  {
    name: "Rishard Maharoof",
    role: "Head of Marketing & Brand Strategy",
    description:
      "Rishard is the prime architect of our consumer engagement and brand identity. This leader utilizes over 20 years of expertise to drive high-impact marketing campaigns and achieve sustained market share growth.",
    image: "https://picsum.photos/seed/rishard-maharoof/300/300",
  },
  {
    name: "Fahumy Razan",
    role: "Head of Commercial Partnerships",
    description:
      "Fahumy is focused on expanding our market footprint and revenue. Leveraging over 15 years of expertise in commercial strategy, this function secures high-value distribution deals and key strategic alliances globally.",
    image: "https://picsum.photos/seed/fahumy-razan/300/300",
  },
  {
    name: "Nuwan Bandara",
    role: "Finance Manager",
    description:
      "Nuwan ensures the company's fiscal stability and compliance. Combining deep financial planning with over thirteen years of accounting experience, this position provides rigorous oversight crucial for long-term, sustainable growth.",
    image: "https://picsum.photos/seed/nuwan-bandara/300/300",
  },
];

const values = [
  {
    icon: "mdi:eye-outline",
    title: "Our Vision",
    description:
      "Driven by our commitment to excellence and customer satisfaction, our vision is to continuously engage in market research and expand our product portfolio to meet the ever-evolving local and global demands.",
    color: "#B32025",
  },
  {
    icon: "mdi:rocket-launch-outline",
    title: "Our Mission",
    description:
      "Delivering high-quality FMCG products to HORECA and modern trade markets, we build lasting partnerships through reliable supply, competitive pricing, and outstanding customer service.",
    color: "#B32025",
  },
  {
    icon: "mdi:flag-outline",
    title: "Our Goal",
    description:
      "Expanding globally while leading locally, our goal is to drive sustained growth and customer satisfaction by innovating our product portfolio and fortifying our distribution networks.",
    color: "#B32025",
  },
  {
    icon: "mdi:handshake-outline",
    title: "What We Do",
    description:
      "As a leading food import and export company, we specialize in delivering high-demand FMCG products to our customers globally and across diverse markets.",
    color: "#0E6B3C",
  },
];

export default function About() {
  return (
    <main>
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a5230 0%, #0E6B3C 100%)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/10 -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs mb-6"
            style={{ fontWeight: 600 }}
          >
            <Icon icon="mdi:information" />
            Our Story
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            Building Trust Through <span style={{ color: "#D4A72C", fontStyle: "italic" }}>Quality Distribution</span>
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Established in 2019, Big Hill Lanka Pvt Ltd is a leading distributor and exporter in Sri Lanka’s food
            industry.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #FAF8F3 100%)" }}
        />
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll direction="left">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Leading distributor and exporter in Sri Lanka’s food industry"
              />

              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  Established in 2019, BIG HILL Lanka Pvt Ltd is a leading distributor and exporter in Sri Lanka’s food
                  industry. We began our journey by exporting premium spices and seafood, and have since expanded to
                  import high-quality Basmati rice from India and Pakistan to serve the local HORECA and modern trade
                  markets.
                </p>

                <p>
                  As a stable and reliable partner, we proudly cater to prominent HORECA clients and supply leading
                  modern trade outlets across the island. We are the exclusive distributors of renowned international
                  brands such as
                  <span className="font-semibold text-red"> Bikano Bestari</span> and
                  <span className="font-semibold text-red"> O My Pop</span>, along with our own trusted brands
                  <span className="font-semibold text-gold"> Sultan Gold</span>,
                  <span className="font-semibold text-primary"> Big Star</span>, and
                  <span className="font-semibold text-red"> Haiwa</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {[
                  { value: "2019", label: "Established" },
                  { value: "HORECA", label: "Core Market" },
                  { value: "3+", label: "Own Brands" },
                  { value: "Global", label: "Growth Vision" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 border border-primary/10 shadow-sm">
                    <div className="text-3xl text-primary" style={{ fontWeight: 800 }}>
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={about1} alt="Our operations" className="rounded-2xl w-full h-48 object-cover shadow-md" />
                <img src={about2} alt="Our team" className="rounded-2xl w-full h-48 object-cover shadow-md mt-8" />
                <img src={about3} alt="Distribution" className="rounded-2xl w-full h-48 object-cover shadow-md -mt-4" />
                <img src={about4} alt="Quality" className="rounded-2xl w-full h-48 object-cover shadow-md mt-4" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl pointer-events-auto z-10">
                  <Icon icon="mdi:leaf" className="text-white text-3xl" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <RevealOnScroll direction="left">
            <div className="rounded-3xl p-8 md:p-10 text-white shadow-sm bg-primary border border-primary/10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="text-3xl" style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 600 }}>
                  What We Do
                </h2>
                <Icon icon="mdi:ferry" className="text-4xl text-gold" />
              </div>

              <div className="gold-line mb-6" />

              <p className="text-white/85 leading-relaxed">
                As a leading food import and export company, we specialize in delivering high-demand FMCG products to
                our customers globally. Our expertise spans exporting seafood, spices, and coconut products to diverse
                markets, with a strong network of professional buyers and distributors across Canada, the USA, UAE,
                Qatar, Hong Kong, Thailand, and beyond.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="grid grid-cols-1 gap-5">
              <div className="rounded-3xl p-8 bg-red text-white shadow-sm border border-red/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon icon="mdi:eye-outline" className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 600 }}>
                    Our Vision
                  </h3>
                </div>

                <p className="text-white/85 leading-relaxed">
                  Driven by our commitment to excellence and customer satisfaction, our vision is to continuously engage
                  in market research and expand our product portfolio to meet the ever-evolving local and global
                  demands.
                </p>
              </div>

              <div className="rounded-3xl p-8 bg-red text-white shadow-sm border border-red/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon icon="mdi:rocket-launch-outline" className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 600 }}>
                    Our Mission
                  </h3>
                </div>

                <p className="text-white/85 leading-relaxed">
                  Delivering high-quality FMCG products to HORECA and modern trade markets, we build lasting
                  partnerships through reliable supply, competitive pricing, and outstanding customer service.
                </p>
              </div>

              <div className="rounded-3xl p-8 bg-red text-white shadow-sm border border-red/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon icon="mdi:flag-outline" className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 600 }}>
                    Our Goal
                  </h3>
                </div>

                <p className="text-white/85 leading-relaxed">
                  Expanding globally while leading locally, our goal is to drive sustained growth and customer
                  satisfaction by innovating our product portfolio and fortifying our distribution networks.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Our Journey"
            title="Key Milestones That Shaped Us"
            subtitle="From a growing food business to a trusted FMCG partner in Sri Lanka."
            center
          />
          <TimelineSection />
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Company Leadership"
            title="The People Behind Big Hill Lanka"
            subtitle="Leadership aligned with the roles and profiles shown in your company material."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
            {leadership.map((person) => (
              <LeadershipCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Company Values"
            title="Vision, Mission, Goal, and Focus"
            subtitle="Using the core company statements from the material you shared."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
