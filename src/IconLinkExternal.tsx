import * as React from 'react'

function SvgIconLinkExternal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="link-external" aria-labelledby="t-link-external d-link-external">
        <title id="t-link-external">{'External link'}</title>
        <desc id="d-link-external">
          {'An north-east oriented arrow exiting a square'}
        </desc>
        <path d="M31 18c-.6 0-1 .4-1 1v11H2V2h11c.6 0 1-.4 1-1s-.4-1-1-1H1C.4 0 0 .4 0 1v30c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1z" />
        <path d="M15.3 15.3c-.4.4-.4 1 0 1.4.4.399 1 .399 1.4 0L30 3.4V11c0 .6.4 1 1 1s1-.4 1-1V1c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1s.4 1 1 1h7.6L15.3 15.3z" />
      </g>
    </svg>
  )
}

export default SvgIconLinkExternal
