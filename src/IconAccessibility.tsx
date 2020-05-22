import * as React from 'react'

function SvgIconAccessibility(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="accessibility" aria-labelledby="t-accessibility d-accessibility">
        <title id="t-accessibility">{'Accessibility'}</title>
        <desc id="d-accessibility">
          {'A human, standing with arms extended, in a circle'}
        </desc>
        <path d="M16 19.1s.4 0 .7 1l2.4 7.3c.2.5.801.8 1.301.6s.812-.8.604-1.3L18.6 19.6c-.4-1.1-.6-2.4-.6-3.6v-2.7c0-.368.078-1.394 1.189-1.524 2.474-.292 4.854-.766 5.006-.795a.998.998 0 00.785-1.176 1.005 1.005 0 00-1.176-.785c-.049.009-4.939.98-7.804.98s-7.755-.971-7.804-.98a.999.999 0 10-.392 1.96c.144.029 2.533.503 5.007.795C13.922 11.906 14 12.932 14 13.3V16c0 1.2-.2 2.5-.6 3.6L11 26.7c-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6l2.4-7.301c.3-.999.7-.999.7-.999z" />
        <circle cx={16} cy={7} r={2} />
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 31C7.8 31 1 24.3 1 16S7.8 1 16 1s15 6.8 15 15-6.7 15-15 15z" />
      </g>
    </svg>
  )
}

export default SvgIconAccessibility
