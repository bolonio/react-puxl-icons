import * as React from 'react'

function SvgIconTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="tag" aria-labelledby="t-tag d-tag">
        <title id="t-tag">{'Tag'}</title>
        <desc id="d-tag">{'A paper tag'}</desc>
        <path d="M29.4 2.6c-3.5-3.5-9.2-3.5-12.7 0L.3 19c-.4.4-.4 1 0 1.4l11.3 11.3c.4.399 1 .399 1.4 0l16.3-16.3c3.6-3.6 3.6-9.2.1-12.8zm-.7 12.1L12.3 31 1 19.7 17.3 3.3c3.101-3.1 8.2-3.1 11.3 0 3.1 3.1 3.2 8.2.1 11.4z" />
        <path d="M25 4c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconTag
