import * as React from 'react'

function SvgIconUndo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="undo" aria-labelledby="t-undo d-undo">
        <title id="t-undo">{'Undo'}</title>
        <desc id="d-undo">{'An arrow circling backward to its origin'}</desc>
        <path d="M18.8 2.8C11.4 2.8 5.5 8.7 5.5 16v1.5L.9 12.9c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l5.5 5.5c.1.1.2.1.4.1s.3 0 .4-.101l5.5-5.5c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-4.6 4.6V16C6.5 9.2 12 3.8 18.8 3.8S31 9.2 31 16s-5.5 12.3-12.3 12.3c-.3 0-.5.2-.5.5s.2.5.5.5c7.4 0 13.3-6 13.3-13.3S26.1 2.8 18.8 2.8z" />
      </g>
    </svg>
  )
}

export default SvgIconUndo
