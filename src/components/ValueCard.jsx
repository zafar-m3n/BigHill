import { Icon } from "@iconify/react";

export default function ValueCard({ icon, title, description, color = "#0E6B3C" }) {
  return (
    <div className="card-hover group bg-white rounded-2xl p-7 border border-primary/10 shadow-sm hover:border-primary/20">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color + "15" }}
      >
        <Icon icon={icon} style={{ color }} className="text-2xl" />
      </div>

      <h3 className="text-base text-charcoal mb-2" style={{ fontWeight: 700 }}>
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
