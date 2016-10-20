/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Borders from './Borders'
import Colors from './Colors'
import Corners from './Corners'
import Fonts from './Fonts'

type CornerPropsT = {
  cornerStyle: Object,
  label: string,
}

const Corner = ({
  cornerStyle,
  label,
}: CornerPropsT) => (
  <div>
    <div
      style={{
        ...Borders.light,
        ...cornerStyle,
        height: 64,
        marginBottom: 8,
        marginTop: 24,
        backgroundColor: 'white',
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

storiesOf('Corners', module)
  .add('Standard', () => (
    <div
      style={{
        backgroundColor: Colors.grey1200,
        padding: 16,
      }}
    >
      {Object.keys(Corners).map((corner) => (
        <Corner
          key={corner}
          cornerStyle={Corners[corner]}
          label={corner}
        />
      ))}
    </div>
  ))
