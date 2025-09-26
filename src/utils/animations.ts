// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" 
  }
};

export const fadeInDown = {
  initial: { 
    opacity: 0, 
    y: -60 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" 
  }
};

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -60 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" 
  }
};

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 60 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" 
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  transition: { 
    duration: 0.7, 
    ease: "easeOut" 
  }
};

// Container for staggered animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.6, 
    ease: "easeOut" 
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: { 
    scale: 0.95 
  }
};

export const hoverLift = {
  whileHover: { 
    y: -8,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 }
  }
};

// Page transition
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0
  },
  exit: { 
    opacity: 0,
    y: -20
  },
  transition: {
    duration: 0.6,
    ease: "easeInOut"
  }
};

// Viewport settings for scroll animations
export const viewportOnce = {
  once: false,
  amount: 0.2
};

export const viewportRepeat = {
  once: false,
  amount: 0.2
};

export const viewportScrollDown = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
};

export const viewportLanguageAware = {
  once: false,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
};

// Custom easing functions
export const customEasing = {
  ease: [0.6, -0.05, 0.01, 0.99],
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15
  }
};