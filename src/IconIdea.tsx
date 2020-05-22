import * as React from 'react'

function SvgIconIdea(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="idea" aria-labelledby="t-idea d-idea">
        <title id="t-idea">{'Idea'}</title>
        <desc id="d-idea">{'Thought bubble flowing up'}</desc>
        <path d="M16 29a1 1 0 110 2 1 1 0 010-2m0-1a2 2 0 10.001 4.001A2 2 0 0016 28zM16 22a2 2 0 11-.001 4.001A2 2 0 0116 22m0-1c-1.657 0-3 1.346-3 3s1.343 3 3 3c1.654 0 3-1.346 3-3s-1.346-3-3-3zM16 1c8.271 0 15 4.038 15 9s-6.729 9-15 9-15-4.038-15-9 6.729-9 15-9m0-1C7.164 0 0 4.477 0 10s7.164 10 16 10c8.837 0 16-4.477 16-10S24.837 0 16 0z" />
      </g>
    </svg>
  )
}

export default SvgIconIdea
