/* @flow */
const lengths = {
  micro: '1px',
  tiny: '2px',
  small: '4px',
  base: '12px',
  large: '18px',
  huge: '28px',
}

const colors = {
  light: 'rgba(0,0,0,0.25)',
  dark: 'rgba(0,0,0,0.22)',
}

const getDimension = (length, color) => `0 ${length} ${length} ${color}`

const Shadows = {
  small: {
    boxShadow: `${getDimension(lengths.small, colors.light)}, ${getDimension(lengths.small, colors.dark)}`,
  },
  base: {
    boxShadow: `${getDimension(lengths.base, colors.light)}, ${getDimension(lengths.small, colors.dark)}`,
  },
  large: {
    boxShadow: `${getDimension(lengths.large, colors.light)}, ${getDimension(lengths.base, colors.dark)}`,
  },
  huge: {
    boxShadow: `${getDimension(lengths.huge, colors.light)}, ${getDimension(lengths.base, colors.dark)}`,
  },
}

export default Shadows
