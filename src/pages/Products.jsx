import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Select from "react-select";
import RevealOnScroll from "../components/RevealOnScroll";
import CTASection from "../components/CTASection";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

const SERIF = {
  fontFamily: "'Instrument Serif', serif",
  fontWeight: 400,
};

const CATEGORIES = [
  { label: "All", icon: "mdi:view-grid-outline" },
  { label: "Rice & Grains", icon: "mdi:grain" },
  { label: "Chips", icon: "mdi:food-outline" },
  { label: "Namkeen", icon: "mdi:food" },
  { label: "Ambient Sweets", icon: "mdi:candy-outline" },
  { label: "Other Sweets & Snacks", icon: "mdi:cupcake" },
  { label: "Frying Flours & Seasonings", icon: "mdi:bowl-mix" },
  { label: "Flavored Popcorn", icon: "mdi:popcorn" },
  { label: "Edible Oils", icon: "mdi:bottle-tonic-outline" },
];

const BRANDS = ["All Brands", "Sultan Gold", "Bikano", "Bestari", "O My Pop", "Big Star"];

const BRAND_META = {
  "Sultan Gold": { color: "#D4A72C" },
  Bikano: { color: "#B32025" },
  Bestari: { color: "#0E6B3C" },
  "O My Pop": { color: "#B32025" },
  "Big Star": { color: "#D4A72C" },
};

const brandOptions = BRANDS.map((brand) => ({
  value: brand,
  label: brand,
}));

