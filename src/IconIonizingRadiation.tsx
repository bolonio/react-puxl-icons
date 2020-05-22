import * as React from 'react'

function SvgIconIonizingRadiation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="ionizing-radiation"
        aria-labelledby="t-ionizing-radiation d-ionizing-radiation"
      >
        <title id="t-ionizing-radiation">{'Ionizing radiation'}</title>
        <desc id="d-ionizing-radiation">{'Ionizing radiation symbol'}</desc>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 31C7.7 31 1 24.3 1 16S7.7 1 16 1s15 6.7 15 15-6.7 15-15 15z" />
        <circle cx={16} cy={16} r={2} />
        <path d="M20 16h9c0-4.8-2.6-9-6.5-11.2L18 12.6c1.2.7 2 2 2 3.4zm-6-3.5L9.5 4.8C5.6 7 3 11.2 3 16h9c0-1.4.8-2.7 2-3.5zm4 7c-1.2.7-2.7.7-4 0l-4.5 7.8c1.9 1.101 4.1 1.8 6.5 1.8 2.4 0 4.6-.6 6.5-1.8L18 19.5z" />
      </g>
    </svg>
  )
}

export default SvgIconIonizingRadiation
