import * as React from 'react'

function SvgIconHelp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="help" aria-labelledby="t-help d-help">
        <title id="t-help">{'Help'}</title>
        <desc id="d-help">{'A lifebuoy'}</desc>
        <path d="M31.8 13.4C30.7 6.7 25.4 1.4 18.6.2c-.2-.1-.4-.2-.6-.2h-4c-.2 0-.4.1-.6.2C6.6 1.3 1.3 6.6.2 13.4c-.1.2-.2.4-.2.6v4c0 .2.1.4.2.6 1.1 6.7 6.4 12 13.2 13.2.2.1.4.2.6.2h4c.2 0 .4-.1.6-.2 6.7-1.1 12-6.399 13.2-13.2.1-.2.2-.4.2-.6v-4c0-.2-.1-.4-.2-.6zM19 1.3C24.9 2.5 29.5 7.1 30.7 13h-7.3c-.8-2-2.4-3.6-4.4-4.4V1.3zM14 1h4v8h-4V1zm-1 .3v7.3C11 9.4 9.4 11 8.6 13H1.3C2.5 7.1 7.1 2.5 13 1.3zM1 14h8v4H1v-4zm12 16.7C7.1 29.5 2.5 24.9 1.3 19h7.3c.8 2 2.4 3.6 4.4 4.4v7.3zm5 .3h-4v-8h4v8zm0-9h-4c-.3 0-.6.2-.8.4-1.6-.7-2.9-2-3.6-3.604.2-.196.4-.496.4-.796v-4c0-.3-.2-.6-.4-.8.7-1.6 2-2.9 3.6-3.6.2.2.5.4.8.4h4c.3 0 .6-.2.8-.4 1.601.7 2.9 2 3.601 3.6-.201.2-.401.5-.401.8v4c0 .3.2.6.4.8-.7 1.601-2 2.9-3.604 3.601C18.6 22.2 18.3 22 18 22zm1 8.7v-7.3c2-.801 3.6-2.4 4.4-4.4h7.3c-1.2 5.9-5.8 10.5-11.7 11.7zM31 18h-8v-4h8v4z" />
      </g>
    </svg>
  )
}

export default SvgIconHelp
