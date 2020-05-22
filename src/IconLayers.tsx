import * as React from 'react'

function SvgIconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="layers" aria-labelledby="t-layers d-layers">
        <title id="t-layers">{'Layers'}</title>
        <desc id="d-layers">{'Three stacked squares'}</desc>
        <path d="M31.5 15.1L27.7 13l-1.1.6L31 16l-15 8-15-8 4.4-2.4-1.1-.6-3.8 2.1c-.3.2-.5.5-.5.9s.2.7.5.9l15 8c.2.1.3.1.5.1s.3 0 .5-.1l15-8c.3-.2.5-.5.5-.9s-.2-.7-.5-.9z" />
        <path d="M31.5 22.1L27.7 20l-1.1.6L31 23l-15 8-15-8 4.4-2.4-1.1-.6-3.8 2.1c-.3.2-.5.5-.5.9s.2.7.5.9l15 8c.2.1.3.1.5.1s.3 0 .5-.1l15-8c.3-.2.5-.5.5-.9s-.2-.7-.5-.9zm0-14l-15-8c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-15 8c-.3.2-.5.5-.5.9s.2.7.5.9l15 8c.2.1.3.1.5.1s.3 0 .5-.1l15-8c.3-.2.5-.5.5-.9s-.2-.7-.5-.9zM16 17L1 9l15-8 15 8-15 8z" />
      </g>
    </svg>
  )
}

export default SvgIconLayers
