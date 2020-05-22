import * as React from 'react'

function SvgIconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="user" aria-labelledby="t-user d-user">
        <title id="t-user">{'User'}</title>
        <desc id="d-user">{'Silhouette of human head and shoulders'}</desc>
        <path d="M20 25c3.543 0 11 2.801 11 5a1 1 0 01-1 1H2a1 1 0 01-1-1c0-2.199 7.457-5 11-5h8m0-1h-8c-3.313 0-12 2.688-12 6a2 2 0 002 2h28a2 2 0 002-2c0-3.312-8.688-6-12-6zM16 1c4.71 0 8 3.701 8 9 0 4.893-3.116 12-8 12-4.883 0-8-7.107-8-12 0-5.299 3.29-9 8-9m0-1c-5.523 0-9 4.477-9 10s3.477 13 9 13 9-7.477 9-13-3.477-10-9-10z" />
      </g>
    </svg>
  )
}

export default SvgIconUser
