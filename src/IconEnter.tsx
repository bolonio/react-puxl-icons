import * as React from 'react'

function SvgIconEnter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="enter" aria-labelledby="t-enter d-enter">
        <title id="t-enter">{'Enter'}</title>
        <desc id="d-enter">{'An east oriented arrow entering a square'}</desc>
        <path d="M31 32a.846.846 0 01-.18-.018l-11-2A1 1 0 0119 29v-5a1 1 0 112 0v4.165l9 1.637V2.198l-9 1.636V8a1 1 0 11-2 0V3c0-.483.346-.897.82-.984l11-2A1 1 0 0132 1v30a1.002 1.002 0 01-1 1zM14.6 15H1c-.6 0-1 .4-1 1s.4 1 1 1h13.6l-5.3 5.3c-.4.4-.4 1 0 1.4.4.399 1 .399 1.4 0l7-7c.399-.4.399-1 0-1.4l-7-7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.3 5.3z" />
      </g>
    </svg>
  )
}

export default SvgIconEnter
