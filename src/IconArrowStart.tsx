import * as React from 'react'

function SvgIconArrowStart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrow-start" aria-labelledby="t-arrow-start d-arrow-start">
        <title id="t-arrow-start">{'Arrow to start'}</title>
        <desc id="d-arrow-start">
          {'Simple caret arrow pointing leftwards to a vertical line'}
        </desc>
        <path d="M27.4 28.6c.8.801.8 2 0 2.801-.801.812-2 .812-2.801 0l-14-14c-.8-.801-.8-2 0-2.792l14-14c.801-.8 2-.8 2.801 0 .8.8.8 2 0 2.8L14.8 16l12.6 12.6zM4 6c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2s-2-.9-2-2V6z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowStart
