# scrapbook-grid

> 📸 Embed your Scrapbook in your React site

[![NPM](https://img.shields.io/npm/v/@hackclub/scrapbook-grid.svg)](https://www.npmjs.com/package/@hackclub/scrapbook-grid)

## Install

```bash
npm install --save @hackclub/scrapbook-grid
```

```bash
yarn add @hackclub/scrapbook-grid
```

## Usage

```jsx
import React, { Component } from 'react'

import ScrapbookGrid from '@hackclub/scrapbook-grid'

function App() {
  return (
    <ScrapbookGrid
      posts={postsData} // You can get this data from the Scrapbook api
      hideReactions={true}
      profile // If you are attempting to simulate a profile page
      fonts={{ body: '"Baloo 2"' }} // Should be a string that you would have with css after `font-family:`
      colors={{ red: '#ec3750'}} // View colors at: https://github.com/hackclub/summer-scrapbook#colors--fonts
    />
  )
}
```

Made by [@sampoder](https://github.com/@sampoder)
