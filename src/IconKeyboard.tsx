import * as React from 'react'

function SvgIconKeyboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="keyboard" aria-labelledby="t-keyboard d-keyboard">
        <title id="t-keyboard">{'Keyboard'}</title>
        <desc id="d-keyboard">{'A Qwerty-like keyboard'}</desc>
        <path d="M31 6H1c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM14 9c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1V9zm0 6c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1v-2zM8 9c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1H9c-.5 0-1-.5-1-1V9zm0 6c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1H9c-.5 0-1-.5-1-1v-2zm-2 8c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2zm0-6c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2zm0-6c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1V9c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2zm18 12c0 .5-.5 1-1 1H9c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h14c.5 0 1 .5 1 1v2zm0-6c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2zm6 6c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2zm0-6c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v2zm0-6c0 .5-.5 1-1 1h-8c-.5 0-1-.5-1-1V9c0-.5.5-1 1-1h8c.5 0 1 .5 1 1v2z" />
      </g>
    </svg>
  )
}

export default SvgIconKeyboard
