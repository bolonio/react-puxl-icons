import * as React from 'react'

function SvgIconAsterisk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="asterisk" aria-labelledby="t-asterisk d-asterisk">
        <title id="t-asterisk">{'Asterisk'}</title>
        <desc id="d-asterisk">{'Asterisk symbol'}</desc>
        <path d="M7.5 23.1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l6.1-6.1V27c0 .6.4 1 1 1s1-.4 1-1v-8.6l6.1 6.1c.4.4 1 .4 1.4 0s.4-1 0-1.4L18.4 17H27c.6 0 1-.4 1-1s-.4-1-1-1h-8.6l6.1-6.1c.4-.4.4-1 0-1.4s-1-.4-1.4 0L17 13.6V5c0-.6-.4-1-1-1s-1 .4-1 1v8.6L8.9 7.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l6.1 6.1H5c-.6 0-1 .4-1 1s.4 1 1 1h8.6l-6.1 6.1z" />
      </g>
    </svg>
  )
}

export default SvgIconAsterisk
