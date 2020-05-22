import * as React from 'react'

function SvgIconSpanner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="spanner" aria-labelledby="t-spanner d-spanner">
        <title id="t-spanner">{'Spanner'}</title>
        <desc id="d-spanner">{'Spanner'}</desc>
        <path d="M31.6 4.6l-3.8 3.8-3.3-.9-.9-3.3L27.4.4C24.9-.5 22 .1 20.1 2c-1.7 1.7-2.3 4-1.9 6.2l-17 17c-1.6 1.6-1.6 4.1 0 5.7 1.6 1.6 4.1 1.6 5.7 0L23.8 14c2.2.4 4.5-.3 6.2-1.9 1.9-2.1 2.5-5 1.6-7.5zm-2.4 6.6c-1.601 1.6-3.8 2.1-5.8 1.5L6.1 30.1c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2L19.2 8.5c-.5-2 0-4.2 1.5-5.8C22 1.5 23.7.9 25.3 1l-2.5 2.5c-.3.3-.399.6-.3 1l.9 3.3c0 .2.1.3.3.4.1.1.3.2.4.3l3.3.9c.3.1.699 0 1-.3L31 6.7c.1 1.6-.5 3.3-1.8 4.5z" />
        <path d="M5.4 26.6c-.8-.8-2-.8-2.8 0-.8.801-.8 2 0 2.801.8.812 2 .812 2.8 0 .8-.801.8-2.001 0-2.801zm-.7 2.1c-.4.399-1 .399-1.4 0-.4-.4-.4-1 0-1.4.4-.399 1-.399 1.4 0 .4.4.4 1 0 1.4z" />
      </g>
    </svg>
  )
}

export default SvgIconSpanner
