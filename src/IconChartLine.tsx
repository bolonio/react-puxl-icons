import * as React from 'react'

function SvgIconChartLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="chart-line" aria-labelledby="t-chart-line d-chart-line">
        <title id="t-chart-line">{'Line chart'}</title>
        <desc id="d-chart-line">
          {'Ascending trend line on a cartesian chart'}
        </desc>
        <path d="M31.5 32H0V.5C0 .2.2 0 .5 0s.5.2.5.5V31h30.5c.3 0 .5.2.5.5s-.2.5-.5.5z" />
        <path d="M28 6c-1.1 0-2 .9-2 2 0 .6.3 1.1.6 1.5l-5.2 9.6c-.1-.1-.2-.1-.4-.1-.6 0-1.1.3-1.5.7L15 17.4V17c0-1.1-.9-2-2-2s-2 .9-2 2c0 .4.1.7.3 1L6 23.3c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.4-.1-.7-.3-1l5.3-5.3c.3.2.6.3 1 .3.6 0 1.1-.3 1.5-.7l4.5 2.3v.4c0 1.1.9 2 2 2s2-.9 2-2c0-.6-.3-1.1-.6-1.5l5.2-9.6c.2 0 .301.1.5.1 1.104 0 2-.9 2-2s-1-2-2.1-2zM5 26c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8-8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm7-13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconChartLine
