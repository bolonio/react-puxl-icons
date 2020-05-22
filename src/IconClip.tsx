import * as React from 'react'

function SvgIconClip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="clip" aria-labelledby="t-clip d-clip">
        <title id="t-clip">{'Clip'}</title>
        <desc id="d-clip">{'A paper clip'}</desc>
        <path d="M5.7 13.5c-.2.2-.2.5 0 .7.2.2.5.2.7 0L17.3 3.3c3.101-3.1 8.2-3.1 11.3 0 3.104 3.1 3.104 8.2 0 11.3L13.9 29.4c-2.1 2.1-5.6 2.1-7.8 0s-2.1-5.6 0-7.8l10.7-10.7c1.2-1.2 3.101-1.2 4.2 0 1.1 1.2 1.2 3.1 0 4.2l-8.1 8.1c-.2.2-.2.5 0 .7.2.199.5.199.7 0l8.1-8.104c1.6-1.6 1.6-4.1 0-5.7C20.1 8.5 17.6 8.5 16 10.1L5.5 20.9c-2.5 2.5-2.5 6.7 0 9.2s6.7 2.5 9.2 0l14.7-14.7c3.5-3.5 3.5-9.2 0-12.7s-9.2-3.5-12.7 0l-11 10.8z" />
      </g>
    </svg>
  )
}

export default SvgIconClip
