import * as React from 'react'

function SvgIconDrive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="drive" aria-labelledby="t-drive d-drive">
        <title id="t-drive">{'Drive'}</title>
        <desc id="d-drive">{'Hard drive'}</desc>
        <path d="M27 0H5a2 2 0 00-2 2v28a2 2 0 002 2h22a2 2 0 002-2V2a2 2 0 00-2-2zm1 30a1 1 0 01-1 1H5a1 1 0 01-1-1V2c0-.551.449-1 1-1h22a1 1 0 011 1v28z" />
        <circle cx={6} cy={3} r={1} />
        <circle cx={26} cy={3} r={1} />
        <circle cx={26} cy={29} r={1} />
        <circle cx={6} cy={29} r={1} />
        <circle cx={16} cy={13} r={1} />
        <path d="M16 3C10.473 3 6 7.473 6 13c0 3.598 1.901 6.738 4.749 8.501-.92.628-1.635 1.144-1.87 1.378a3.005 3.005 0 000 4.243c.567.565 1.321.879 2.122.879s1.555-.312 2.122-.88c.407-.408 1.64-2.23 2.877-4.121h.001c5.526 0 10-4.473 10-10S21.527 3 16 3zm-1.152 19.93c-1.088 1.654-2.11 3.161-2.434 3.484a1.987 1.987 0 01-1.415.587 2 2 0 01-1.414-3.415c.232-.232 1.081-.829 2.151-1.549l6.333-4.107-3.221 5zm1.824-.964a414.238 414.238 0 002.243-3.502 1 1 0 00-1.38-1.38c-.811.514-3.646 2.312-5.871 3.799A9.005 9.005 0 017 13c0-4.962 4.038-9 9-9 4.963 0 9 4.038 9 9 0 4.736-3.68 8.62-8.328 8.966z" />
      </g>
    </svg>
  )
}

export default SvgIconDrive
