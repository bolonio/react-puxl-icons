import * as React from 'react'

function SvgIconCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="code" aria-labelledby="t-code d-code">
        <title id="t-code">{'Code'}</title>
        <desc id="d-code">{'Opening and closing braces'}</desc>
        <path d="M.5 16.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1C3.4 15.5 5 13.9 5 12V4.5C5 2 7 0 9.5 0h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2C7.6 1 6 2.6 6 4.5V12c0 1.7-1 3.3-2.4 4C5 16.7 6 18.3 6 20v7.5C6 29.4 7.6 31 9.5 31h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2C7 32 5 30 5 27.5V20c0-1.9-1.6-3.5-3.5-3.5h-1zm31-1c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-1.9 0-3.5 1.6-3.5 3.5v7.5c0 2.5-2 4.5-4.5 4.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c1.9 0 3.5-1.6 3.5-3.5V20c0-1.7 1-3.3 2.4-4-1.4-.7-2.4-2.3-2.4-4V4.5C26 2.6 24.4 1 22.5 1h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2C25 0 27 2 27 4.5V12c0 1.9 1.6 3.5 3.5 3.5h1z" />
      </g>
    </svg>
  )
}

export default SvgIconCode
