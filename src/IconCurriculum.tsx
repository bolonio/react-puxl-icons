import * as React from 'react'

function SvgIconCurriculum(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="curriculum" aria-labelledby="t-curriculum d-curriculum">
        <title id="t-curriculum">{'Curriculum'}</title>
        <desc id="d-curriculum">
          {'Silhouette of human head and shoulders in a paper sheet'}
        </desc>
        <path d="M19 0H5v32h22V8l-8-8zm0 1.4L25.6 8H19V1.4zM26 31H6V1h12v7c0 .6.4 1 1 1h7v22z" />
        <path d="M17.9 24h-3.7c-.7 0-6.2.6-6.2 2.7 0 .7.6 1.3 1.5 1.3h13.1c.801 0 1.5-.6 1.5-1.3-.1-2.1-5.6-2.7-6.2-2.7zm4.6 3h-13c-.3 0-.5-.1-.5-.3 0-.7 3.5-1.7 5.1-1.7h3.7c1.7 0 5.101.9 5.101 1.7.099.2-.101.3-.401.3zM16 12.1c-2.6 0-4.5 2.1-4.5 4.9 0 2.5 1.6 6.2 4.5 6.2s4.5-3.7 4.5-6.2c0-2.9-1.9-4.9-4.5-4.9zm0 10.1c-2.1 0-3.5-3.101-3.5-5.2 0-2.3 1.4-3.9 3.5-3.9s3.5 1.6 3.5 3.9c0 2.1-1.4 5.2-3.5 5.2z" />
      </g>
    </svg>
  )
}

export default SvgIconCurriculum
