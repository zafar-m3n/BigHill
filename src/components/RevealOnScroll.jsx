import { useRevealSingle } from '../hooks/useReveal';

export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRevealSingle();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
