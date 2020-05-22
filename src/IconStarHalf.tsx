import * as React from 'react'

function SvgIconStarHalf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="star-half" aria-labelledby="t-star-half d-star-half">
        <title id="t-star-half">{'Star in half'}</title>
        <desc id="d-star-half">{'Half-filled shape of a five point star'}</desc>
        <path d="M32 12.3c-.1-.4-.4-.6-.8-.7l-9.9-1.4-4.4-8.9c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6l-4.4 8.9-9.8 1.4c-.4.1-.7.4-.9.7-.1.4 0 .8.3 1l7.1 6.9L5.7 30c-.1.4.1.8.4 1 .2.1.4.2.6.2.2 0 .3 0 .5-.101l8.8-4.604 8.8 4.604c.1.101.3.101.5.101s.4-.1.6-.2c.3-.2.5-.6.396-1L24.6 20.2l7.104-6.9c.296-.2.396-.6.296-1zM27.5 16h-23L1 12.6l10.4-1.5L16 1.7l4.6 9.4L31 12.6 27.5 16z" />
      </g>
    </svg>
  )
}

export default SvgIconStarHalf
