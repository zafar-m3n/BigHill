import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Select from "react-select";

import AnimatedContent from "@/components/AnimatedContent";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

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
  "Sultan Gold": { dot: "bg-gold" },
  Bikano: { dot: "bg-red" },
  Bestari: { dot: "bg-primary" },
  "O My Pop": { dot: "bg-red" },
  "Big Star": { dot: "bg-gold" },
};

const brandOptions = BRANDS.map((brand) => ({
  value: brand,
  label: brand,
}));

const categoryOptions = CATEGORIES.map((category) => ({
  value: category.label,
  label: category.label,
}));

const selectClassNames = {
  control: () =>
    "h-14 rounded-2xl border border-primary/10 bg-secondary px-4 transition-all duration-200 hover:border-primary/25",
  valueContainer: () => "flex h-full items-center px-0",
  singleValue: () => "text-sm font-semibold text-charcoal",
  placeholder: () => "text-sm text-charcoal/45",
  indicatorsContainer: () => "h-full text-charcoal/45",
  dropdownIndicator: () => "text-charcoal/45 transition-colors hover:text-primary",
  menu: () => "z-50 mt-2 overflow-hidden rounded-2xl border border-primary/10 bg-white p-2 shadow-xl shadow-primary/10",
  option: ({ isSelected, isFocused }) =>
    `cursor-pointer rounded-xl px-3 py-2.5 text-sm transition-colors ${
      isSelected ? "bg-primary text-secondary" : isFocused ? "bg-primary/10 text-primary" : "bg-white text-charcoal"
    }`,
};

function ActiveFilterPill({ label, onRemove }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs font-medium text-charcoal/70 transition-all duration-200 hover:border-red/20 hover:text-red"
    >
      <span>{label}</span>
      <Icon icon="mdi:close" className="text-sm" />
    </button>
  );
}

function EmptyState({ query }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-primary/15 bg-white py-24 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
        <Icon icon="mdi:magnify-close" className="text-3xl text-charcoal/30" />
      </div>

      <p className="mb-2 font-serif text-3xl font-normal text-charcoal">No products found</p>

      <p className="max-w-sm text-sm leading-relaxed text-charcoal/55">
        {query
          ? `No results for "${query}". Try another keyword or clear your filters.`
          : "Try adjusting the selected category, brand, or search term."}
      </p>
    </div>
  );
}

function Products() {
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

  const hasFilters = activeCategory !== "All" || activeBrand !== "All Brands" || searchQuery.trim() !== "";

  const resetFilters = () => {
    setActiveCategory("All");
    setActiveBrand("All Brands");
    setSearchQuery("");
  };

  return (
    <main className="bg-secondary">
      <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary to-charcoal">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-10 h-105 w-105 translate-x-1/3 rounded-full bg-secondary/5" />
          <div className="absolute bottom-0 left-0 h-70 w-70 -translate-x-1/3 translate-y-1/4 rounded-full bg-gold/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-12">
          <AnimatedContent direction="vertical" distance={24}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-secondary/85">
              <Icon icon="mdi:package-variant-closed" />
              Product Catalogue
            </div>
          </AnimatedContent>

          <AnimatedContent direction="vertical" distance={32} delay={80}>
            <h1 className="mb-5 max-w-3xl font-serif text-5xl font-normal leading-none text-secondary sm:text-6xl lg:text-7xl">
              Explore Our Product <span className="italic text-gold">Range</span>
            </h1>
          </AnimatedContent>

          <AnimatedContent direction="vertical" distance={32} delay={150}>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-secondary/70 lg:text-lg">
              A structured FMCG catalogue covering rice, oils, snacks, sweets, popcorn, and cooking solutions across our
              represented brands.
            </p>
          </AnimatedContent>

          <AnimatedContent direction="vertical" distance={32} delay={220}>
            <div className="flex flex-wrap gap-3">
              {["Sultan Gold", "Bikano", "Bestari", "O My Pop", "Big Star"].map((brand) => (
                <div
                  key={brand}
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/10 px-4 py-2 backdrop-blur-sm"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${BRAND_META[brand]?.dot}`} />
                  <span className="text-sm font-medium text-secondary/85">{brand}</span>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>

        <div className="h-16 bg-linear-to-b from-transparent to-secondary" />
      </section>

      <section className="px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedContent direction="vertical" distance={32}>
            <div className="mb-8 rounded-3xl border border-primary/10 bg-white shadow-xl shadow-primary/5">
              <div className="border-b border-primary/10 bg-secondary/70 p-5 md:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                      <Icon icon="mdi:tune-variant" />
                      Filter Catalogue
                    </div>

                    <h2 className="text-xl font-extrabold text-charcoal">Find the right product faster</h2>
                  </div>

                  {hasFilters && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-red/15 bg-red/10 px-4 py-2 text-sm font-semibold text-red transition-all duration-200 hover:bg-red hover:text-secondary"
                    >
                      <Icon icon="mdi:filter-remove-outline" />
                      Clear all
                    </button>
                  )}
                </div>
              </div>

              <div className="grid gap-4 p-5 md:grid-cols-3 md:p-6">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-charcoal/45">
                    Search Products
                  </label>

                  <div className="relative">
                    <Icon
                      icon="mdi:magnify"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-charcoal/35"
                    />

                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search product, brand, or category"
                      className="h-14 w-full rounded-2xl border border-primary/10 bg-secondary pl-12 pr-11 text-sm text-charcoal outline-none transition-all duration-200 placeholder:text-charcoal/35 focus:border-primary/40 focus:bg-white"
                    />

                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/35 transition-colors hover:text-red"
                      >
                        <Icon icon="mdi:close-circle" className="text-lg" />
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-charcoal/45">
                    Category
                  </label>

                  <Select
                    options={categoryOptions}
                    value={categoryOptions.find((option) => option.value === activeCategory)}
                    onChange={(selected) => setActiveCategory(selected ? selected.value : "All")}
                    isClearable={false}
                    isSearchable={false}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    unstyled
                    className="text-sm"
                    classNamePrefix="category-select"
                    classNames={selectClassNames}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-charcoal/45">
                    Brand
                  </label>

                  <Select
                    options={brandOptions}
                    value={brandOptions.find((option) => option.value === activeBrand)}
                    onChange={(selected) => setActiveBrand(selected ? selected.value : "All Brands")}
                    isClearable={false}
                    isSearchable={false}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    unstyled
                    className="text-sm"
                    classNamePrefix="brand-select"
                    classNames={selectClassNames}
                  />
                </div>
              </div>

              {hasFilters && (
                <div className="border-t border-primary/10 p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2">
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
                </div>
              )}
            </div>
          </AnimatedContent>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-charcoal/60">
              Showing <span className="font-bold text-charcoal">{filtered.length}</span> products
            </p>
          </div>

          {filtered.length === 0 ? (
            <EmptyState query={searchQuery} />
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {filtered.map((product, index) => (
                <AnimatedContent key={product.id} direction="vertical" distance={32} delay={(index % 4) * 50}>
                  <ProductCard product={product} />
                </AnimatedContent>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline="Need product details for wholesale or distribution?"
        subtitle="Reach out to discuss availability, pack sizes, brand representation, or distribution opportunities in Sri Lanka."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Enquire About Our Brands"
      />
    </main>
  );
}

export default Products;
