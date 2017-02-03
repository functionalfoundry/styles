/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Theme from 'js-theme'
import Animations from './Animations'
import Fonts from './Fonts'

type AnimationPropsT = {
  animationStyle: Object,
  label: string,
}

class Animation extends React.Component {
  constructor() {
    super();
    this.state = {
      hasEntered: false
    }
  }

  handleClick() {
    this.setState({hasEntered: !this.state.hasEntered});
  }

  render() {
    const {
      label,
      theme,
    } = this.props
    return (
      <div
        {...theme.animation}
      >
        <div
          {...theme.animationDemo}
        />
        <button
          {...theme.button}
          onClick={this.handleClick}
        >
          {label}
        </button>
      </div>
    );
  }
}

// const Animation = ({
//   animationStyle,
//   label,
// }: AnimationPropsT) => (
//   <div>
//     <div
//       style={{
//         ...animationStyle,
//         height: 64,
//         width: 64,
//         margin: '25px 25px 0 0',
//         backgroundColor: 'grey'
//       }}
//     />
//     <div
//       style={{
//         ...Fonts.base,
//       }}
//     >
//       {label}
//     </div>
//   </div>
// )

storiesOf('Animations', module)
  .add('Standard', () => (
    <div
      style={{
        display: 'flex'
      }}
    >
      <ThemedAnimation
        label='enter'
      />
    </div>
  ))

const defaultTheme = {
  animation: {
    display: 'flex',
    flexDirection: 'column',
    width: 66,
  },
  animationDemo: {
    height: 64,
    width: 64,
    margin: '25px 25px 0 0',
    backgroundColor: 'grey',
  },
  button: {
    marginTop: 10,
  },
}

const ThemedAnimation = Theme('Animation', defaultTheme)(Animation)
