import { Icon } from "@iconify/react";

const brands = [
  { name: "Sultan Gold", icon: "mdi:grain", color: "#D4A72C" },
  { name: "Big Star", icon: "mdi:star-four-points", color: "#0E6B3C" },
  { name: "Haiwa", icon: "mdi:food-variant", color: "#B32025" },
  { name: "Bikano Bestari", icon: "mdi:cookie", color: "#B32025" },
  { name: "O My Pop", icon: "mdi:popcorn", color: "#B32025" },
];

const doubled = [...brands, ...brands, ...brands, ...brands];

export default function BrandRibbon() {
  return (
    <section className="py-8 bg-white border-y border-primary/10 overflow-hidden">
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="shrink-0 mx-4 flex cursor-default items-center gap-3 rounded-xl border border-primary/10 bg-cream px-8 py-3 transition-colors duration-200 hover:border-primary/30"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${brand.color}18` }}
              >
                <Icon icon={brand.icon} style={{ color: brand.color }} className="text-xl" />
              </div>

              <span className="whitespace-nowrap text-sm text-charcoal" style={{ fontWeight: 700 }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
