import * as React from 'react'

function SvgIconTextUnderline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-underline"
        aria-labelledby="t-text-underline d-text-underline"
      >
        <title id="t-text-underline">{'Underlined text'}</title>
        <desc id="d-text-underline">{'An underlined A letter'}</desc>
        <path d="M0 30h32v2H0v-2zm19.8-12.5H9.9l-1.7 4c-.4 1-.6 1.7-.6 2.2 0 .399.2.7.6 1 .4.3 1.2.5 2.4.6v.7h-8v-.7c1.1-.2 1.7-.399 2.1-.7.6-.6 1.3-1.8 2.1-3.7L15.6 0h.7l8.8 21.1c.7 1.7 1.4 2.801 1.9 3.301s1.4.812 2.4.899v.7h-10v-.7c1 0 1.699-.2 2.1-.5s.5-.6.5-1c0-.5-.3-1.399-.7-2.6l-1.5-3.7zm-.6-1.4L14.9 5.8l-4.4 10.3h8.7z" />
      </g>
    </svg>
  )
}

export default SvgIconTextUnderline
