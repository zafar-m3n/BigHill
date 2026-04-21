import { useEffect, useRef } from 'react';

export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const targets = el.querySelectorAll('.reveal');
    if (targets.length > 0) {
      targets.forEach((t) => observer.observe(t));
    } else if (el.classList.contains('reveal')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

export function useRevealSingle(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
