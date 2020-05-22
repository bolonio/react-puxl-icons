import * as React from 'react'

function SvgIconVr(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="vr" aria-labelledby="t-vr d-vr">
        <title id="t-vr">{'Virtual Reality'}</title>
        <desc id="d-vr">{'VR glasses'}</desc>
        <path d="M23 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zM9 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
        <path d="M31.8 9.4l-2-3c-.2-.2-.5-.4-.8-.4H3c-.3 0-.6.2-.8.4l-2 3c-.1.2-.2.4-.2.6v14c0 1 1 2 2 2h10c.4 0 .8-.2.9-.6.6-1.4 2-3.4 3.1-3.4s2.5 2 3.1 3.4c.2.4.5.6.9.6h10c1 0 2-1 2-2V10c0-.2-.1-.4-.2-.6zM3 7h26l1.3 2H1.7L3 7zm28 17c0 .5-.5 1-1 1H20s-1.8-4-4-4-4 4-4 4H2c-.5 0-1-.5-1-1V10h30v14z" />
      </g>
    </svg>
  )
}

export default SvgIconVr
