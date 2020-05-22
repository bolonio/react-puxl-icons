import * as React from 'react'

function SvgIconArrangeColumn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="arrange-column"
        aria-labelledby="t-arrange-column d-arrange-column"
      >
        <title id="t-arrange-column">{'Arrange in column'}</title>
        <desc id="d-arrange-column">
          {'Three rectangular blocks in battery'}
        </desc>
        <path d="M8 1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v30c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1zM20 1c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v30c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1zM32 1c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v30c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1z" />
      </g>
    </svg>
  )
}

export default SvgIconArrangeColumn
