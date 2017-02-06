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
  constructor(props) {
    super(props);
    this.state = {
      hasEntered: false,
      animationName: props.namein,
      animationState: 'paused'
    }
  }

  handleClick = () => {
    let newState = {hasEntered: !this.state.hasEntered, 
                    animationState: 'playing'};
    newState.animationName = newState.hasEntered ? this.props.namein : this.props.nameout;
    this.setState(newState); 
  }

  handlePause = () => {
    this.refs.animationBlock.offsetWidth = 0;
  }

  render() {
    const { hasEntered, animationState, animationName } = this.state
    const { easein, easeout, namein, nameout, label, isPaused } = this.props
    console.log(animationName)
    return (
      <div>
        <ThemedAnimationPresentation 
          name={animationName}
          ease={hasEntered ? easein : easeout}
          ref="animationBlock"
          isPaused={animationState}
          onAnimationEnd={this.handlePause}
          label={label}
          onClick={this.handleClick}/>
      </div>
    );
  }
}

const AnimationPresentation = ({
  theme, 
  label, 
  onClick,
  onAnimationEnd
} = {}) => {
  return (
    <div
      {...theme.animation}
    >
      <div
        {...theme.animationDemo}
        onAnimationEnd={onAnimationEnd}
      />
      <button
        {...theme.button}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}


storiesOf('Animations', module)
  .add('Standard', () => (
    <div
      style={{
        display: 'flex'
      }}
    >
      <Animation
        label='Enter/Exit FromLeft'
        easein={Animations.Eases.entrance}
        easeout={Animations.Eases.exit}
        namein={Animations.EnterFromLeft}
        nameout={Animations.ExitFromLeft}
      />
      <Animation
        label='Enter/Exit FromRight'
        easein={Animations.Eases.entrance}
        easeout={Animations.Eases.exit}
        namein={Animations.EnterFromRight}
        nameout={Animations.ExitFromRight}
      />
      <Animation
        label='Enter/Exit Clockwise'
        easein={Animations.Eases.entrance}
        easeout={Animations.Eases.exit}
        namein={Animations.EnterClockwise}
        nameout={Animations.ExitClockwise}
      />
      <Animation
        label='Enter/Exit CounterClockwise'
        easein={Animations.Eases.entrance}
        easeout={Animations.Eases.exit}
        namein={Animations.EnterCounterClockwise}
        nameout={Animations.ExitCounterClockwise}
      />
      <Animation
        label='Appear In/Out'
        easein={Animations.Eases.entrance}
        easeout={Animations.Eases.exit}
        namein={Animations.AppearIn}
        nameout={Animations.AppearOut}
      />
    </div>
  ))


const defaultTheme = ({
  name, ease, isPaused
}) => {
  return {
    animation: {
      display: 'flex',
      flexDirection: 'column',
      width: 100,
      margin: 20
    },
    animationDemo: {
      animationName: name,
      animationDuration: '1s',
      animationFillMode: 'both',
      animationTimingFunction: ease,
      animationPlayState: isPaused,
      height: 100,
      width: 100,
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      perspective: '1000px',
      margin: '25px 25px 0 0',
      backgroundColor: 'rgb(7, 179, 179)',
    },
    button: {
      marginTop: 10,
    },
  }
  
}

const ThemedAnimationPresentation = Theme('AnimationPresentation', defaultTheme)(AnimationPresentation)
