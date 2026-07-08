import AnimatedContent from "@/components/AnimatedContent";

function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <AnimatedContent direction="vertical" distance={20}>
          <div className={`mb-3 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
            <span className="inline-block h-0.5 w-8 rounded-full bg-gold" />
            <span className={`text-xs font-bold uppercase tracking-widest ${light ? "text-gold" : "text-primary"}`}>
              {eyebrow}
            </span>
            <span className="inline-block h-0.5 w-8 rounded-full bg-gold" />
          </div>
        </AnimatedContent>
      )}

      <AnimatedContent direction="vertical" distance={30} delay={eyebrow ? 80 : 0}>
        <h2
          className={`font-serif text-4xl font-normal leading-tight tracking-tight md:text-5xl ${
            light ? "text-secondary" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </AnimatedContent>

      {subtitle && (
        <AnimatedContent direction="vertical" distance={30} delay={eyebrow ? 140 : 60}>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed ${
              center ? "mx-auto" : ""
            } ${light ? "text-secondary/70" : "text-charcoal/65"}`}
          >
            {subtitle}
          </p>
        </AnimatedContent>
      )}
    </div>
  );
}

export default SectionHeader;
