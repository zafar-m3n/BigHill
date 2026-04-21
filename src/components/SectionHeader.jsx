import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <RevealOnScroll direction="fade" className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
          <span className="inline-block w-8 h-0.5 bg-gold rounded-full" />
          <span
            className={`text-xs uppercase tracking-widest ${light ? "text-gold" : "text-primary"}`}
            style={{ fontWeight: 700 }}
          >
            {eyebrow}
          </span>
          <span className="inline-block w-8 h-0.5 bg-gold rounded-full" />
        </RevealOnScroll>
      )}

      <RevealOnScroll direction="up" delay={eyebrow ? 80 : 0}>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: light ? "white" : "#1E1E1E",
          }}
        >
          {title}
        </h2>
      </RevealOnScroll>

      {subtitle && (
        <RevealOnScroll direction="up" delay={eyebrow ? 140 : 60}>
          <p
            className={`mt-4 text-base leading-relaxed max-w-2xl ${
              center ? "mx-auto" : ""
            } ${light ? "text-white/70" : "text-gray-600"}`}
          >
            {subtitle}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
