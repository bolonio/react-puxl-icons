import * as React from 'react'

function SvgIconCalculator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="calculator" aria-labelledby="t-calculator d-calculator">
        <title id="t-calculator">{'Calculator'}</title>
        <desc id="d-calculator">
          {'Three buttons for addition, substraction and result'}
        </desc>
        <path d="M14 18v13H1V18h13m0-1H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V18c0-.6-.4-1-1-1z" />
        <path d="M12 24H3c-.3 0-.5.2-.5.5s.2.5.5.5h9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM31 1v30H18V1h13m0-1H18c-.6 0-1 .4-1 1v30c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z" />
        <path d="M19.5 18.5c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5h-9c-.3 0-.5-.2-.5-.5zm0-5c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5h-9c-.3 0-.5-.2-.5-.5zM14 1v13H1V1h13m0-1H1C.4 0 0 .4 0 1v13c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z" />
        <path d="M12 7H8V3c0-.3-.2-.5-.5-.5S7 2.7 7 3v4H3c-.3 0-.5.2-.5.5s.2.5.5.5h4v4c0 .3.2.5.5.5s.5-.2.5-.5V8h4c.3 0 .5-.2.5-.5S12.3 7 12 7z" />
      </g>
    </svg>
  )
}

export default SvgIconCalculator
