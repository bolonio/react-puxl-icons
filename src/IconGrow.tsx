import * as React from 'react'

function SvgIconGrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="grow" aria-labelledby="t-grow d-grow">
        <title id="t-grow">{'Grow'}</title>
        <desc id="d-grow">{'A little plant growing first two leaves'}</desc>
        <path d="M31 30H16.938L16.5 16.2l3.6-3.6c2.4 2 5.9 1.9 8.104-.3C30.6 9.9 32 0 32 0s-9.9 1.4-12.2 3.8c-2.2 2.2-2.3 5.7-.3 8.1l-3.8 3.8s-.1.1-.1.2v.2l-.1 2.7-2.9-2.9c1.2-1.6 1.1-3.8-.3-5.3C10.6 8.9 4 8 4 8s.9 6.6 2.5 8.2c1.4 1.399 3.7 1.5 5.3.3l3.6 3.6-.333 9.9H1a1 1 0 100 2h30a1 1 0 100-2zM20.4 4.4C21.8 3 27 1.8 30.7 1.1c-.5 3.8-1.8 9.1-3.2 10.4-1.8 1.8-4.7 1.9-6.7.3l3.5-3.5c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-3.5 3.5c-1.6-2-1.5-4.9.3-6.7zm-8.6 10.7l-1.4-1.4c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l1.4 1.4c-1.2.8-2.8.7-3.9-.3-.8-.8-1.6-3.8-2-6.2 2.5.5 5.5 1.2 6.2 2 1.1 1 1.2 2.6.4 3.8z" />
      </g>
    </svg>
  )
}

export default SvgIconGrow
