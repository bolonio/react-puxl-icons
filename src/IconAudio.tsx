import * as React from 'react'

function SvgIconAudio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="audio" aria-labelledby="t-audio d-audio">
        <title id="t-audio">{'Audio'}</title>
        <desc id="d-audio">{'Music note'}</desc>
        <path d="M31.721 8.051c-1.533-.754-2.531-1.802-3.587-2.912C25.843 2.73 23.246 0 14.5 0a.5.5 0 00-.5.5v22.52C12.704 21.219 10.279 20 7.5 20 3.364 20 0 22.691 0 26s3.364 6 7.5 6 7.5-2.691 7.5-6V7.001c4.962.033 7.035.562 9.042 1.073C25.911 8.55 27.678 9 31.5 9c.232 0 .436-.16.486-.387a.498.498 0 00-.265-.562zM7.5 31C3.916 31 1 28.757 1 26s2.916-5 6.5-5 6.5 2.243 6.5 5-2.916 5-6.5 5zM24.289 7.105c-2.066-.526-4.201-1.07-9.289-1.104V1.003c7.912.097 10.197 2.5 12.41 4.825.691.728 1.4 1.472 2.271 2.132-2.497-.118-3.911-.478-5.392-.855z" />
      </g>
    </svg>
  )
}

export default SvgIconAudio
