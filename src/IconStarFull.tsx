import * as React from 'react'

function SvgIconStarFull(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="star-full" aria-labelledby="t-star-full d-star-full">
        <title id="t-star-full">{'Star full'}</title>
        <desc id="d-star-full">{'Filled shape of a five point star'}</desc>
        <path d="M16 .7c-.4 0-.7.2-.9.6l-4.4 8.9-9.8 1.4c-.4.1-.7.4-.9.7-.1.4 0 .8.3 1l7.1 6.9L5.7 30c-.1.4.1.8.4 1 .2.1.4.2.6.2.2 0 .3 0 .5-.101l8.8-4.604 8.8 4.604c.1.101.3.101.5.101s.4-.1.6-.2c.3-.2.5-.6.396-1L24.6 20.2l7.104-6.9c.3-.3.396-.7.3-1-.104-.4-.396-.6-.8-.7l-9.899-1.4-4.396-8.9C16.7.9 16.4.7 16 .7z" />
      </g>
    </svg>
  )
}

export default SvgIconStarFull
