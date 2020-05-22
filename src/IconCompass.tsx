import * as React from 'react'

function SvgIconCompass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="compass" aria-labelledby="t-compass d-compass">
        <title id="t-compass">{'Compass'}</title>
        <desc id="d-compass">{'A compass pointing at north'}</desc>
        <path d="M16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16 7.729 1 16 1m0-1C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0z" />
        <path d="M18.701 17.174l-6.225 6.932.822-9.271 5.403 2.339zm2.084-12.18l-8.454 9.41-1.117 12.6 8.453-9.408 1.118-12.602zM16 2l1 2-1 2-1-2zM30 16l-2 1-2-1 2-1zM16 26l1 2-1 2-1-2zM6 16l-2 1-2-1 2-1z" />
      </g>
    </svg>
  )
}

export default SvgIconCompass
