/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Animations from './Animations'
import Fonts from './Fonts'

type AnimationPropsT = {
  animationStyle: Object,
  label: string,
}

const Animation = ({
  animationStyle,
  label,
}: BorderPropsT) => (
  <div>
    <div
      style={{
        ...animationStyle,
        height: 64,
        width: 64,
        marginBottom: 8,
        marginTop: 24,
        backgroundColor: 'grey'
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

storiesOf('Animations', module)
  .add('Standard', () => (
    <div>
      {Object.keys(Animations).map((animation) => (
        <Animation
          key={animation}
          animationStyle={Animations[animation]}
          label={animation}
        />
      ))}
    </div>
  ))
