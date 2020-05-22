import * as React from 'react'

function SvgIconPackage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="package" aria-labelledby="t-package d-package">
        <title id="t-package">{'Package'}</title>
        <desc id="d-package">{'A carton box closed with duct tape'}</desc>
        <path d="M29.5 7.6L16.5.1c-.3-.2-.7-.2-1 0l-13 7.5c-.3.2-.5.5-.5.9v15c0 .4.2.7.5.9l13 7.5c.3.199.7.199 1 0l13-7.5c.3-.2.5-.5.5-.9v-15c0-.4-.2-.7-.5-.9zM16 1l12.5 7.2-5.3 3.1L11 3.9 16 1zm-.5 29.7L3 23.5V9.1l12.5 7.2v14.4zm.5-15.3L3.5 8.2l5-2.9L21 12.5l-5 2.9zm13 8.1l-12.5 7.2V16.3l5-2.9v5.8l2.2-1.3v-5.8l5.3-3v14.4z" />
      </g>
    </svg>
  )
}

export default SvgIconPackage
