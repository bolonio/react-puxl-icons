import * as React from 'react'

function SvgIconDatabase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="database" aria-labelledby="t-database d-database">
        <title id="t-database">{'Database'}</title>
        <desc id="d-database">{'A stack of three hard disks'}</desc>
        <path d="M16 1C7.2 1 0 3.7 0 7v18c0 3.3 7.2 6 16 6s16-2.7 16-6V7c0-3.3-7.2-6-16-6zm0 1c8.6 0 15 2.6 15 5s-6.4 5-15 5S1 9.4 1 7s6.4-5 15-5zm15 23c0 2.4-6.4 5-15 5S1 27.4 1 25v-3.9C3.3 23.4 9.1 25 16 25s12.7-1.6 15-3.9V25zm0-6c0 2.4-6.4 5-15 5S1 21.4 1 19v-3.9C3.3 17.4 9.1 19 16 19s12.7-1.6 15-3.9V19zm0-6c0 2.4-6.4 5-15 5S1 15.4 1 13V9.1C3.3 11.4 9.1 13 16 13s12.7-1.6 15-3.9V13z" />
      </g>
    </svg>
  )
}

export default SvgIconDatabase