function CategoryItem({ cat, active, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
        active
          ? "border-primary bg-primary text-white shadow-md shadow-primary/15"
          : "border-black/8 bg-white text-charcoal hover:border-primary/25 hover:bg-primary/5"
      }`}
    >
      <span className="flex items-center gap-3">
        <Icon
          icon={cat.icon}
          className={`text-base ${active ? "text-white" : "text-charcoal/45 group-hover:text-primary"}`}
        />
        <span className="text-sm font-medium">{cat.label}</span>
      </span>

      {cat.label !== "All" && (
        <span
          className={`rounded-full px-2 py-1 text-[11px] leading-none ${
            active ? "bg-white/15 text-white" : "bg-cream text-charcoal/55"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function ActiveFilterPill({ label, onRemove }) {
  return (
    <button
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs font-medium text-charcoal/70 transition-all duration-200 hover:border-red/20 hover:text-red"
    >
      <span>{label}</span>
      <Icon icon="mdi:close" className="text-sm" />
    </button>
  );
}

function EmptyState({ query }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-[28px] border border-dashed border-black/10 bg-white py-24 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cream">
        <Icon icon="mdi:magnify-close" className="text-3xl text-charcoal/30" />
      </div>

      <p className="mb-2 text-2xl text-charcoal" style={SERIF}>
        No products found
      </p>

      <p className="max-w-sm text-sm leading-relaxed text-charcoal/55">
        {query
          ? `No results for "${query}". Try another keyword or clear your filters.`
          : "Try adjusting the selected category, brand, or search term."}
      </p>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All Brands");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let list = PRODUCTS;

    if (activeCategory !== "All") {
      list = list.filter((item) => item.category === activeCategory);
    }

    if (activeBrand !== "All Brands") {
      list = list.filter((item) => item.brand === activeBrand);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.brand.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query),
      );
    }

    return list;
  }, [activeCategory, activeBrand, searchQuery]);

  const catCount = (cat) =>
    PRODUCTS.filter((item) => item.category === cat && (activeBrand === "All Brands" || item.brand === activeBrand))
      .length;

  const hasFilters = activeCategory !== "All" || activeBrand !== "All Brands" || searchQuery.trim() !== "";

  const resetFilters = () => {
    setActiveCategory("All");
    setActiveBrand("All Brands");
    setSearchQuery("");
  };

  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "56px",
      borderRadius: "1rem",
      borderColor: state.isFocused ? "rgba(14,107,60,0.4)" : "rgba(0,0,0,0.08)",
      boxShadow: "none",
      backgroundColor: "#FAF8F3",
      paddingLeft: "2.2rem",
      paddingRight: "0.5rem",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "rgba(14,107,60,0.25)",
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 0.25rem",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(30,30,30,0.45)",
      fontSize: "0.875rem",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#1E1E1E",
      fontSize: "0.875rem",
      fontWeight: 500,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.06)",
      zIndex: 50,
    }),
    menuList: (base) => ({
      ...base,
      padding: "0.4rem",
    }),
    option: (base, state) => ({
      ...base,
      borderRadius: "0.75rem",
      fontSize: "0.875rem",
      backgroundColor: state.isSelected ? "#0E6B3C" : state.isFocused ? "rgba(14,107,60,0.06)" : "white",
      color: state.isSelected ? "white" : "#1E1E1E",
      cursor: "pointer",
      padding: "0.75rem 0.9rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "rgba(30,30,30,0.35)",
      "&:hover": {
        color: "rgba(30,30,30,0.6)",
      },
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "rgba(30,30,30,0.35)",
      "&:hover": {
        color: "#B32025",
      },
    }),
  };

  return (
    <main className="bg-cream">
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a5230 0%, #0E6B3C 60%, #145c35 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-10 h-105 w-105 translate-x-1/3 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 h-70 w-70 -translate-x-1/3 translate-y-1/4 rounded-full bg-gold/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-12">
          <RevealOnScroll direction="fade">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
              <Icon icon="mdi:package-variant-closed" />
              Product Catalogue
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={80}>
            <h1
              className="mb-5 max-w-3xl text-white"
              style={{
                ...SERIF,
                fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
                lineHeight: 1.05,
              }}
            >
              Explore Our Product{" "}
              <span className="text-gold" style={{ fontStyle: "italic" }}>
                Range
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/72 lg:text-lg">
              A structured FMCG catalogue covering rice, oils, snacks, sweets, popcorn, and cooking solutions across our
              represented brands.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={220}>
            <div className="flex flex-wrap gap-3">
              {["Sultan Gold", "Bikano", "Bestari", "O My Pop", "Big Star"].map((brand) => (
                <div
                  key={brand}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BRAND_META[brand]?.color }} />
                  <span className="text-sm font-medium text-white/85">{brand}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <div className="h-16" style={{ background: "linear-gradient(to bottom, transparent, #FAF8F3)" }} />
      </section>

      <section className="px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4">
            <aside className="xl:col-span-1">
              <div className="space-y-5 xl:sticky xl:top-24">
                <div className="rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-charcoal">
                      <Icon icon="mdi:tune-variant" className="text-lg text-primary" />
                      <h2 className="text-base font-bold">Filters</h2>
                    </div>

                    {hasFilters && (
                      <button
                        onClick={resetFilters}
                        className="text-xs font-semibold text-red transition-colors hover:text-red-dark"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/40">
                      Brand
                    </label>

                    <div className="relative">
                      <Icon
                        icon="mdi:tag-outline"
                        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-charcoal/30"
                      />

                      <Select
                        options={brandOptions}
                        value={brandOptions.find((option) => option.value === activeBrand)}
                        onChange={(selected) => setActiveBrand(selected ? selected.value : "All Brands")}
                        isClearable={false}
                        isSearchable={false}
                        styles={customSelectStyles}
                        className="text-sm"
                        classNamePrefix="brand-select"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 flex items-center gap-2 text-charcoal">
                    <Icon icon="mdi:shape-outline" className="text-lg text-primary" />
                    <h3 className="text-base font-bold">Categories</h3>
                  </div>

                  <div className="space-y-2.5">
                    {CATEGORIES.map((cat) => (
                      <CategoryItem
                        key={cat.label}
                        cat={cat}
                        active={activeCategory === cat.label}
                        count={catCount(cat.label)}
                        onClick={() => setActiveCategory(cat.label)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="xl:col-span-3">
              <div className="mb-6 rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="relative">
                  <Icon icon="mdi:magnify" className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/35" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by product, brand, or category"
                    className="w-full rounded-2xl border border-black/8 bg-cream py-4 pl-11 pr-10 text-sm text-charcoal outline-none transition-all duration-200 placeholder:text-charcoal/35 focus:border-primary/40 focus:bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/35 transition-colors hover:text-charcoal/60"
                    >
                      <Icon icon="mdi:close-circle" className="text-lg" />
                    </button>
                  )}
                </div>

                {hasFilters && (
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-black/6 pt-4">
                    {activeCategory !== "All" && (
                      <ActiveFilterPill
                        label={`Category: ${activeCategory}`}
                        onRemove={() => setActiveCategory("All")}
                      />
                    )}

                    {activeBrand !== "All Brands" && (
                      <ActiveFilterPill label={`Brand: ${activeBrand}`} onRemove={() => setActiveBrand("All Brands")} />
                    )}

                    {searchQuery.trim() !== "" && (
                      <ActiveFilterPill label={`Search: ${searchQuery}`} onRemove={() => setSearchQuery("")} />
                    )}
                  </div>
                )}
              </div>

              {filtered.length === 0 ? (
                <EmptyState query={searchQuery} />
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((product, index) => (
                    <RevealOnScroll key={product.id} direction="up" delay={(index % 3) * 70}>
                      <ProductCard
                        image={product.image}
                        name={product.name}
                        brand={product.brand}
                        description={product.description}
                        variant={product.packs}
                        category={product.category}
                      />
                    </RevealOnScroll>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll direction="up">
            <div className="relative overflow-hidden rounded-4xl bg-charcoal p-8 md:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/20" />
              <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/3 translate-y-1/3 rounded-full bg-gold/10" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    <Icon icon="mdi:handshake-outline" />
                    Business Enquiries
                  </div>

                  <h2
                    className="mb-3 text-white"
                    style={{
                      ...SERIF,
                      fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    Need product details for wholesale or distribution?
                  </h2>

                  <p className="text-sm leading-relaxed text-white/65 md:text-base">
                    Reach out to discuss availability, pack sizes, brand representation, or distribution opportunities
                    in Sri Lanka.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
                  >
                    <Icon icon="mdi:email-fast-outline" />
                    Contact Us
                  </Link>

                  <Link
                    to="/brands"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
                  >
                    View Brands
                    <Icon icon="mdi:arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
