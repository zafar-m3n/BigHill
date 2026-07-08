import sultangold from "@/assets/sultangold.webp";
import bigstar from "@/assets/bigstar.webp";
import bikano from "@/assets/bikano.webp";
import haiwa from "@/assets/haiwa.webp";
import omypop from "@/assets/omypop.webp";
import bestari from "@/assets/bestari.webp";

const brands = [
  { name: "Sultan Gold", logo: sultangold },
  { name: "Big Star", logo: bigstar },
  { name: "Bikano", logo: bikano },
  { name: "Haiwa", logo: haiwa },
  { name: "O My Pop", logo: omypop },
  { name: "Bestari", logo: bestari },
];

const repeatedBrands = [...brands, ...brands, ...brands];

function BrandRibbon() {
  return (
    <section className="overflow-hidden border-y border-primary/10 bg-secondary py-7">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {repeatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="mx-4 flex shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white px-8 py-4 transition-all duration-200 hover:border-primary/30"
            >
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandRibbon;
