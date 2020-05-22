import * as React from 'react'

function SvgIconRepeat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="repeat" aria-labelledby="t-repeat d-repeat">
        <title id="t-repeat">{'Repeat'}</title>
        <desc id="d-repeat">
          {'Two arrows following each other in circles'}
        </desc>
        <path d="M13.5 21H6c-2.8 0-5-2.2-5-5s2.2-5 5-5h6.8l-3.6 3.6c-.2.2-.2.5 0 .7.2.2.5.2.7 0l4.5-4.5c.2-.2.2-.5 0-.7L9.9 5.6c-.2-.2-.5-.2-.7 0-.2.2-.2.6-.1.8l3.6 3.6H6c-3.3 0-6 2.7-6 6s2.7 6 6 6h7.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM26 10h-7.5c-.3 0-.5.2-.5.5s.2.5.5.5H26c2.8 0 5 2.2 5 5s-2.2 5-5 5h-6.8l3.6-3.6c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-4.5 4.5c-.199.2-.199.5 0 .7l4.5 4.5c.2.199.5.199.7 0 .2-.2.2-.5 0-.7L19.2 22H26c3.3 0 6-2.7 6-6s-2.7-6-6-6z" />
      </g>
    </svg>
  )
}

export default SvgIconRepeat
