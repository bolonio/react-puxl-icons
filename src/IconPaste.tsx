import * as React from 'react'

function SvgIconPaste(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="paste" aria-labelledby="t-paste d-paste">
        <title id="t-paste">{'Paste'}</title>
        <desc id="d-paste">{'A written document over a clipboard'}</desc>
        <path d="M9 1h6l1 4H8l1-4zM8 28v-1H1V3h6.5L7 4.8c0 .3 0 .6.2.8.2.2.5.4.8.4h8c.3 0 .6-.1.8-.4.2-.3.2-.5.2-.8L16.5 3H23v5h1V3c0-.6-.4-1-1-1h-6.7L16 .8c-.1-.5-.5-.8-1-.8H9c-.5 0-.9.3-1 .8L7.7 2H1c-.6 0-1 .4-1 1v24c0 .6.4 1 1 1h7z" />
        <path d="M10 31c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1v20zm21 0H11V11h20v20z" />
        <path d="M15 15h6v1h-6v-1zm2 4h10v1H17v-1zm-2 4h12v1H15v-1zm0 4h6v1h-6v-1z" />
      </g>
    </svg>
  )
}

export default SvgIconPaste
