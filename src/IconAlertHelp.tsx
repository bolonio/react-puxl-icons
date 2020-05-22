import * as React from 'react'

function SvgIconAlertHelp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="alert-help" aria-labelledby="t-alert-help d-alert-help">
        <title id="t-alert-help">{'Help'}</title>
        <desc id="d-alert-help">{'Question mark in a circle'}</desc>
        <circle cx={15.7} cy={24.7} r={1.3} />
        <path d="M16 20a1 1 0 01-1-1c0-2.287 1.396-3.284 2.415-4.012.33-.235.64-.457.878-.695C19.355 13.23 20 12.48 20 11c0-.574-.529-1.5-1.546-2.162-1.235-.804-3.76-1.057-6.01.058a1 1 0 11-.888-1.792c2.948-1.46 6.25-1.076 7.99.058C21.036 8.134 22 9.64 22 11c0 2.232-1.038 3.453-2.293 4.707-.354.355-.75.636-1.13.908C17.57 17.335 17 17.8 17 19a1 1 0 01-1 1z" />
        <path d="M16 1c8.3 0 15 6.7 15 15s-6.7 15-15 15S1 24.3 1 16 7.7 1 16 1m0-1C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z" />
      </g>
    </svg>
  )
}

export default SvgIconAlertHelp
