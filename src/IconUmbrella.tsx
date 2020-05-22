import * as React from 'react'

function SvgIconUmbrella(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="umbrella" aria-labelledby="t-umbrella d-umbrella">
        <title id="t-umbrella">{'Umbrella'}</title>
        <desc id="d-umbrella">{'An umbrella with a crook-handle'}</desc>
        <path d="M16.5 2V.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V2C6.9 2.2 0 7.5 0 14c0-.6 1.8-1 4-1s4 .4 4 1c0-.6 1.8-1 4-1 1.5 0 2.8.2 3.5.5V28c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 1.7-1.3 3-3 3s-3-1.3-3-3V13.5c.7-.3 2-.5 3.5-.5 2.2 0 4 .4 4 1 0-.6 1.8-1 4-1s4 .4 4 1c0-6.5-6.9-11.8-15.5-12z" />
      </g>
    </svg>
  )
}

export default SvgIconUmbrella
