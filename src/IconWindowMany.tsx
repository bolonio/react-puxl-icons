import * as React from 'react'

function SvgIconWindowMany(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="window-many" aria-labelledby="t-window-many d-window-many">
        <title id="t-window-many">{'Many windows'}</title>
        <desc id="d-window-many">
          {'A computer window overlapping another one'}
        </desc>
        <circle cx={29} cy={13} r={1} />
        <circle cx={26} cy={13} r={1} />
        <circle cx={23} cy={13} r={1} />
        <circle cx={23} cy={3} r={1} />
        <circle cx={20} cy={3} r={1} />
        <circle cx={17} cy={3} r={1} />
        <path d="M31 10h-5V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v20c0 .6.4 1 1 1h5v9c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1zM1 1h24v4H1V1zm0 20V6h24v4H7c-.6 0-1 .4-1 1v10H1zm6-6v-4h24v4H7zm24 1v15H7V16h24z" />
      </g>
    </svg>
  )
}

export default SvgIconWindowMany
