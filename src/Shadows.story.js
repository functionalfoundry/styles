/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Colors from './Colors'
import Fonts from './Fonts'
import Shadows from './Shadows'

type ShadowPropsT = {
  fontStyle: Object,
  shadowStyle: Object,
  label: string,
}

const Shadow = ({
  fontStyle,
  shadowStyle,
  label,
}: ShadowPropsT) => (
  <div
    style={{
      display: 'inline-block',
    }}
  >
    <div
      style={{
        ...fontStyle,
      }}
    >
      {label}
    </div>
    <div
      style={{
        ...shadowStyle,
        backgroundColor: 'white',
        width: 220,
        height: 320,
        margin: 20,
      }}
    />
  </div>
)

storiesOf('Shadows', module)
  .add('Standard', () => (
    <div
      style={{
        backgroundColor: Colors.grey1200,
      }}
    >
      {Object.keys(Shadows).map((shadow) => (
        <Shadow
          key={shadow}
          fontStyle={Fonts.base}
          shadowStyle={Shadows[shadow]}
          label={shadow}
        />
      ))}
    </div>
  ))
