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
  content: Object.assign({}, common, {
    fontFamily: '"Open Sans"',
    fontSize: 15,
    lineHeight: '20px',
  }),
  code: {
    fontFamily: 'monospace',
    fontSize: 15,
    lineHeight: '20px',
    letterSpacing: '.025em',
  },
  monospace: {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: 15,
    lineHeight: '20px',
    letterSpacing: '.025em',
  },
  tiny: Object.assign({}, common, {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '18px',
  }),
  small: Object.assign({}, common, {
    fontSize: 15,
    lineHeight: '20px',
  }),
  base: Object.assign({}, common, {
    fontSize: 18,
    lineHeight: '25px',
  }),
  large: Object.assign({}, common, {
    fontSize: 30,
    lineHeight: '40px',
  }),
  huge: Object.assign({}, common, {
    fontSize: 35,
    lineHeight: '50px',
  }),
  heading1: heading,
  heading2: heading,
  heading3: heading,
  heading4: heading,
  heading5: heading,
  heading6: heading,
}

export default Fonts
