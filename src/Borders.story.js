/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Borders from './Borders'
import Fonts from './Fonts'

type BorderPropsT = {
  borderStyle: Object,
  label: string,
}

const Border = ({
  borderStyle,
  label,
}: BorderPropsT) => (
  <div>
    <div
      style={{
        ...borderStyle,
        height: 64,
        marginBottom: 8,
        marginTop: 24,
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

storiesOf('Borders', module)
  .add('Standard', () => (
    <div>
      {Object.keys(Borders).map((border) => (
        <Border
          key={border}
          borderStyle={Borders[border]}
          label={border}
        />
      ))}
    </div>
  ))
