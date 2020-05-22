import * as React from 'react'

function SvgIconBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="badge" aria-labelledby="t-badge d-badge">
        <title id="t-badge">{'Badge'}</title>
        <desc id="d-badge">{'Badge with ribbons'}</desc>
        <path d="M16 6c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5m0-1a6 6 0 100 12 6 6 0 000-12z" />
        <path d="M18.68 1l1.463 2.827 3.178-.148-.146 3.18L26 8.32 24.282 11 26 13.68l-2.828 1.461.148 3.179-3.18-.147L18.68 21 16 19.281 13.32 21l-1.461-2.827-3.18.147.148-3.179L6 13.68 7.718 11 6 8.32l2.827-1.461-.148-3.18 3.18.148L13.32 1 16 2.718 18.68 1m4.64 2.679h.005M13.32 0a.996.996 0 00-.888.541l-1.167 2.257-2.539-.118-.046-.001a1 1 0 00-1 1.047l.118 2.54-2.257 1.166a1 1 0 00-.383 1.428L6.53 11l-1.372 2.14a.998.998 0 00.383 1.427l2.257 1.167-.118 2.54a1 1 0 00.999 1.047c.016 0 .031 0 .046-.002l2.54-.104 1.167 2.26c.129.25.357.438.629.521.085 0 .173.012.259.012.189 0 .377-.061.54-.152L16 20.471l2.141 1.371a1.005 1.005 0 00.799.124.995.995 0 00.629-.507l1.168-2.258 2.539.117c.021.002.029.002.045.002a.981.981 0 00.707-.293.98.98 0 00.293-.754l-.104-2.542 2.264-1.167c.25-.129.438-.357.521-.629a1.08 1.08 0 00-.123-.798L25.471 11l1.371-2.14a.998.998 0 00-.383-1.427l-2.258-1.167.113-2.468a.997.997 0 00-.989-1.118h-.019l-.041.001-2.531.118L19.568.541a1 1 0 00-1.427-.383L16 1.53 13.86.158A1.003 1.003 0 0013.32 0z" />
        <path d="M28.676 27.986l-3.906-8.295a.202.202 0 00-.035.043c-.229.229-.514.39-.812.479l3.854 8.191L18.111 31l-1.594-5.947.688-2.613-.883-.562L13.889 31l-9.66-2.588 3.861-8.197a1.934 1.934 0 01-.825-.48c-.013-.014-.021-.021-.034-.043l-3.907 8.295c-.126.271-.127.578-.002.854s.362.476.648.546l9.66 2.592c.086.009.174.021.259.021a.998.998 0 00.965-.741L16 26.982l1.146 4.271a.997.997 0 001.224.713l9.659-2.588c.287-.075.521-.276.646-.545s.128-.579.001-.847z" />
      </g>
    </svg>
  )
}

export default SvgIconBadge