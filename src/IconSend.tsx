import * as React from 'react'

function SvgIconSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="send" aria-labelledby="t-send d-send">
        <title id="t-send">{'Send'}</title>
        <desc id="d-send">{'An arrow getting out of a tray'}</desc>
        <path d="M31.5 21c-.275 0-.5.225-.5.5V29H1v-7a.5.5 0 00-1 0v7.5a.5.5 0 00.5.5h31c.275 0 .5-.225.5-.5v-8c0-.275-.225-.5-.5-.5z" />
        <circle cx={9} cy={26} r={1} />
        <circle cx={9} cy={22} r={1} />
        <path d="M19 8C12.923 8 8 12.923 8 19a1 1 0 102 0c0-4.972 4.028-9 9-9l9.586.001-4.293 4.293a.998.998 0 000 1.415.997.997 0 001.414 0l5.998-5.999a1 1 0 00.002-1.416l-6-6a.997.997 0 00-1.414 0 .995.995 0 000 1.414l4.293 4.293L19 8z" />
      </g>
    </svg>
  )
}

export default SvgIconSend
