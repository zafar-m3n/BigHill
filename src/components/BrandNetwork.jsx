// BrandNetwork.jsx
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import RevealOnScroll from "./RevealOnScroll";

import sultangold from "../assets/sultangold.webp";
import bigstar from "../assets/bigstar.webp";
import haiwa from "../assets/haiwa.webp";
import bikano from "../assets/bikano.webp";
import bestari from "../assets/bestari.webp";
import omypop from "../assets/omypop.webp";

const brandGroups = [
  {
    eyebrow: "Own Brands",
    title: "Built by Big Hill",
    description:
      "Sultan Gold, Big Star, and Haiwa represent Big Hill’s trusted in-house portfolio across rice, sunflower oil, and chilled/frozen food solutions.",
    icon: "mdi:shield-star-outline",
    brands: [
      { name: "Sultan Gold", logo: sultangold },
      { name: "Big Star", logo: bigstar },
      { name: "Haiwa", logo: haiwa },
    ],
  },
  {
    eyebrow: "Exclusive Partner Brands",
    title: "Distributed by Big Hill",
    description:
      "Big Hill is the exclusive distributor for Bikano, Bestari, and O My Pop, bringing popular international FMCG brands to Sri Lanka.",
    icon: "mdi:handshake-outline",
    brands: [
      { name: "Bikano", logo: bikano },
      { name: "Bestari", logo: bestari },
      { name: "O My Pop", logo: omypop },
    ],
  },
];

export default function BrandNetwork() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <RevealOnScroll direction="up">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <Icon icon="mdi:storefront-outline" className="text-base" />
              Our Brand Network
            </div>

            <h2
              className="text-charcoal"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: 1.05,
              }}
            >
              Owned and exclusive brands built for modern trade
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
              A growing portfolio of owned and exclusive partner brands built for modern trade, HORECA, and everyday
              consumers.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {brandGroups.map((group, index) => (
            <RevealOnScroll key={group.title} direction={index === 0 ? "left" : "right"} delay={index * 100}>
              <div className="group h-full rounded-3xl border border-primary/10 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">{group.eyebrow}</p>

                    <h3 className="text-2xl font-extrabold text-charcoal">{group.title}</h3>
                  </div>

                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon icon={group.icon} className="text-2xl text-primary" />
                  </div>
                </div>

                <p className="mb-7 text-sm leading-7 text-gray-600">{group.description}</p>

                <div className="grid grid-cols-3 gap-3">
                  {group.brands.map((brand) => (
                    <div
                      key={brand.name}
                      className="flex h-28 items-center justify-center rounded-2xl border border-primary/10 bg-white p-4 transition-all duration-200 hover:border-primary/25 hover:shadow-md"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-16 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={160}>
          <div className="mt-6 rounded-3xl bg-primary p-7 text-white shadow-xl md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">Market Reach</p>

              <h3 className="text-2xl font-extrabold">
                Positioned across supermarkets, HORECA buyers, retail networks, and nationwide distribution channels.
              </h3>
            </div>

            <Link
              to="/products"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream md:mt-0"
            >
              View Product Range
              <Icon icon="mdi:arrow-right" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
