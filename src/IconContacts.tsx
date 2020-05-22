import * as React from 'react'

function SvgIconContacts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="contacts" aria-labelledby="t-contacts d-contacts">
        <title id="t-contacts">{'Contacts'}</title>
        <desc id="d-contacts">
          {
            'A notepad with a silhouette of human head and shoulders in the cover'
          }
        </desc>
        <path d="M21 21c1.7 0 4.9 1.3 5 2H12c.1-.7 3.3-2 5-2h4m0-1h-4c-1.7 0-6 1.3-6 3 0 .6.4 1 1 1h14c.6 0 1-.4 1-1 0-1.7-4.3-3-6-3zM19 9c2.4 0 3.5 2.1 3.5 4 0 2.5-1.6 5.5-3.5 5.5s-3.5-3-3.5-5.5c0-1.9 1.1-4 3.5-4m0-1c-2.8 0-4.5 2.2-4.5 5s1.7 6.5 4.5 6.5 4.5-3.7 4.5-6.5-1.7-5-4.5-5z" />
        <path d="M29 0H7c-.6 0-1 .4-1 1v3H4c-1.1 0-2 .9-2 2s.9 2 2 2h2v6H4c-1.1 0-2 .9-2 2s.9 2 2 2h2v6H4c-1.1 0-2 .9-2 2s.9 2 2 2h2v3c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM4 7c-.5 0-1-.4-1-1s.5-1 1-1h4c.5 0 1 .4 1 1s-.5 1-1 1H4zm0 10c-.5 0-1-.4-1-1s.5-1 1-1h4c.5 0 1 .4 1 1s-.5 1-1 1H4zm0 10c-.5 0-1-.4-1-1s.5-1 1-1h4c.5 0 1 .4 1 1s-.5 1-1 1H4zm25 4H7v-3h1c1.1 0 2-.9 2-2s-.9-2-2-2H7v-6h1c1.1 0 2-.9 2-2s-.9-2-2-2H7V8h1c1.1 0 2-.9 2-2s-.9-2-2-2H7V1h22v30z" />
      </g>
    </svg>
  )
}

export default SvgIconContacts
