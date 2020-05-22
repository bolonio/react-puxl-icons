import * as React from 'react'

function SvgIconSoundOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="sound-off" aria-labelledby="t-sound-off d-sound-off">
        <title id="t-sound-off">{'Sound off'}</title>
        <desc id="d-sound-off">{'A silent loudspeaker with a cross'}</desc>
        <path d="M14 7v18l-6-6H1v-6h7l6-6m0-1c-.3 0-.5.1-.7.3L7.6 12H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.6l5.7 5.7c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9V7c0-.4-.2-.8-.6-.9-.1-.1-.3-.1-.4-.1zM31.146 10.146a.5.5 0 01.707 0 .514.514 0 010 .707L26.707 16l5.146 5.146a.514.514 0 010 .707.514.514 0 01-.707 0L26 16.707l-5.146 5.146a.514.514 0 01-.707 0 .514.514 0 010-.707L25.293 16l-5.146-5.146a.514.514 0 010-.707.5.5 0 01.707 0L26 15.293l5.146-5.147z" />
      </g>
    </svg>
  )
}

export default SvgIconSoundOff
