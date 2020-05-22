import * as React from 'react'

function SvgIconArrowN(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrow-up" aria-labelledby="t-arrow-up d-arrow-up">
        <title id="t-arrow-up">{'Up arrow'}</title>
        <desc id="d-arrow-up">{'Simple caret arrow pointing upwards'}</desc>
        <path d="M16 7c.512 0 1.023.195 1.414.586l14 14a2 2 0 11-2.828 2.828L16 11.828 3.414 24.414a2 2 0 11-2.828-2.828l14-14A1.992 1.992 0 0116 7z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowN
