# codec
:fax: A light codec implemented in JavaScript, aimed for both browser and node.js

It encode a primitive type to a string, whose length is seven.

## Installation

```
npm install @changyan/codec
```

## Usage

Node,js:

```js
const codec = require('codec');
```

ES6:

```js
import codec from 'codec';
```

In your code, try it out like this:

```js
let key = codec.encode('Hello world'); // 'LLvEUum'

let src = codec.decode(key); // 'Hello world'
```
