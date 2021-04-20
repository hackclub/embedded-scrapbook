# 📸 embedded-scrapbook

Embed your Scrapbook in your own websites. If you're using React you can use the React 
component (`@hackclub/scrapbook-grid`) and if you aren't you can embed Scrapbook with an `iframe`.

# React Component

Install the component with either

```bash
npm install --save @hackclub/scrapbook-grid
```

or

```bash
yarn add @hackclub/scrapbook-grid
```

Then use it like:

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

If you are unsure about fetching data. Check out Next.js and Incremental Static Generation!

# Embedded Site

You could also use an `<iframe>` to add Scrapbook to your site.

Load up either:

```bash
https://embed.scrapbook.hackclub.com
```

```bash
https://embed.scrapbook.hackclub.com/sampoder # a Scrapbook username
```

```r
https://embed.scrapbook.hackclub.com/r/ship # a Slack emoji
```

To customise the system you can use the following query params:

```
?css=https://example.com/styles.css

?color-red=#ec3750 

?reactions=true

?fonts=%22Baloo%202%22
```

Built by [@sampoder](https://github.com/sampoder)
