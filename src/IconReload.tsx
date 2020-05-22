import * as React from 'react'

function SvgIconReload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="reload" aria-labelledby="t-reload d-reload">
        <title id="t-reload">{'Reload'}</title>
        <desc id="d-reload">
          {'Two arrows following each other in circles'}
        </desc>
        <path d="M31.9 11.6c-.2-.2-.5-.2-.7 0l-4.6 4.6V14c0-5.8-4.699-10.5-10.5-10.5-2.8 0-5.4 1.1-7.4 3.1-.2.2-.2.5 0 .7.2.2.5.2.7 0 1.8-1.8 4.2-2.8 6.7-2.8 5.2 0 9.5 4.3 9.5 9.5v2.3L21 11.7c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l5.5 5.5c-.1.1.1.1.2.1s.3 0 .4-.1l5.5-5.5c.1-.2.1-.6 0-.8zM.1 20.4c.2.199.5.199.7 0l4.6-4.6V18c0 5.8 4.7 10.5 10.5 10.5 2.8 0 5.4-1.1 7.4-3.1.2-.2.2-.5 0-.7s-.5-.2-.7 0c-1.8 1.8-4.199 2.8-6.7 2.8-5.2 0-9.5-4.3-9.5-9.5v-2.3l4.6 4.6c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-5.5-5.5c.1-.1-.1-.1-.2-.1s-.3 0-.4.1L.1 19.6c-.1.2-.1.6 0 .8z" />
      </g>
    </svg>
  )
}

export default SvgIconReload
