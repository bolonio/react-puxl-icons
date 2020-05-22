import * as React from 'react'

function SvgIconPencil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="pencil" aria-labelledby="t-pencil d-pencil">
        <title id="t-pencil">{'Pencil'}</title>
        <desc id="d-pencil">{'Pencil with eraser'}</desc>
        <path d="M29.1 2.9C26.3.1 22.901-.8 21.3.8L3.1 19c-.1.1-.2.3-.3.5L0 30.8V32h1.2l11.3-2.8c.2 0 .3-.101.5-.3l18.2-18.2c1.6-1.6.7-5-2.1-7.8zm-23.6 27l-3.4-3.4 1.7-6.8 8.5 8.5-6.8 1.7zm25-19.9l-1.4 1.4-8.5-8.5L22 1.5c1.2-1.2 4-.2 6.4 2.1 2.3 2.4 3.3 5.2 2.1 6.4z" />
      </g>
    </svg>
  )
}

export default SvgIconPencil
