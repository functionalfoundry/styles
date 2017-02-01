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

const EnterFromLeft = {
    '0%': {
        transform: 'translate3d(-100px, 0, 0) scale(0.95)',
        transformOrigin: '50% 50%',
        opacity: 0
    },

    '100%': {
        transform: 'translate3d(0, 0, 0) scale(1)',
        transformOrigin: '50% 50%',
        opacity: 0
    },
};

const EnterFromRight = {
    '0%': {
        transform: 'translate3d(100px, 0, 0) scale(0.95)',
        transformOrigin: '50% 50%',
        opacity: 0
    },

    '100%': {
        transform: 'translate3d(0, 0, 0) scale(1)',
        transformOrigin: '50% 50%',
        opacity: 0
    },
};

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

const Keyframes = {
  ...EnterFromLeft,
  ...EnterFromRight,
  ...AppearIn,
  ...AppearOut,
}

const Animations = {
  ...Eases,
  ...Keyframes, //must be reworked so that the docs don't output keyframes
  ...Timing
}

export default Animations
