/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Fonts from './Fonts'
import Spacing from './Spacing'

type FontSpacingPropsT = {
  fontStyle: Object,
  spacingStyle: Object,
  label: string,
}

const FontSpacing = ({
  fontStyle,
  spacingStyle,
  label,
}: FontSpacingPropsT) => (
  <div
    style={{
      ...fontStyle,
      ...spacingStyle,
    }}
  >
    {label}
  </div>
)

type ViewSpacingT = {
  label: string,
  value: string,
}

const ViewSpacing = ({
  label,
  value,
}: ViewSpacingT) => (
  <div>
    <div
      style={{
        backgroundColor: '#333',
        width: value,
        height: 24,
      }}
    />
    <div
      style={Fonts.base}
    >
      {label}
    </div>
  </div>
)

storiesOf('Spacing', module)
  .add('Standard', () => (
    <div>
      {Object.keys(Spacing).map((spacing) => (
        <FontSpacing
          key={spacing}
          fontStyle={Fonts[spacing]}
          spacingStyle={{ marginBottom: Spacing[spacing] }}
          label={spacing}
        />
      ))}
      {Object.keys(Spacing).map((spacing) => (
        <ViewSpacing
          key={spacing}
          label={spacing}
          value={Spacing[spacing]}
        />
      ))}
    </div>
  ))
