/* @flow */
import Colors from './Colors'

const Borders = {
  none: {
    border: 0,
  },
  light: {
    border: `1px solid ${Colors.grey50}`,
  },
  base: {
    border: `1px solid ${Colors.grey100}`,
  },
  dark: {
    border: `1px solid ${Colors.grey700}`,
  },
}

export default Borders
