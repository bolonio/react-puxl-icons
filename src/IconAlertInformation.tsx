import * as React from 'react'

function SvgIconAlertInformation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="alert-information"
        aria-labelledby="t-alert-information d-alert-information"
      >
        <title id="t-alert-information">{'Information'}</title>
        <desc id="d-alert-information">
          {'Letter &apos;i&apos; in a circle'}
        </desc>
        <path d="M20 23h-3V13a1 1 0 00-1-1h-4a1 1 0 000 2h3v9h-3a1 1 0 100 2h8a1 1 0 100-2z" />
        <circle cx={16} cy={8} r={2} />
        <path d="M16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16 7.729 1 16 1m0-1C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16z" />
      </g>
    </svg>
  )
}

export default SvgIconAlertInformation
