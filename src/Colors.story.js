/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Colors from './Colors'
import Fonts from './Fonts'

type ColorPropsT = {
  color: string,
  label: string,
}

const Color = ({
  color,
  label,
}: ColorPropsT) => (
  <div>
    <div
      style={{
        backgroundColor: color,
        width: 64,
        height: 64,
      }}
    />
    <div
      style={{
        ...Fonts.base,
      }}
    >
      {label}
    </div>
  </div>
)

storiesOf('Colors', module)
  .add('Standard', () => (
    <div>
      {Object.keys(Colors).map((color) => (
        <Color
          key={color}
          color={Colors[color]}
          label={color}
        />
      ))}
    </div>
  ))
