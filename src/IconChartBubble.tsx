import * as React from 'react'

function SvgIconChartBubble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="chart-bubble" aria-labelledby="t-chart-bubble d-chart-bubble">
        <title id="t-chart-bubble">{'Bubble chart'}</title>
        <desc id="d-chart-bubble">
          {'Diverse size bubbles on a cartesian chart'}
        </desc>
        <path d="M31.5 32H0V.5C0 .2.2 0 .5 0s.5.2.5.5V31h30.5c.3 0 .5.2.5.5s-.2.5-.5.5z" />
        <circle cx={5} cy={27} r={2} />
        <circle cx={13} cy={19} r={6} />
        <circle cx={21} cy={23} r={1} />
        <circle cx={21} cy={12} r={1} />
        <circle cx={28} cy={10} r={4} />
      </g>
    </svg>
  )
}

export default SvgIconChartBubble
