/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Animations from './Animations'
import Fonts from './Fonts'

type AnimationPropsT = {
  animationStyle: Object,
  label: string,
}

const AnimationDemo = {
  height: 64,
  width: 64,
  margin: '25px 25px 0 0',
  backgroundColor: 'grey'
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
    return (
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 66
        }}>
          <div
            style={AnimationDemo}/>
          <button 
            style={{
              marginTop: 10
            }}
            onClick={this.handleClick}>
              {this.props.label}
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
    <div style={{
        display: 'flex'
      }}>
      <Animation
        label='enter'
      />
    </div>
  ))
