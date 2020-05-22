import * as React from 'react'

function SvgIconTimer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="timer" aria-labelledby="t-timer d-timer">
        <title id="t-timer">{'Timer'}</title>
        <desc id="d-timer">{'A chronometer watch'}</desc>
        <circle cx={27} cy={18} r={1} />
        <circle cx={16} cy={29} r={1} />
        <circle cx={5} cy={18} r={1} />
        <circle cx={16} cy={7} r={1} />
        <path d="M17 4.1V1h4.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5s.2.5.5.5H15v3.1C7.8 4.6 2 10.6 2 18c0 7.7 6.3 14 14 14s14-6.3 14-14c0-7.4-5.8-13.4-13-13.9zM16 31C8.8 31 3 25.2 3 18S8.8 5 16 5s13 5.8 13 13-5.8 13-13 13z" />
        <path d="M23.4 10.6c-.2-.2-.5-.2-.7 0L16.2 17H16c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1v-.2l6.4-6.4c.1-.2.1-.6 0-.8z" />
      </g>
    </svg>
  )
}

export default SvgIconTimer
