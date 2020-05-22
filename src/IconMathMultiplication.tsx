import * as React from 'react'

function SvgIconMathMultiplication(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="math-multiplication"
        aria-labelledby="t-math-multiplication d-math-multiplication"
      >
        <title id="t-math-multiplication">{'Multiplication'}</title>
        <desc id="d-math-multiplication">
          {'Math symbol for multiplication'}
        </desc>
        <path d="M.293 30.293a.999.999 0 101.414 1.414L16 17.414l14.293 14.293a.999.999 0 101.414-1.414L17.414 16 31.707 1.707A.999.999 0 1030.293.293L16 14.586 1.707.293A.999.999 0 10.293 1.707L14.586 16 .293 30.293z" />
      </g>
    </svg>
  )
}

export default SvgIconMathMultiplication
