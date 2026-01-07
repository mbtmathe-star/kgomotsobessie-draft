import type { Easing } from "framer-motion";

// Subtle, professional animations
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as Easing } 
  },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as Easing } 
  },
};
