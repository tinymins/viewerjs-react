# viewerjs-react

> Typescript supported react wrapper for viewerjs.

[![NPM](https://img.shields.io/npm/v/viewerjs-react.svg)](https://www.npmjs.com/package/viewerjs-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save viewerjs@^1.9.0 viewerjs-react
```

## Usage

```tsx
import React, { Component } from 'react'

import RViewerJS from 'viewerjs-react'
import 'viewerjs-react/dist/index.css'

class Example extends Component {
  render() {
    return <RViewerJS>
      <img src="xxx" />
    </RViewerJS>
  }
}
```

## Props

### options

Will passby to viewerjs. See [ViewerJS Options Document](https://github.com/fengyuanchen/viewerjs/blob/master/README.md#options).

## License

MIT © [tinymins](https://github.com/tinymins)
