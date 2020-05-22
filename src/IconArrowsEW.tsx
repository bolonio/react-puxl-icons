import * as React from 'react'

function SvgIconArrowsEW(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrows-e-w" aria-labelledby="t-arrows-e-w d-arrows-e-w">
        <title id="t-arrows-e-w">{'Arrows East-West'}</title>
        <desc id="d-arrows-e-w">
          {'Two united arrows: one pointing East, the other pointing West'}
        </desc>
        <path d="M9.707 23.293L3.414 17h25.172l-6.293 6.293a.997.997 0 000 1.414.999.999 0 001.414 0l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L28.586 15H3.414l6.293-6.293a.999.999 0 10-1.414-1.414l-8 8a.997.997 0 000 1.414l8 8a.999.999 0 101.414-1.414z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowsEW
