/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Fonts from './Fonts'

storiesOf('Fonts', module)
  .add('Heading', () => (
    <div>
      <div
        style={Fonts.tiny}
      >
        Tiny Content
      </div>
      <div
        style={Fonts.small}
      >
        Small Content
      </div>
      <div
        style={Fonts.base}
      >
        Base Content
      </div>
      <div
        style={Fonts.large}
      >
        Large Content
      </div>
      <div
        style={Fonts.huge}
      >
        Huge Content
      </div>
      <p
        style={Fonts.content}
      >
        Headings are all 1.25em to decouple heading size semantics from presentation. See http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css for the original inspiration.
      </p>
      <div>
        <h1
          style={Fonts.heading1}
        >
          Heading 1
        </h1>
        <h2
          style={Fonts.heading2}
        >
          Heading 2
        </h2>
        <h3
          style={Fonts.heading3}
        >
          Heading 3
        </h3>
        <h4
          style={Fonts.heading4}
        >
          Heading 4
        </h4>
        <h5
          style={Fonts.heading5}
        >
          Heading 5
        </h5>
        <h6
          style={Fonts.heading6}
        >
          Heading 6
        </h6>
      </div>
    </div>
  ))
