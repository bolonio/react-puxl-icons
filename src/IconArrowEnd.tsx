import * as React from 'react'

function SvgIconArrowEnd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrow-end" aria-labelledby="t-arrow-end d-arrow-end">
        <title id="t-arrow-end">{'Arrow to end'}</title>
        <desc id="d-arrow-end">
          {'Simple caret arrow pointing rightwards to a vertical line'}
        </desc>
        <path d="M4.6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l14 14c.8.8.8 2 0 2.8l-14 14c-.8.8-2 .8-2.8 0-.8-.801-.8-2 0-2.801L17.2 16 4.6 3.4zM28 26c0 1.1-.9 2-2 2s-2-.9-2-2V6c0-1.1.9-2 2-2s2 .9 2 2v20z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowEnd
