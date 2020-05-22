import * as React from 'react'

function SvgIconTrashbin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="trashbin" aria-labelledby="t-trashbin d-trashbin">
        <title id="t-trashbin">{'Trashbin'}</title>
        <desc id="d-trashbin">{'A closed trashbin'}</desc>
        <path d="M26 9h2V6c0-1.7-1.3-3-3-3h-4V2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1H7C5.3 3 4 4.3 4 6v3h2v23h20V9zM12 2c0-.5.5-1 1-1h6c.5 0 1 .5 1 1v1h-8V2zm13 29H7V9h18v22zm2-23H5V6c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v2z" />
        <path d="M12.5 27c-.3 0-.5-.2-.5-.5v-13c0-.3.2-.5.5-.5s.5.2.5.5v13c0 .3-.2.5-.5.5zm7 0c-.3 0-.5-.2-.5-.5v-13c0-.3.2-.5.5-.5s.5.2.5.5v13c0 .3-.2.5-.5.5z" />
      </g>
    </svg>
  )
}

export default SvgIconTrashbin
