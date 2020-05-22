import * as React from 'react'

function SvgIconArrowS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrow-down" aria-labelledby="t-arrow-down d-arrow-down">
        <title id="t-arrow-down">{'Down arrow'}</title>
        <desc id="d-arrow-down">{'Simple caret arrow pointing downwards'}</desc>
        <path d="M16 25a1.99 1.99 0 01-1.414-.586l-14-14a2 2 0 112.828-2.828L16 20.172 28.586 7.586a2 2 0 112.828 2.828l-14 14A1.992 1.992 0 0116 25z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowS
