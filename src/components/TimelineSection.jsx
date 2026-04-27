// TimelineSection.jsx
import { Icon } from "@iconify/react";

const milestones = [
  {
    label: "Established in 2019",
    title: "A Food Industry Business Takes Shape",
    description:
      "Big Hill Lanka Pvt Ltd was established in 2019 and began its journey in Sri Lanka’s food industry by exporting premium spices and seafood.",
    icon: "mdi:office-building-outline",
    accent: "primary",
  },
  {
    label: "Export Foundation",
    title: "Seafood, Spices, and Coconut Products",
    description:
      "The company built its early foundation through export activity, developing relationships with professional buyers and distributors across international markets.",
    icon: "mdi:ferry",
    accent: "gold",
  },
  {
    label: "Import Expansion",
    title: "Premium Basmati Rice Supply",
    description:
      "Big Hill Lanka expanded into importing high-quality Basmati rice from India and Pakistan to serve local HORECA and modern trade demand.",
    icon: "mdi:grain",
    accent: "red",
  },
  {
    label: "Market Growth",
    title: "HORECA and Modern Trade Presence",
    description:
      "The company strengthened its position as a reliable partner for prominent HORECA clients and leading modern trade outlets across Sri Lanka.",
    icon: "mdi:store-outline",
    accent: "primary",
  },
  {
    label: "Brand Portfolio",
    title: "Owned and Exclusive Partner Brands",
    description:
      "Big Hill Lanka continues to grow through its own trusted brands — Sultan Gold, Big Star, and Haiwa — while exclusively distributing Bikano, Bestari, and O My Pop.",
    icon: "mdi:handshake-outline",
    accent: "gold",
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
              key={m.title}
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs mb-2 font-bold ${styles.pill}`}>
                  {m.label}
                </div>

                <h3 className="text-lg text-charcoal mb-2 font-bold">{m.title}</h3>

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
