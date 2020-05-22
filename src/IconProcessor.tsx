import * as React from 'react'

function SvgIconProcessor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="processor" aria-labelledby="t-processor d-processor">
        <title id="t-processor">{'Processor'}</title>
        <desc id="d-processor">{'A computer processor'}</desc>
        <path d="M31 17c.6 0 1-.4 1-1s-.4-1-1-1h-4v-3h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V6c0-.6-.4-1-1-1h-4V1c0-.6-.4-1-1-1s-1 .4-1 1v4h-3V1c0-.6-.4-1-1-1s-1 .4-1 1v4h-3V1c0-.6-.4-1-1-1s-1 .4-1 1v4H6c-.6 0-1 .4-1 1v4H1c-.6 0-1 .4-1 1s.4 1 1 1h4v3H1c-.6 0-1 .4-1 1s.4 1 1 1h4v3H1c-.6 0-1 .4-1 1s.4 1 1 1h4v4c0 .6.4 1 1 1h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h3v4c0 .6.4 1 1 1s1-.4 1-1v-4h3v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4v-3h4zm-5 9H6V6h20v20z" />
        <path d="M9 9h14v14H9V9z" />
      </g>
    </svg>
  )
}

export default SvgIconProcessor
