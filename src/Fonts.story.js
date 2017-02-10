/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Fonts from './Fonts'

const PreviewSection = ({ title, children }) => (
  <div>
    <h1 style={{
      ...Fonts.large,
      color: '#aaa',
      borderBottom: 'thin solid #eee',
    }}>{title}</h1>
    {children}
  </div>
)

storiesOf('Fonts', module)
  .add('Standard', () => (
    <div>
      <PreviewSection title="Sizes">
        <div style={Fonts.tiny}>
          Tiny Content
        </div>
        <div style={Fonts.small}>
          Small Content
        </div>
        <div style={Fonts.base}>
          Base Content
        </div>
        <div style={Fonts.large}>
          Large Content
        </div>
        <div style={Fonts.huge}>
          Huge Content
        </div>
      </PreviewSection>
      <PreviewSection title="Styles">
        <p style={Fonts.content}>
          <strong>Content</strong>
        </p>
        <div style={Fonts.content}>
          This is the style used for regular content.<br/>
          Two lines are used here to demonstrate the line height.
        </div>
        <p style={Fonts.content}>
          <strong>Code</strong>
        </p>
        <div>
          <code style={Fonts.code}>
            &lt;SomeComponent<br/>
            &nbsp;&nbsp;someProp='somevalue'<br/>
            &nbsp;&nbsp;otherProp='othervalue'<br/>
            /&gt;<br/>
            <br/>
            const foo = 'bar'<br/>
            const bar = 'baz'<br/>
          </code>
        </div>
        <p style={Fonts.content}>
          <strong>Monospace</strong>
        </p>
        <div>
          <code style={Fonts.monospace}>
            This is the style used for monospace content.<br/>
            Two lines are used here to demonstrate the line height.
          </code>
        </div>
      </PreviewSection>
      <PreviewSection title="Headings">
        <p style={Fonts.content}>
          Headings are all 1.25em to decouple heading size semantics from
          presentation. See http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css
          for the original inspiration.
        </p>
        <div>
          <h1 style={Fonts.heading1}>
            Heading 1
          </h1>
          <h2 style={Fonts.heading2}>
            Heading 2
          </h2>
          <h3 style={Fonts.heading3}>
            Heading 3
          </h3>
          <h4 style={Fonts.heading4}>
            Heading 4
          </h4>
          <h5 style={Fonts.heading5}>
            Heading 5
          </h5>
          <h6 style={Fonts.heading6}>
            Heading 6
          </h6>
        </div>
      </PreviewSection>
    </div>
  ))
