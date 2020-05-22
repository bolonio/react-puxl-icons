import * as React from 'react'

function SvgIconChartBar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="chart-bar" aria-labelledby="t-chart-bar d-chart-bar">
        <title id="t-chart-bar">{'Bar chart'}</title>
        <desc id="d-chart-bar">
          {'Ascending trend bars on a cartesian chart'}
        </desc>
        <path d="M31.5 32H0V.5C0 .2.2 0 .5 0s.5.2.5.5V31h30.5c.3 0 .5.2.5.5s-.2.5-.5.5z" />
        <path d="M11 17h4v12h-4V17zm8 4h4v8h-4v-8zm7-13h4v21h-4V8zM3 25h4v4H3v-4z" />
      </g>
    </svg>
  )
}

export default SvgIconChartBar
