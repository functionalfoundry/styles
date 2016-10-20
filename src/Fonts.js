/* @flow */
const heading = {
  fontFamily: '"Khula"',
  fontSize: '1.25em',
  lineHeight: '16px',
  margin: 0,
}

const common = {
  fontFamily: '"Khula"',
  fontWeight: 300,
  letterSpacing: '.025em',
}

const Fonts = {
  content: {
    ...common,
    fontFamily: '"Open Sans"',
    fontSize: 15,
    lineHeight: '20px',
  },
  tiny: {
    ...common,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '18px',
  },
  small: {
    ...common,
    fontSize: 15,
    lineHeight: '20px',
  },
  base: {
    ...common,
    fontSize: 18,
    lineHeight: '25px',
  },
  large: {
    ...common,
    fontSize: 30,
    lineHeight: '40px',

  },
  huge: {
    ...common,
    fontSize: 35,
    lineHeight: '50px',
  },
  heading1: heading,
  heading2: heading,
  heading3: heading,
  heading4: heading,
  heading5: heading,
  heading6: heading,
}

export default Fonts
