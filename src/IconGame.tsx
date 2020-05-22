import * as React from 'react'

function SvgIconGame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="game" aria-labelledby="t-game d-game">
        <title id="t-game">{'Game'}</title>
        <desc id="d-game">
          {
            'A gamepad with a connection cable, a direction controller on the left, and four buttons on the right'
          }
        </desc>
        <circle cx={23} cy={12} r={2} />
        <circle cx={27} cy={16} r={2} />
        <circle cx={23} cy={20} r={2} />
        <circle cx={19} cy={16} r={2} />
        <path d="M10 10H8c-.6 0-1 .4-1 1v3H4c-.6 0-1 .4-1 1v2c0 .3.1.5.3.7.2.2.4.3.7.3h3v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h3c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-3v-3c0-.6-.4-1-1-1z" />
        <path d="M26 7c2.8 0 5 2.2 5 5v5c0 4.4-3.6 8-8 8H9c-4.4 0-8-3.6-8-8v-5c0-2.8 2.2-5 5-5h20zm-9-7h-2v6H6c-3.3 0-6 2.7-6 6v5c0 5 4 9 9 9h14c5 0 9-4 9-9v-5c0-3.3-2.7-6-6-6h-9V0z" />
      </g>
    </svg>
  )
}

export default SvgIconGame
