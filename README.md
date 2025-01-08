<h3  align="center" style="font-size: 32px;">GetBlogs</h3>
<p  align="center">Get blog posts from social media by username without authentication</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/getblogs.svg?style=flat-square)](https://www.npmjs.org/package/getblogs)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=getblogs&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=getblogs)
[![npm downloads](https://img.shields.io/npm/dm/getblogs.svg?style=flat-square)](https://npm-stat.com/charts.html?package=getblogs)
[![Known Vulnerabilities](https://snyk.io/test/npm/getblogs/badge.svg)](https://snyk.io/test/npm/getblogs)

</div>

## Table of contents

- [Installation](#Installation)
- [Features](#Features)
- [Usage](#Usage)
- [Examples](#Examples)
- [Contributing](#Contributing)
- [License](#license)

## Installation

### Package manager

Using npm:

```bash
$ npm install getblogs
```

Using yarn:

```bash
$ yarn add getblogs
```

Using pnpm:

```bash
$ pnpm add getblogs
```

Using jsDelivr CDN (ES5 UMD browser module):

```html
<script src="https://cdn.jsdelivr.net/npm/getblogs@1.0.3/dist/index.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/browse/getblogs@1.0.3/dist/index.js"></script>
```

## Features

- Multiple Social Media Support
- Focus on high performance
- Super-high test coverage
- Executable for generating applications quickly

## Usage

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import getblogs, { devto, medium, hashnode } from "getblogs";
```

You can also use the default export, since the named export is just a re-export from the getblogs factory:

```js
import getblogs from "getblogs";

getblogs.devto.getBlogPosts("username").then((data) => console.log(data));
```

If you use `require` for importing, **only default export is available**:

```js
const getblogs = require("getblogs");

getblogs.devto.getBlogPosts("username").then((data) => console.log(data));
```

destructuring with require:

```js
const { devto, medium, hashnode } = require("getblogs");

devto.getBlogPosts("username").then((data) => console.log(data));
```

### Dev.to

Currently, We have only fetching blogs feature.

##### getBlogPosts(username)

```js
devto
    .getBlogPosts("your_username")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err));
```

### Medium

Currently, We have only fetching blogs feature.

##### getBlogPosts(username)

```js
medium
    .getBlogPosts("@your_username")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err));
```

<b>NOTE: Make sure you add `@` before your username for medium.</b>

### HashNode

Currently, We have only fetching blogs feature.

##### getBlogPosts(username, page: number, limit:number)

```js
let page = 2; // Default 1
let limit = 10; // Default 5

hashnode
    .getBlogPosts("your_username", page, limit)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err));
```

## Contributing

See the [Contributing Guide](Contributing.md) for more technical details on contributing.

## License

[MIT](LICENSE)
