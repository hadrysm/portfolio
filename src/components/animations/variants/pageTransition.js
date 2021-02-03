const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

export const pageTransitionVariants = {
  parent: {
    visible: {
      transition: {
        ...transition,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    hidden: {
      transition: {
        ...transition,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  },

  child: {
    visible: {
      scaleY: 1,
      transition: {
        ...transition,
        duration: 1.1,
      },
    },
    hidden: {
      scaleY: 0,
      transition: {
        ...transition,
        duration: 1.1,
      },
    },
  },
};
