# react-puxl-icons

[![npm version](https://img.shields.io/npm/v/react-puxl-icons.svg?style=flat)](https://www.npmjs.com/package/react-puxl-icons)

> A react icons library based on the collection of accessible [PUXL icons library](https://github.com/puxl/puxl-icons) from [PUXL framework](https://github.com/puxl/puxl-framework)

The PUXL icons library is an open source collection of more than 300 SVG icons custom tailored for [PUXL framework](https://puxl.io/), each with its own accessible title and description. You can see the collection of icons in the [PUXL icons website](https://puxl.io/puxl-icons/)

## Install

### Using NPM:

```
$ npm i --save react-puxl-icons
```

### Using Yarn:

```
$ yarn add react-puxl-icons
```

## Usage

### Basic usage

```jsx
import React from 'react'
import { IconAccessibility } from 'react-puxl-icons'

export const App = () => (
  <div>
    <IconAccessibility />
  </div>
)
```

### Passing SVG props/attributes

You can pass any SVG attribute as prop, as you would use in a SVG element.

```jsx
<IconAccessibility width="3em" height="3em" fill="red" />
<IconAccessibility width="5em" height="5em" />
<IconAccessibility width="40px" height="40px" fill="green" />
<IconAccessibility fill="blue" />
```

You can see all SVG atributes in the [SVG Attribute reference
](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute).

## Contributing

If you have any suggestion for how this project could be improved, please read the [contributing guidelines](https://github.com/bolonio/react-puxl-icons/blob/master/CONTRIBUTING.md).

## Author & Contributors

react-puxl-icons is created by [Adrián Bolonio](https://twitter.com/bolonio) using the collection of accessible [PUXL icons library](https://github.com/puxl/puxl-icons) from [PUXL framework](https://github.com/puxl/puxl-framework). Thanks to [Iñigo Garcia](https://github.com/MrKanuel) for creating the the collection of accessible icons library.

## Sources

- [PUXL framework](https://github.com/puxl/puxl-framework)
- [PUXL icons library](https://github.com/puxl/puxl-icons)

## License

ISC License, 2020, Adrián Bolonio

Please check the [license of the PUXL icons library](https://github.com/puxl/puxl-icons/blob/master/LICENSE).
