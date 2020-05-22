import * as React from 'react'

function SvgIconDiamond(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="diamond" aria-labelledby="t-diamond d-diamond">
        <title id="t-diamond">{'Diamond'}</title>
        <desc id="d-diamond">{'A brilliant diamond'}</desc>
        <path d="M31.8 10.4l-5-6c-.2-.3-.5-.4-.8-.4H6c-.3 0-.6.1-.8.4l-5 6c-.3.4-.3 1 0 1.3l15 16c.2.2.5.3.7.3.2 0 .5-.1.7-.3l15-16c.5-.4.5-1 .2-1.3zm-9.3 1.1L16 25.8 9.5 11.5h13zm-12.4-1L16 5.6l5.9 4.9H10.1zM16.8 5h8.7l-2.4 5.2L16.8 5zm-7.9 5.2L6.5 5h8.7l-6.3 5.2zm6 15.7L1.5 11.5h6.9l6.5 14.4zm8.7-14.4h6.9L17.1 25.9l6.5-14.4zm7-1H24l2.3-5.1 4.3 5.1zm-25-5.1L8 10.5H1.4l4.2-5.1z" />
      </g>
    </svg>
  )
}

export default SvgIconDiamond
