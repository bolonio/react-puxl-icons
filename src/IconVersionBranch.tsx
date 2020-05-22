import * as React from 'react'

function SvgIconVersionBranch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="version-branch"
        aria-labelledby="t-version-branch d-version-branch"
      >
        <title id="t-version-branch">{'Version branch'}</title>
        <desc id="d-version-branch">{'Two lines diverge from a point'}</desc>
        <path d="M25 2.174V0h-2v2.174c-1.182.399-2 1.481-2 2.826 0 1.3.8 2.4 2 2.8V9a6 6 0 01-6 6h-2a7.973 7.973 0 00-6 2.721V7.8c1.2-.4 2-1.5 2-2.8 0-1.345-.818-2.427-2-2.826V0H7v2.174C5.818 2.573 5 3.655 5 5c0 1.3.8 2.4 2 2.8v16.4c-1.2.4-2 1.5-2 2.8 0 1.346.818 2.427 2 2.826V32h2v-2.174c1.182-.399 2-1.48 2-2.826 0-1.3-.8-2.4-2-2.8V23a6 6 0 016-6h2c4.419 0 8-3.579 8-8V7.8c1.2-.4 2-1.5 2-2.8 0-1.345-.818-2.427-2-2.826zM10 27c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconVersionBranch
