import * as React from 'react'

function SvgIconAlarm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="alarm" aria-labelledby="t-alarm d-alarm">
        <title id="t-alarm">{'Alarm'}</title>
        <desc id="d-alarm">
          {'An alarm clock with bells and its hands at 13:50'}
        </desc>
        <circle cx={16} cy={28} r={1} />
        <circle cx={27} cy={17} r={1} />
        <circle cx={5} cy={17} r={1} />
        <circle cx={16} cy={6} r={1} />
        <path d="M23.354 9.646a.5.5 0 00-.707 0l-6.396 6.401a.969.969 0 00-.49 0l-4.401-4.401a.5.5 0 00-.707.707l4.401 4.401a.986.986 0 00.245.952.997.997 0 001.414 0c.262-.258.329-.621.245-.952l6.396-6.401a.5.5 0 000-.707z" />
        <path d="M30 16.999C30 9.27 23.73 3 16 3S2 9.27 2 17c0 5 2.632 9.377 6.578 11.854l-.806 1.396a.5.5 0 00.183.684.488.488 0 00.683-.184l.801-1.387C11.397 30.404 13.628 31 16.001 31s4.604-.596 6.562-1.637l.812 1.387c.139.24.438.322.688.184a.516.516 0 00.188-.684l-.812-1.396C27.368 26.378 30 22 30 16.999zm-14 13c-7.168 0-13-5.832-13-13S8.832 4 16 4s13 5.832 13 13-5.832 12.999-13 12.999z" />
        <path d="M29.535 3.465a5.008 5.008 0 01.636 6.293l-6.928-6.929a5.006 5.006 0 016.292.636m.707-.707a5.997 5.997 0 00-8.484 0l8.484 8.485a5.998 5.998 0 000-8.485zM2.465 3.465a5.008 5.008 0 016.293-.636L1.829 9.757a5.007 5.007 0 01.636-6.292m-.707-.707a5.997 5.997 0 000 8.484l8.485-8.484a5.998 5.998 0 00-8.485 0z" />
      </g>
    </svg>
  )
}

export default SvgIconAlarm
