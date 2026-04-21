import { Icon } from "@iconify/react";

export default function LeadershipCard({ name, role, description, image, featured = false }) {
  return (
    <div
      className={`card-hover group text-center bg-white rounded-3xl p-6 border border-primary/10 shadow-sm ${featured ? "md:scale-[1.02]" : ""}`}
    >
      <div className="relative inline-block mb-5">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary/15 shadow-xl mx-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {featured && (
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-md">
            <Icon icon="mdi:crown" className="text-white text-sm" />
          </div>
        )}
      </div>

      <h3 className="text-base text-charcoal mb-1" style={{ fontWeight: 800 }}>
        {name}
      </h3>

      <span className="text-xs text-primary uppercase tracking-wider block mb-3" style={{ fontWeight: 700 }}>
        {role}
      </span>

      <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
}
