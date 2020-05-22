import * as React from 'react'

function SvgIconPerformance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="performance" aria-labelledby="t-performance d-performance">
        <title id="t-performance">{'Performance'}</title>
        <desc id="d-performance">{'A gauge'}</desc>
        <path d="M16 5c8.271 0 15 6.729 15 15 0 2.432-.604 4.839-1.747 7H2.747A14.977 14.977 0 011 20C1 11.729 7.729 5 16 5m0-1C7.178 4 0 11.178 0 20c0 2.585.645 5.167 1.863 7.468.174.327.514.532.884.532h26.506c.37 0 .71-.205.884-.532A16.032 16.032 0 0032 20c0-8.822-7.178-16-16-16z" />
        <path d="M22.363 15.637a.998.998 0 00-1.413 0l-3.666 3.665a2.987 2.987 0 00-3.405.577 2.998 2.998 0 000 4.242 2.998 2.998 0 004.242 0 2.985 2.985 0 00.576-3.405l3.666-3.665a.997.997 0 000-1.414zM16 23a1 1 0 110-2 1 1 0 010 2z" />
        <circle cx={27} cy={20} r={1} />
        <circle cx={23.777} cy={12.222} r={1} />
        <circle cx={16} cy={9} r={1} />
        <circle cx={8.221} cy={12.222} r={1} />
        <circle cx={5} cy={20} r={1} />
      </g>
    </svg>
  )
}

export default SvgIconPerformance
