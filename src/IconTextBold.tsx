import * as React from 'react'

function SvgIconTextBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="text-bold" aria-labelledby="t-text-bold d-text-bold">
        <title id="t-text-bold">{'Text bold'}</title>
        <desc id="d-text-bold">{'A bold B letter'}</desc>
        <path d="M21.7 15c3 .7 5.2 1.6 6.399 2.6C29.9 19 30.7 20.9 30.7 23.2c0 2.399-1 4.399-2.9 6C25.5 31 22 32 17.5 32H1.2v-.9c1.5 0 2.5-.1 3-.396s.9-.604 1.1-1.104c.2-.396.3-1.5.3-3.3V5.6c0-1.7-.1-2.8-.3-3.3-.2-.5-.5-.8-1.1-1-.5-.3-1.5-.4-3-.4V0h15.3c3.7 0 6.3.3 7.8 1s2.7 1.6 3.6 2.9c.9 1.3 1.3 2.7 1.3 4.1 0 1.5-.601 2.9-1.7 4.1-1 1.3-3 2.2-5.8 2.9zm-8.6 1.2v11.5c0 .8.2 1.5.6 1.899.4.396 1.1.601 1.9.601 1.3 0 2.4-.3 3.5-.8 1.1-.6 1.9-1.4 2.4-2.4s.8-2.2.8-3.6c0-1.5-.3-2.801-1-4-.7-1.2-1.6-2-2.899-2.5-1.101-.5-2.901-.7-5.301-.7zm0-1.8c2.2 0 3.9-.3 4.9-.8 1.1-.5 1.9-1.2 2.4-2.1.6-.9.8-2.1.8-3.5s-.3-2.6-.8-3.5c-.6-.9-1.4-1.6-2.4-2.1s-2.7-.7-5-.7v12.7h.1z" />
      </g>
    </svg>
  )
}

export default SvgIconTextBold
