import * as React from 'react'

function SvgIconMask(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="mask" aria-labelledby="t-mask d-mask">
        <title id="t-mask">{'Mask'}</title>
        <desc id="d-mask">{'A Venetian mask with a handle'}</desc>
        <path d="M29 13.2C30.9 10.6 32 6 32 0 21.5 0 20.6 2 16 2S10.5 0 0 0c0 10.1 3 16 8 16 4.9 0 6.3-4 8-4s3.1 4 8 4c1.5 0 2.9-.6 4-1.6V32h1V13.2zM8.4 9.9h-.5c-1-.3-2.1-1.6-2.9-2.7C6 6.6 7.6 6 8.7 6h.4c1 .2 2.5 1.6 3.6 2.8-1.3.5-3.1 1.1-4.3 1.1zm15.7-.1h-.5c-1.199 0-3.1-.6-4.396-1.1 1.101-1.2 2.601-2.6 3.601-2.8h.399c1.101 0 2.696.7 3.696 1.2-.6 1.1-1.7 2.5-2.8 2.7z" />
      </g>
    </svg>
  )
}

export default SvgIconMask
