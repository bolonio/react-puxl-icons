import * as React from 'react'

function SvgIconCameraVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="camera-video" aria-labelledby="t-camera-video d-camera-video">
        <title id="t-camera-video">{'Video camera'}</title>
        <desc id="d-camera-video">
          {'Rear view of a video camera with two rolls'}
        </desc>
        <path d="M31.551 17.165A1.017 1.017 0 0031 17a.974.974 0 00-.395.081L24 19.912v-3.055c0-.667-.378-1.24-.939-1.569a6.992 6.992 0 003.938-6.289A6.998 6.998 0 0013.5 6.41 6.995 6.995 0 007 2a6.997 6.997 0 00-3.49 13.063c-.865.204-1.51.928-1.51 1.794v11.285C2 29.167 2.897 30 4 30h18c1.104 0 2-.833 2-1.857v-3.055l6.605 2.831A.974.974 0 0031 28a1.004 1.004 0 001-1v-9c0-.336-.169-.648-.449-.835zM19.999 3c3.31 0 6 2.691 6 6s-2.69 6-6 6C16.691 15 14 12.309 14 9s2.691-6 5.999-6zm-3.593 12h-5.813a7.012 7.012 0 002.907-3.411A7.005 7.005 0 0016.406 15zM1 9c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm22 19a1 1 0 01-1 1H4a1 1 0 01-1-1V17a1 1 0 011-1h18a1 1 0 011 1v11zm8-1l-7-3v-3l7-3v9z" />
      </g>
    </svg>
  )
}

export default SvgIconCameraVideo
