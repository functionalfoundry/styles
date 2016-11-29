/* @flow */
const defaultGrey = '#0f1619'
const defaultPrimary = '#0be5e5'
const defaultGreen = '#0BD466'
const defaultYellow = '#FFE626'
const defaultRed = '#F24965'

const Greys = {
  grey: defaultGrey,
  grey50: '#fdfdfe',
  grey100: '#f5f8fa',
  grey200: '#d8dcde',
  grey300: '#bcc0c2',
  grey400: '#9fa3a6',
  grey500: '#9fa3a6',
  grey600: '#656b6e',
  grey700: '#494f52',
  grey800: '#2c3236',
  grey850: '#1d2226',
  grey900: defaultGrey,
}

const Primaries = {
  primary: defaultPrimary,
  primary50: '#f3fefe',
  primary100: '#d4fafa',
  primary200: '#91f3f3',
  primary300: '#4eecec',
  primary400: defaultPrimary,
  primary500: '#09cccc',
  primary600: '#07b3b3',
  primary700: '#059999',
  primary800: '#028080',
  primary900: '#006666',
}

const Greens = {
  green: defaultGreen,
  success: defaultGreen,
  green50: '#F2FEF7',
  green100: '#D5FAE5',
  green200: '#92EDBB',
  green300: '#4EE190',
  green400: defaultGreen,
  green500: '#11B95D',
  green600: '#169E54',
  green700: '#1C834A',
  green800: '#216841',
  green900: '#274D38',
}

const Yellows = {
  yellow: defaultYellow,
  warning: defaultYellow,
  yellow50: '#FFFDF2',
  yellow100: '#FFFBD9',
  yellow200: '#FFF49D',
  yellow300: '#FFED62',
  yellow400: defaultYellow,
  yellow500: '#DBC626',
  yellow600: '#B8A727',
  yellow700: '#948827',
  yellow800: '#716827',
  yellow900: '#4D4927',
}

const Reds = {
  red: defaultRed,
  danger: defaultRed,
  red50: '#FFF0F2',
  red100: '#FFD9DF',
  red200: '#FBA9B6',
  red300: '#F6798E',
  red400: defaultRed,
  red500: '#D6455D',
  red600: '#BA4054',
  red700: '#9E3C4C',
  red800: '#823743',
  red900: '#66333B',
}

const Colors = {
  ...Greys,
  ...Primaries,
  ...Greens,
  ...Yellows,
  ...Reds,
}

export default Colors
