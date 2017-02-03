/* @flow */

const Eases = {
  entrance: {
    animationTimingFunction: `cubic-bezier(0.39, 0.575, 0.565, 1)`,
  },
  entranceEmphasis: {
    animationTimingFunction: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
  },
  exit: {
    animationTimingFunction: `cubic-bezier(0.47, 0, 0.745, 0.715)`,
  },
  exitEmphasis: {
    animationTimingFunction: `cubic-bezier(0.6, -0.28, 0.735, 0.045)`,
  },
}

const Timing = {
  t1: {
    animationDuration: 0.1,
  },
  t2: {
    animationDuration: 0.15,
  },
  t3: {
    animationDuration: 0.2,
  },
  t4: {
    animationDuration: 0.25,
  },
  t5: {
    animationDuration: 0.3,
  },
  t6: {
    animationDuration: 0.5,
  },
  t7: {
    animationDuration: 1,
  },
  t8: {
    animationDuration: 1.5,
  }
}

const DefaultFillMode = {
  animationFillMode: 'both'
};

const EnterFromLeft = {
  '0%': {
    WebkitTransform: 'translate3d(-100px, 0, 0) scale(0.95)',
    transform: 'translate3d(-100px, 0, 0) scale(0.95)',
    transformOrigin: '50% 50%',
    opacity: 0
  },

  '100%': {
    WebkitTransform: 'translate3d(0, 0, 0) scale(1)',
    transform: 'translate3d(0, 0, 0) scale(1)',
    transformOrigin: '50% 50%',
    opacity: 1
  },
};

const EnterFromRight = {
  '0%': {
    WebkitTransform: 'translate3d(100px, 0, 0) scale(0.95)',
    transform: 'translate3d(100px, 0, 0) scale(0.95)',
    transformOrigin: '50% 50%',
    opacity: 0
  },

  '100%': {
    WebkitTransform: 'translate3d(0, 0, 0) scale(1)',
    transform: 'translate3d(0, 0, 0) scale(1)',
    transformOrigin: '50% 50%',
    opacity: 1
  },
};

const ExitFromLeft = {
  '0%': {
    transform: 'translate3d(0, 0, 0) scale(1)',
    transform: 'translate3d(0, 0, 0) scale(1)',
    transformOrigin: '50% 50%',
    opacity: 1
  },

  '100%': {
    transform: 'translate3d(-100px, 0, 0) scale(0.95)',
    transform: 'translate3d(-100px, 0, 0) scale(0.95)',
    transformOrigin: '50% 50%',
    opacity: 0
  },
};

const ExitFromRight = {
  '0%': {
    transform: 'translate3d(0, 0, 0) scale(1)',
    transform: 'translate3d(0, 0, 0) scale(1)',
    transformOrigin: '50% 50%',
    opacity: 1
  },

  '100%': {
    transform: 'translate3d(100px, 0, 0) scale(0.95)',
    transformOrigin: '50% 50%',
    opacity: 0
  },
};

const EnterClockwise = {
  '0%': {
    transform: 'translateZ(0) scale(0.95) rotate(-90deg)',
    transformOrigin: '50% 50%',
    opacity: 0
  },

  '100%': {
    transform: 'translateZ(0) scale(0.95) rotate(0deg)',
    transformOrigin: '50% 50%',
    opacity: 1
  },
};

const EnterCounterClockwise = {
  '0%': {
    transform: 'translateZ(0) scale(0.95) rotate(90deg)',
    transformOrigin: '50% 50%',
    opacity: 0
  },

  '100%': {
    transform: 'translateZ(0) scale(0.95) rotate(0deg)',
    transformOrigin: '50% 50%',
    opacity: 1
  },
};

const ExitClockwise = {
  '0%': {
    transform: 'translateZ(0) scale(0.95) rotate(-90deg)',
    transformOrigin: '50% 50%',
    opacity: 1
  },

  '100%': {
    transform: 'translateZ(0) scale(0.95) rotate(0deg)',
    transformOrigin: '50% 50%',
    opacity: 0
  },
};

const ExitCounterClockwise = {
  '0%': {
    transform: 'translateZ(0) scale(0.95) rotate(0deg)',
    transformOrigin: '50% 50%',
    opacity: 1
  },

  '100%': {
    transform: 'translateZ(0) scale(0.95) rotate(90deg)',
    transformOrigin: '50% 50%',
    opacity: 0
  },
};

const Shake = {
  '10%, 90%': {
    transform: 'translate3d(-1px, 0, 0)',
  },

  '20%, 80%': {
    transform: 'translate3d(2px, 0, 0)',
  },

  '30%, 50%, 70%': {
    transform: 'translate3d(-4px, 0, 0)',
  },

  '40%, 60%': {
    transform: 'translate3d(4px, 0, 0)',
  },
}

const AppearIn = {
  'from': {
    opacity: 0,
  },

  'to': {
    opacity: 1,
  }
};

const AppearOut = {
  'from': {
    opacity: 0,
  },

  'to': {
    opacity: 1,
  }
};

const Animations = {
  ...EnterFromLeft,
  ...EnterFromRight,
  ...ExitFromLeft,
  ...ExitFromRight,
  ...EnterClockwise,
  ...EnterCounterClockwise,
  ...ExitClockwise,
  ...ExitCounterClockwise,
  ...Shake,
  ...AppearIn,
  ...AppearOut,
  ...Eases,
  ...Timing,
  ...DefaultFillMode
}

export default Animations
