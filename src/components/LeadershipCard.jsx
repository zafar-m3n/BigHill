import { Icon } from "@iconify/react";

function LeadershipCard({ name, role, description, image, featured = false }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-primary/10 bg-secondary p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        featured ? "md:scale-105" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="relative mb-5 inline-block">
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-primary/15 shadow-xl transition-transform duration-300 group-hover:scale-105 md:h-28 md:w-28">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {featured && (
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold shadow-md">
            <Icon icon="mdi:crown" className="text-sm text-secondary" />
          </div>
        )}
      </div>

      <h3 className="mb-1 text-base font-extrabold text-charcoal">{name}</h3>

      <span className="mb-3 block text-xs font-bold uppercase tracking-wide text-primary">{role}</span>

      <p className="mx-auto max-w-xs text-sm leading-relaxed text-charcoal/70">{description}</p>
    </div>
  );
}

export default LeadershipCard;
