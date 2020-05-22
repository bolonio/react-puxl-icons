import * as React from 'react'

function SvgIconShare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="share" aria-labelledby="t-share d-share">
        <title id="t-share">{'Share'}</title>
        <desc id="d-share">{'Three separate circles connected in line'}</desc>
        <path d="M26 20a5.987 5.987 0 00-5.119 2.882l-9.312-4.655c.275-.69.431-1.44.431-2.227s-.156-1.537-.431-2.226l9.312-4.656A5.992 5.992 0 0026 12a6 6 0 000-12 6 6 0 00-6 6c0 .787.156 1.537.432 2.226l-9.312 4.656A5.994 5.994 0 006 10a6 6 0 000 12 5.986 5.986 0 005.119-2.882l9.312 4.655A5.96 5.96 0 0020 26a6 6 0 0012 0 6 6 0 00-6-6zm0-19c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM6 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm20 10c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      </g>
    </svg>
  )
}

export default SvgIconShare
