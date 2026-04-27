// BrandRibbon.jsx
import sultangold from "../assets/sultangold.webp";
import bigstar from "../assets/bigstar.webp";
import bikano from "../assets/bikano.webp";
import haiwa from "../assets/haiwa.webp";
import omypop from "../assets/omypop.webp";
import bestari from "../assets/bestari.webp";

const brands = [
  { name: "Sultan Gold", logo: sultangold },
  { name: "Big Star", logo: bigstar },
  { name: "Bikano", logo: bikano },
  { name: "Haiwa", logo: haiwa },
  { name: "O My Pop", logo: omypop },
  { name: "Bestari", logo: bestari },
];

const doubled = [...brands, ...brands, ...brands];

export default function BrandRibbon() {
  return (
    <section className="py-7 bg-cream border-y border-primary/10 overflow-hidden">
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="mx-4 shrink-0 flex items-center justify-center rounded-2xl border border-primary/10 bg-white px-8 py-4 hover:border-primary/30 transition-all duration-200"
            >
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
