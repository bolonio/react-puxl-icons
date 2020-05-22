import * as React from 'react'

function SvgIconMouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="mouse" aria-labelledby="t-mouse d-mouse">
        <title id="t-mouse">{'Mouse'}</title>
        <desc id="d-mouse">
          {'A computer mouse with two click buttons and a scroll wheel'}
        </desc>
        <path d="M16 0C10.5 0 6 4.5 6 10v12c0 5.5 4.5 10 10 10s10-4.5 10-10V10c0-5.5-4.5-10-10-10zm0 7c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1zm-9 3c0-4.8 3.7-8.7 8.5-9v5c-.9.3-1.5 1.1-1.5 2v4H7v-2zm18 12c0 5-4 9-9 9s-9-4-9-9v-9h7v1c0 1.1.9 2 2 2s2-.9 2-2v-1h7v9zm0-10h-7V8c0-.9-.6-1.7-1.5-1.9V1c4.8.3 8.5 4.1 8.5 9v2z" />
      </g>
    </svg>
  )
}

export default SvgIconMouse
