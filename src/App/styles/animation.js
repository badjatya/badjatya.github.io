export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const sideNavAnimation = {
  hidden: {
    opacity: 0,
    x: 320,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
    },
  },
  exit: {
    x: 320,
    transition: {
      duration: 0.75,
    },
  },
};

export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
