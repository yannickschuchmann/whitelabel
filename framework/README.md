# @deepchange/building-blocks

> React components for prototyping project pages, mainly used by deepchange community.

[![NPM](https://img.shields.io/npm/v/@deepchange/building-blocks.svg)](https://www.npmjs.com/package/@deepchange/building-blocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @deepchange/building-blocks
```

## Usage

```jsx
import React, { Component } from 'react'

import { Quote } from '@deepchange/building-blocks'
import '@deepchange/building-blocks/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Quote>
        This is the real secret of life -- to be completely engaged with what
        you are doing in the here and now. And instead of calling it work,
        realize it is play - Alan Watts
      </Quote>
    )
  }
}
```

## License

ISC © [yannickschuchmann](https://github.com/yannickschuchmann)
