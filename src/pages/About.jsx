import { Icon } from "@iconify/react";

import SectionHeader from "@/components/SectionHeader";
import TimelineSection from "@/components/TimelineSection";
import LeadershipCard from "@/components/LeadershipCard";
import CTASection from "@/components/CTASection";
import AnimatedContent from "@/components/AnimatedContent";

import about1 from "@/assets/about1.webp";
import about2 from "@/assets/about2.webp";
import about3 from "@/assets/about3.webp";
import about4 from "@/assets/about4.webp";

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

function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary px-6 pb-20 pt-32">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary/5" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-gold/10" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <AnimatedContent direction="vertical" distance={24}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary/80">
              <Icon icon="mdi:information" />
              About Big Hill
            </div>
          </AnimatedContent>

          <AnimatedContent direction="vertical" distance={32} delay={80}>
            <h1 className="mx-auto mb-6 max-w-4xl font-serif text-5xl font-semibold leading-tight tracking-tight text-secondary sm:text-6xl lg:text-7xl">
              Building Trust Through <span className="italic text-gold">Quality Distribution</span>
            </h1>
          </AnimatedContent>

          <AnimatedContent direction="vertical" distance={32} delay={150}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary/70">
              A Sri Lankan FMCG distributor, importer, exporter, and HORECA supply partner built around reliable
              products, strong partnerships, and dependable market execution.
            </p>
          </AnimatedContent>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-b from-transparent to-secondary" />
      </section>

      <section className="bg-secondary px-6 py-24 overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedContent direction="horizontal" reverse>
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Leading distributor and exporter in Sri Lanka’s food industry"
              />

              <div className="space-y-5 text-base leading-relaxed text-charcoal/65">
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
                  <span className="font-semibold text-red"> Bikano</span>,
                  <span className="font-semibold text-red"> Bestari</span>, and
                  <span className="font-semibold text-red"> O My Pop</span>, along with our own trusted brands
                  <span className="font-semibold text-gold"> Sultan Gold</span>,
                  <span className="font-semibold text-primary"> Big Star</span>, and
                  <span className="font-semibold text-red"> Haiwa</span>.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { value: "2019", label: "Established" },
                  { value: "750+", label: "HORECA" },
                  { value: "1,000+", label: "Large Modern Markets" },
                  { value: "2,000+", label: "Modern Markets" },
                  { value: "40,000+", label: "Retailers" },
                  { value: "Islandwide", label: "Coverage" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                    <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
                    <div className="mt-1 text-xs md:text-sm text-charcoal/55">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={about1} alt="Big Hill operations" className="h-48 w-full rounded-2xl object-cover shadow-md" />
              <img src={about2} alt="Big Hill team" className="mt-8 h-48 w-full rounded-2xl object-cover shadow-md" />
              <img
                src={about3}
                alt="Big Hill distribution"
                className="-mt-4 h-48 w-full rounded-2xl object-cover shadow-md"
              />
              <img
                src={about4}
                alt="Big Hill quality"
                className="mt-4 h-48 w-full rounded-2xl object-cover shadow-md"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="pointer-events-auto z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-2xl">
                <Icon icon="mdi:leaf" className="text-3xl text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <AnimatedContent direction="horizontal" reverse>
            <div className="rounded-3xl border border-primary/10 bg-primary p-8 text-secondary shadow-sm md:p-10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="font-serif text-3xl font-semibold">What We Do</h2>
                <Icon icon="mdi:ferry" className="text-4xl text-gold" />
              </div>

              <div className="mb-6 inline-block h-1 w-14 rounded-sm bg-gold" />

              <p className="leading-relaxed text-secondary/85">
                As a leading food import and export company, we specialize in delivering high-demand FMCG products to
                our customers globally. Our expertise spans exporting seafood, spices, and coconut products to diverse
                markets, with a strong network of professional buyers and distributors across Canada, the USA, UAE,
                Qatar, Hong Kong, Thailand, and beyond.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent direction="horizontal">
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  icon: "mdi:eye-outline",
                  title: "Our Vision",
                  text: "Driven by our commitment to excellence and customer satisfaction, our vision is to continuously engage in market research and expand our product portfolio to meet the ever-evolving local and global demands.",
                },
                {
                  icon: "mdi:rocket-launch-outline",
                  title: "Our Mission",
                  text: "Delivering high-quality FMCG products to HORECA and modern trade markets, we build lasting partnerships through reliable supply, competitive pricing, and outstanding customer service.",
                },
                {
                  icon: "mdi:flag-outline",
                  title: "Our Goal",
                  text: "Expanding globally while leading locally, our goal is to drive sustained growth and customer satisfaction by innovating our product portfolio and fortifying our distribution networks.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-red/10 bg-red p-8 text-secondary shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15">
                      <Icon icon={item.icon} className="text-2xl text-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="leading-relaxed text-secondary/85">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Our Growth Journey"
            title="How Big Hill Lanka Has Grown"
            subtitle="A focused look at the company’s development from export beginnings to FMCG distribution, HORECA supply, and brand partnerships."
            center
          />

          <TimelineSection />
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Company Leadership"
            title="The People Behind Big Hill Lanka"
            subtitle="Experienced leadership across strategy, marketing, partnerships, finance, sales, and distribution."
            center
          />

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {leadership.map((person, index) => (
              <AnimatedContent key={person.name} direction="vertical" distance={32} delay={index * 80}>
                <LeadershipCard {...person} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let’s Build Long-Term Partnerships"
        subtitle="From distribution to brand growth, we collaborate with businesses that value reliability, scale, and consistent market execution across Sri Lanka."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
      />
    </main>
  );
}

export default About;
