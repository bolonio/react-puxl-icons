import * as React from 'react'

function SvgIconEyedropper(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="eyedropper" aria-labelledby="t-eyedropper d-eyedropper">
        <title id="t-eyedropper">{'Eyedropper'}</title>
        <desc id="d-eyedropper">
          {'An empty Pasteur pipette with rubber bulb'}
        </desc>
        <path d="M22.3 13.9L6.9 29.3c-.9.9-2.3 1.1-3.4.6l-.8.8c-.4.399-1 .399-1.4 0-.4-.4-.4-1 0-1.4l.8-.8c-.5-1.1-.3-2.5.6-3.4L18.1 9.7l4.2 4.2zm-4.9-5L2 24.3c-1 1-1.4 2.5-1 3.9l-.4.4c-.8.8-.8 2.1 0 2.8.8.8 2 .8 2.8 0l.4-.4c1.4.4 2.8 0 3.9-1L23 14.6l1.4 1.4c.396.4 1 .4 1.396 0 .399-.4.399-1 0-1.4L24.4 13.2l6.4-6.4c1.601-1.6 1.601-4.1 0-5.7-1.6-1.6-4.1-1.6-5.7 0l-6.4 6.4-1.4-1.4c-.399-.4-1-.4-1.4 0s-.4 1 0 1.4l1.5 1.4z" />
      </g>
    </svg>
  )
}

export default SvgIconEyedropper
