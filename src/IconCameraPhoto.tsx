import * as React from 'react'

function SvgIconCameraPhoto(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="camera-photo" aria-labelledby="t-camera-photo d-camera-photo">
        <title id="t-camera-photo">{'Photo camera'}</title>
        <desc id="d-camera-photo">{'Front face of a compact body camera'}</desc>
        <path d="M16 9c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" />
        <path d="M16 12c-2.8 0-5 2.2-5 5 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-3.3 2.7-6 6-6 .3 0 .5.2.5.5s-.2.5-.5.5z" />
        <path d="M31 6H11.6l-.7-1.4c-.2-.4-.5-.6-.9-.6H6c-.4 0-.7.2-.9.6L4.4 6H1c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zm0 1v20H1V7h30z" />
      </g>
    </svg>
  )
}

export default SvgIconCameraPhoto
