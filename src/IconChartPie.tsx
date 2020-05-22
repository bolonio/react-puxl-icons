import * as React from 'react'

function SvgIconChartPie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="chart-pie" aria-labelledby="t-chart-pie d-chart-pie">
        <title id="t-chart-pie">{'Pie chart'}</title>
        <desc id="d-chart-pie">{'A pie chart with one salient slice'}</desc>
        <path d="M18 .1v13.4l11.6-6.7C26.9 3.2 22.7.7 18 .1z" />
        <path d="M29 9.5L16 17V2C7.7 2 1 8.7 1 17s6.7 15 15 15 15-6.7 15-15c0-2.7-.7-5.3-2-7.5zM2 17C2 9.6 7.7 3.6 15 3.1v27.85C7.764 30.43 2 24.359 2 17zm14 14V18.188L28.6 10.9c.9 1.8 1.4 3.9 1.4 6.1 0 7.7-6.3 14-14 14z" />
      </g>
    </svg>
  )
}

export default SvgIconChartPie
