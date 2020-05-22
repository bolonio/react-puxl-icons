import * as React from 'react'

function SvgIconBookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="bookmark" aria-labelledby="t-bookmark d-bookmark">
        <title id="t-bookmark">{'Bookmark'}</title>
        <desc id="d-bookmark">{'A hanging cloth stripe'}</desc>
        <path d="M22.5 32a.5.5 0 01-.354-.146L16 25.707l-6.146 6.146a.492.492 0 01-.545.104.495.495 0 01-.31-.46v-31a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v31a.5.5 0 01-.31.462.47.47 0 01-.189.041zM16 24.5c.128 0 .256.05.354.146L22 30.293V1H10v29.293l5.646-5.646A.5.5 0 0116 24.5z" />
      </g>
    </svg>
  )
}

export default SvgIconBookmark
