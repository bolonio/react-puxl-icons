import * as React from 'react'

function SvgIconConfiguration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="configuration" aria-labelledby="t-configuration d-configuration">
        <title id="t-configuration">{'Configuration'}</title>
        <desc id="d-configuration">
          {'Three horizontal slider controls, each one in a different position'}
        </desc>
        <path d="M31 25H18.8c-.399-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H1c-.6 0-1 .4-1 1s.4 1 1 1h12.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H31c.6 0 1-.4 1-1s-.4-1-1-1zm-15 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm15-13H8.8c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H1c-.6 0-1 .4-1 1s.4 1 1 1h2.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H31c.6 0 1-.4 1-1s-.4-1-1-1zM6 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM31 5h-2.2c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H1c-.6 0-1 .4-1 1s.4 1 1 1h22.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H31c.6 0 1-.4 1-1s-.4-1-1-1zm-5 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconConfiguration
