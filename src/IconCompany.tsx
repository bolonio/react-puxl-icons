import * as React from 'react'

function SvgIconCompany(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="company" aria-labelledby="t-company d-company">
        <title id="t-company">{'Company'}</title>
        <desc id="d-company">
          {
            '4 story tall building with two windows per floor and a main entrance door'
          }
        </desc>
        <path d="M21 21h2c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM15 7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM21 14h2c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM21 7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM15 14h2c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM9 21h2c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM15 21h2c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM9 14h2c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zM9 7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1z" />
        <path d="M31.5 31H27V1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v30H.5c-.3 0-.5.2-.5.5s.2.5.5.5h31c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM18 31h-4v-6h4v6zm8 0h-7v-6c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v6H6V1h20v30z" />
      </g>
    </svg>
  )
}

export default SvgIconCompany
