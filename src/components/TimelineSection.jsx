import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedContent from "@/components/AnimatedContent";

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
    pill: "bg-gold/15 text-gold",
    iconBg: "bg-gold",
  },
  red: {
    pill: "bg-red/10 text-red",
    iconBg: "bg-red",
  },
};

function TimelineSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-6 top-0 w-px bg-linear-to-b from-primary/30 via-gold/30 to-red/20 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-12">
        {milestones.map((milestone, index) => {
          const styles = accentClasses[milestone.accent];
          const isEven = index % 2 === 0;

          return (
            <AnimatedContent
              key={milestone.title}
              direction="horizontal"
              reverse={isDesktop ? isEven : false}
              distance={40}
              delay={index * 80}
            >
              <div
                className={`relative flex gap-5 pl-16 md:gap-10 md:pl-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <div className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${styles.pill}`}>
                    {milestone.label}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-charcoal">{milestone.title}</h3>

                  <p className="text-sm leading-relaxed text-charcoal/65">{milestone.description}</p>
                </div>

                <div className="absolute left-0 top-0 flex w-12 justify-center md:static md:w-2/12">
                  <div
                    className={`z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-charcoal/10 ${styles.iconBg}`}
                  >
                    <Icon icon={milestone.icon} className="text-xl text-secondary" />
                  </div>
                </div>

                <div className="hidden w-full md:block md:w-5/12" />
              </div>
            </AnimatedContent>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineSection;
