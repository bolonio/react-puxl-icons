import * as React from 'react'

function SvgIconEject(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="eject" aria-labelledby="t-eject d-eject">
        <title id="t-eject">{'Eject'}</title>
        <desc id="d-eject">
          {'An up-pointing triangle over a horizontal rectangle'}
        </desc>
        <path d="M31 24H1c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM15.3 2.3c.4-.4 1-.4 1.4 0l15 15c.3.3.4.7.2 1.1-.1.4-.5.6-.9.6H1c-.4 0-.8-.2-.9-.6-.2-.4-.1-.8.2-1.1l15-15z" />
      </g>
    </svg>
  )
}

export default SvgIconEject
