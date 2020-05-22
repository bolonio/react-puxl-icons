import * as React from 'react'

function SvgIconMathAddition(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="math-addition" aria-labelledby="t-math-addition d-math-addition">
        <title id="t-math-addition">{'Addition'}</title>
        <desc id="d-math-addition">{'Math symbol for addition'}</desc>
        <path d="M31 15H17V1a1 1 0 10-2 0v14H1a1 1 0 000 2h14v14a1 1 0 102 0V17h14a1 1 0 100-2z" />
      </g>
    </svg>
  )
}

export default SvgIconMathAddition
