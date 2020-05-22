import * as React from 'react'

function SvgIconGift(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="gift" aria-labelledby="t-gift d-gift">
        <title id="t-gift">{'Gift'}</title>
        <desc id="d-gift">{'A gift package tied with a ribbon on top'}</desc>
        <path d="M31 9H20c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v1c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3H1c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h1v15c0 .6.4 1 1 1h26c.6 0 1-.4 1-1V15h1c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM17 5c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3h-3V5zm-6 1c0-1.1.9-2 2-2s2 .9 2 2v2h-2c-1.1 0-2-.9-2-2zm1 24H3V15h9v15zm0-16H1v-4h11v4zm7 16h-6V10h6v20zm10 0h-9V15h9v15zm2-16H20v-4h11v4z" />
      </g>
    </svg>
  )
}

export default SvgIconGift
