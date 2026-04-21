import { Icon } from "@iconify/react";

const milestones = [
  {
    year: "2019",
    title: "Company Established",
    description:
      "Established in 2019, Big Hill Lanka Pvt Ltd began its journey in Sri Lanka’s food industry by exporting premium spices and seafood.",
    icon: "mdi:office-building-outline",
    accent: "primary",
  },
  {
    year: "2020",
    title: "Import Expansion",
    description:
      "The company expanded into importing high-quality Basmati rice from India and Pakistan to serve the local HORECA and modern trade markets.",
    icon: "mdi:grain",
    accent: "gold",
  },
  {
    year: "2021",
    title: "Market Strengthening",
    description:
      "Big Hill Lanka strengthened its role as a stable and reliable partner to prominent HORECA clients and leading modern trade outlets across the island.",
    icon: "mdi:store-outline",
    accent: "red",
  },
  {
    year: "2022",
    title: "Exclusive Distribution Partnerships",
    description:
      "The company became the exclusive distributor of renowned international brands such as Bikano Bestari and O My Pop.",
    icon: "mdi:handshake-outline",
    accent: "primary",
  },
  {
    year: "2023",
    title: "Own Brands Portfolio Growth",
    description: "Big Hill Lanka continued building its own trusted portfolio with Sultan Gold, Big Star, and Haiwa.",
    icon: "mdi:star-outline",
    accent: "gold",
  },
  {
    year: "2024",
    title: "Growth With Global Ambition",
    description:
      "Driven by customer satisfaction and market research, the business continued expanding its product portfolio while strengthening local leadership and global ambition.",
    icon: "mdi:earth",
    accent: "red",
  },
];

const accentClasses = {
  primary: {
    pill: "bg-primary/10 text-primary",
    iconBg: "bg-primary",
  },
  gold: {
    pill: "bg-gold/15 text-[#8a6b14]",
    iconBg: "bg-gold",
  },
  red: {
    pill: "bg-red/10 text-red",
    iconBg: "bg-red",
  },
};

export default function TimelineSection() {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/30 via-gold/30 to-red/20 -translate-x-1/2" />

      <div className="space-y-12">
        {milestones.map((m, i) => {
          const styles = accentClasses[m.accent];

          return (
            <div
              key={m.year}
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs mb-2 ${styles.pill}`}
                  style={{ fontWeight: 700 }}
                >
                  {m.year}
                </div>

                <h3 className="text-lg text-charcoal mb-2" style={{ fontWeight: 700 }}>
                  {m.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>

              <div className="hidden md:flex w-2/12 justify-center">
                <div
                  className={`w-12 h-12 rounded-full ${styles.iconBg} flex items-center justify-center shadow-lg z-10`}
                >
                  <Icon icon={m.icon} className="text-white text-xl" />
                </div>
              </div>

              <div className="w-full md:w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
