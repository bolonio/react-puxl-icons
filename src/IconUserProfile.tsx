import * as React from 'react'

function SvgIconUserProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="user-profile" aria-labelledby="t-user-profile d-user-profile">
        <title id="t-user-profile">{'User profile'}</title>
        <desc id="d-user-profile">
          {'Silhouette of human head and shoulders inside a circle'}
        </desc>
        <path d="M16 8c-4.296 0-7 3.31-7 7.39C9 19.473 11.704 25 16 25c4.294 0 7-5.527 7-9.61C23 11.31 20.294 8 16 8zm0 16c-3.663 0-6-5.1-6-8.61C10 11.63 12.467 9 16 9c3.532 0 6 2.628 6 6.39C22 18.9 19.663 24 16 24z" />
        <path d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm0 31a14.91 14.91 0 01-8.408-2.586C9.326 27.624 11.546 27 13 27h6c1.453 0 3.674.625 5.408 1.414A14.92 14.92 0 0116 31zm9.32-3.27C23.229 26.68 20.439 26 19 26h-6c-1.44 0-4.227.68-6.32 1.73C3.224 24.98 1 20.75 1 16 1 7.73 7.73 1 16 1s15 6.73 15 15c0 4.75-2.225 8.98-5.68 11.73z" />
      </g>
    </svg>
  )
}

export default SvgIconUserProfile
