import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function BrandFeature({ brand, tagline, description, category, image, reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center py-16 border-b border-gray-100 last:border-0`}>
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div
            className={`absolute -inset-4 rounded-3xl opacity-10 ${reverse ? 'bg-[#B32025]' : 'bg-[#0E6B3C]'}`}
          />
          <img
            src={image}
            alt={brand}
            className="relative w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-[#D4A72C] flex items-center justify-center shadow-lg">
            <Icon icon="mdi:star-four-points" className="text-white text-3xl" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E6B3C]/10 text-[#0E6B3C] text-xs font-700 uppercase tracking-wider mb-4" style={{ fontWeight: 700 }}>
          <Icon icon="mdi:check-circle" className="text-sm" />
          {category}
        </span>
        <h3 className="text-3xl md:text-4xl font-800 text-[#1E1E1E] mb-3" style={{ fontWeight: 800 }}>
          {brand}
        </h3>
        {tagline && (
          <p className="text-lg font-600 text-[#0E6B3C] mb-4 italic" style={{ fontWeight: 600 }}>
            "{tagline}"
          </p>
        )}
        <p className="text-gray-600 leading-relaxed mb-6 text-base">
          {description}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E6B3C] text-white text-sm font-600 hover:bg-[#0a5230] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ fontWeight: 600 }}
        >
          <span>Enquire About {brand}</span>
          <Icon icon="mdi:arrow-right" />
        </Link>
      </div>
    </div>
  );
}
