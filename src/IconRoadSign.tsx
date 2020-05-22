import * as React from 'react'

function SvgIconRoadSign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="road-sign" aria-labelledby="t-road-sign d-road-sign">
        <title id="t-road-sign">{'Road sign'}</title>
        <desc id="d-road-sign">
          {
            'Two arrow-shaped signs on a pole, one is pointing leftwards and the other points rightwards'
          }
        </desc>
        <path d="M.3 7.7l3 3c.2.2.4.3.7.3h10v2H9c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h5v10c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V21h10c.3 0 .5-.1.7-.3l3-3c.399-.4.399-1 0-1.4l-3-3c-.2-.2-.4-.3-.7-.3H18v-2h5c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-5V1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v2H4c-.3 0-.5.1-.7.3l-3 3c-.4.4-.4 1 0 1.4zM17 3h-2V1h2v2zm-2 18h2v10h-2V21zm13-7l3 3-3 3H9v-6h19zm-13-1v-2h2v2h-2zM1 7l3-3h19v6H4L1 7z" />
      </g>
    </svg>
  )
}

export default SvgIconRoadSign
