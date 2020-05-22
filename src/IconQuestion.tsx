import * as React from 'react'

function SvgIconQuestion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="question" aria-labelledby="t-question d-question">
        <title id="t-question">{'Question'}</title>
        <desc id="d-question">{'Question mark'}</desc>
        <circle cx={16} cy={29} r={3} />
        <path d="M17 23.559h-2c0-5.459 2.747-7.808 5.172-9.875 1.999-1.709 3.578-3.059 3.578-5.918 0-.749-.166-3.304-2.298-4.751-2.202-1.495-5.819-1.309-10.459.534l-.738-1.859c5.361-2.131 9.507-2.242 12.32-.332C24.562 2.705 25.75 5.1 25.75 7.762c0 3.781-2.175 5.64-4.279 7.438C19.172 17.164 17 19.021 17 23.559z" />
      </g>
    </svg>
  )
}

export default SvgIconQuestion
