import * as React from 'react'

function SvgIconChartArea(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="chart-area" aria-labelledby="t-chart-area d-chart-area">
        <title id="t-chart-area">{'Area chart'}</title>
        <desc id="d-chart-area">
          {
            'Area defined by the space between an ascending trend line and the cartesian chart horizontal line'
          }
        </desc>
        <path d="M31.5 32H0V.5C0 .2.2 0 .5 0s.5.2.5.5V31h30.5c.3 0 .5.2.5.5s-.2.5-.5.5z" />
        <path d="M5 29v-5l7-8 8 2 8-10v21H5z" />
      </g>
    </svg>
  )
}

export default SvgIconChartArea
