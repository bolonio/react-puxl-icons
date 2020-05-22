import * as React from 'react'

function SvgIconFactory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="factory" aria-labelledby="t-factory d-factory">
        <title id="t-factory">{'Factory'}</title>
        <desc id="d-factory">{'A building with a smokey chimney'}</desc>
        <path d="M31.5 31H28V16a1.001 1.001 0 00-1.555-.832L22 18.132V16a1.001 1.001 0 00-1.555-.832L16 18.132V16a1 1 0 00-1.555-.832l-4.589 3.061-.859-10.312A1 1 0 008 7H6a1 1 0 00-.997.917l-1 12A1.13 1.13 0 004 20v11H.5a.5.5 0 000 1h31c.275 0 .5-.225.5-.5s-.225-.5-.5-.5zM5 31V20L6 8h2l1 12 6-4v4l6-4v4l6-4v15H5z" />
        <path d="M24 25h-2c-.557 0-1 .441-1 1v2c0 .559.443 1 1 1h2c.557 0 1-.441 1-1v-2c0-.559-.443-1-1-1zm0 3h-2v-2h2v2zM18 25h-2c-.557 0-1 .441-1 1v2c0 .559.443 1 1 1h2c.557 0 1-.441 1-1v-2c0-.559-.443-1-1-1zm0 3h-2v-2h2v2zM12 25h-2c-.557 0-1 .441-1 1v2c0 .559.443 1 1 1h2c.557 0 1-.441 1-1v-2c0-.559-.443-1-1-1zm0 3h-2v-2h2v2zM23.471 6.774c-2.547 0-5.562-1.113-8.347-2.14-2.879-1.062-5.857-2.161-7.007-1.358-.415.289-.617.853-.617 1.723a.5.5 0 01-1 0c0-1.204.352-2.06 1.045-2.543 1.58-1.101 4.521-.016 7.925 1.241 4.151 1.531 8.857 3.271 11.176.949a.5.5 0 01.707 0 .514.514 0 010 .707c-1.031 1.03-2.374 1.421-3.882 1.421z" />
      </g>
    </svg>
  )
}

export default SvgIconFactory
