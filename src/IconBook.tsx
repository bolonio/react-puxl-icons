import * as React from 'react'

function SvgIconBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="book" aria-labelledby="t-book d-book">
        <title id="t-book">{'Book'}</title>
        <desc id="d-book">{'A standing, closed book'}</desc>
        <path d="M27 0H8.2C6.7 0 5.1 1.1 4.3 2.6c-.2.4-.3.9-.3 1.3v26c0 1.2.9 2.1 2.2 2.1H25c.6 0 1-.4 1-1v-2.7c.3-.2.7-.3 1-.3.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM5.2 3c.5-1.1 1.9-2 3-2H24c-.6.4-1.1 1-1.4 1.5-.396.8-.396 1.6 0 2.3 0 .1.104.1.104.1H6.2C5.4 5 5 4.5 5 3.9c0-.2.1-.6.2-.9zM14 6v8.4l-1.6-1.6c-.1-.1-.2-.1-.4-.1s-.3 0-.4.1L10 14.4V6h4zm11 25H6.2c-.8 0-1.2-.5-1.2-1.1V5.7c.3.2.8.3 1.2.3H9v9.5c0 .2.1.4.3.4.2.1.4 0 .5-.1l2.1-2 2.1 2c.1.1.2.1.4.1h.2c.2-.1.3-.2.3-.4V6h10v25h.1zm2-4c-.3 0-.7.1-1 .2V6c0-.6-.4-1-1-1-1.4 0-2-.9-1.5-2s2.1-2 3.5-2v26z" />
      </g>
    </svg>
  )
}

export default SvgIconBook
