import * as React from 'react'

function SvgIconNews(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="news" aria-labelledby="t-news d-news">
        <title id="t-news">{'News'}</title>
        <desc id="d-news">{'Half-folded newspaper'}</desc>
        <path d="M6 3v5H2c-1.1 0-2 .9-2 2v17c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V3H6zm0 21H4V13H3v12h3v2c0 .5-.4 1-1 1H2c-.5 0-1-.4-1-1V10c0-.6.5-1 1-1h4v15zm25 3c0 .6-.4 1-1 1H6.7c.2-.3.3-.6.3-1V4h24v23z" />
        <path d="M21 16v10h8V16h-8zm7 9h-6v-8h6v8zm-18-5h9v2h-9v-2zm0-4h9v2h-9v-2zm0 8h9v2h-9v-2zm0-18v8h19V6H10zm18 7H11V7h17v6z" />
      </g>
    </svg>
  )
}

export default SvgIconNews
