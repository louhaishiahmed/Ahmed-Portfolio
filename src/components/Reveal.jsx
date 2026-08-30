import { motion } from "framer-motion";

/**
 * Scroll-triggered fade + slide-in, matching the hero's load animation
 * (same easing and travel). Reveals once, when it enters the viewport.
 *
 * When reduced motion is requested it renders in the final state with
 * no transition. `delay` lets a caller stagger a group of Reveals.
 */
export default function Reveal({
  children,
  reduced,
  as = "div",
  delay = 0,
  y = 24,
  amount = 0.3,
  className,
  ...rest
}) {
  const Tag = motion[as] ?? motion.div;

  if (reduced) {
    return (
      <Tag className={className} initial={false} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
