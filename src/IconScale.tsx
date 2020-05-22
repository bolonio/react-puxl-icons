import * as React from 'react'

function SvgIconScale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="scale" aria-labelledby="t-scale d-scale">
        <title id="t-scale">{'Scale'}</title>
        <desc id="d-scale">{'A weight scale'}</desc>
        <circle cx={16} cy={26} r={1} />
        <circle cx={11} cy={21} r={1} />
        <circle cx={21} cy={21} r={1} />
        <path d="M17 21c0 .5-.5 1-1 1s-1-.5-1-1 .4-6 1-6c.5 0 1 5.5 1 6z" />
        <path d="M16 13c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" />
        <path d="M17 9V6h9.5c3 0 5.5-2.5 5.5-5.5 0-.3-.2-.5-.5-.5H.5C.2 0 0 .2 0 .5 0 3.5 2.5 6 5.5 6H15v3C6.6 9.8 0 19.6 0 31.5c0 .3.2.5.5.5h31c.3 0 .5-.2.5-.5v-.1C31.9 19.5 25.3 9.8 17 9zM1 1h30c-.3 2.2-2.2 4-4.5 4h-21C3.2 5 1.3 3.2 1 1zm0 30c.2-11.6 6.8-21 15-21s14.8 9.4 15 21H1z" />
      </g>
    </svg>
  )
}

export default SvgIconScale
