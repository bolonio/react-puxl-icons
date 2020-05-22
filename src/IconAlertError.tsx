import * as React from 'react'

function SvgIconAlertError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="alert-error" aria-labelledby="t-alert-error d-alert-error">
        <title id="t-alert-error">{'Error'}</title>
        <desc id="d-alert-error">{'X-cross in a circle'}</desc>
        <path d="M16 1c8.3 0 15 6.7 15 15s-6.7 15-15 15S1 24.3 1 16 7.7 1 16 1m0-1C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z" />
        <path d="M14.6 16L8.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .399.4.399 1 0 1.4L17.4 16l6.3 6.3c.399.4.399 1 0 1.4-.4.399-1 .399-1.4 0L16 17.4l-6.3 6.3c-.4.399-1 .399-1.4 0-.4-.4-.4-1 0-1.4l6.3-6.3z" />
      </g>
    </svg>
  )
}

export default SvgIconAlertError
