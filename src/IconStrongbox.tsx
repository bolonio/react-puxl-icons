import * as React from 'react'

function SvgIconStrongbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="strongbox" aria-labelledby="t-strongbox d-strongbox">
        <title id="t-strongbox">{'Strongbox'}</title>
        <desc id="d-strongbox">{'A secured locker with a rotatory lock'}</desc>
        <path d="M19.7 16.3c.399-.8.399-1.8 0-2.6l3-3c.399-.4.399-1 0-1.4-.4-.4-1-.4-1.4 0l-3 3c-.8-.4-1.8-.4-2.6 0l-3-3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3 3c-.4.8-.4 1.8 0 2.6l-3 3c-.4.4-.4 1 0 1.4.4.399 1 .399 1.4 0l3-3c.8.399 1.8.399 2.6 0l3 3c.4.399 1 .399 1.4 0 .399-.4.399-1 0-1.4l-3-3zM17 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        <path d="M26 3H7c-.6 0-1 .4-1 1v3H5c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h1v4H5c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h1v3c0 .6.4 1 1 1h19c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5 12V8h3v4H5zm0 10v-4h3v4H5zm21 4H7v-3h1c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H7v-4h1c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H7V4h19v22z" />
        <path d="M29 0H3c-.6 0-1 .4-1 1v28c0 .6.4 1 1 1h1v1a1 1 0 001 1h4a1 1 0 001-1v-1h12v1a1 1 0 001 1h4a1 1 0 001-1v-1h1c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm0 29H3V1h26v28z" />
      </g>
    </svg>
  )
}

export default SvgIconStrongbox
