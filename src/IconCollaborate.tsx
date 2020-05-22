import * as React from 'react'

function SvgIconCollaborate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="collaborate" aria-labelledby="t-collaborate d-collaborate">
        <title id="t-collaborate">{'Collaborate'}</title>
        <desc id="d-collaborate">
          {'Four clockwise flowing spirals converging in a central disk'}
        </desc>
        <path d="M19 24c7.184 0 13-5.816 13-13 0-.275-.225-.5-.5-.5s-.5.225-.5.5c0 6.63-5.37 12-12 12a6.984 6.984 0 01-5.519-2.703A4.962 4.962 0 0016 21c4.42 0 8-3.58 8-8 0-7.183-5.816-13-13-13a.5.5 0 000 1c6.63 0 12 5.37 12 12a6.988 6.988 0 01-2.703 5.52A4.974 4.974 0 0021 16c0-4.42-3.58-8-8-8C5.817 8 0 13.817 0 21a.5.5 0 001 0C1 14.37 6.37 9 13 9a6.984 6.984 0 015.52 2.704A4.956 4.956 0 0016 11c-4.42 0-8 3.58-8 8 0 7.184 5.817 13 13 13 .275 0 .5-.225.5-.5s-.225-.5-.5-.5c-6.63 0-12-5.37-12-12a6.983 6.983 0 012.704-5.52A4.959 4.959 0 0011 16c0 4.42 3.58 8 8 8zm-3-12a4 4 0 110 8 4 4 0 010-8z" />
      </g>
    </svg>
  )
}

export default SvgIconCollaborate
