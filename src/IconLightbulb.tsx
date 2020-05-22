import * as React from 'react'

function SvgIconLightbulb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="lightbulb" aria-labelledby="t-lightbulb d-lightbulb">
        <title id="t-lightbulb">{'Lightbulb'}</title>
        <desc id="d-lightbulb">{'Lightbulb'}</desc>
        <path d="M18 30h-4a1 1 0 100 2h4a1 1 0 100-2zM20 27h-8a1 1 0 100 2h8a1 1 0 100-2zM20 24h-8a1 1 0 100 2h8a1 1 0 100-2zM16 0C10.478 0 6 4.477 6 10s5 8 5 12a1 1 0 001 1h8a1 1 0 001-1c0-4 5-6.477 5-12S21.521 0 16 0zm4 22h-3.5v-7.551c2.244-.252 4-2.139 4-4.449a.5.5 0 00-1 0c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5a.5.5 0 00-1 0c0 2.31 1.756 4.197 4 4.449V22H12c0-2.152-1.209-3.889-2.378-5.567C8.333 14.583 7 12.67 7 10c0-4.962 4.038-9 9-9 4.963 0 9 4.038 9 9 0 2.67-1.333 4.583-2.622 6.433C21.209 18.111 20 19.848 20 22z" />
      </g>
    </svg>
  )
}

export default SvgIconLightbulb
