# Taxpayer Identification Numbers (TIN)


[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

This modules allows you to check if a number is a valid ein, itin or ssn.

## Installation

Choose your preferred method:

* npm: `npm install --save tin`
* Download: [tin](https://github.com/seegno/tin)

## Usage

*NOTE:* The input number **must not** be formated to `xxx-xx-xxxx`.

> Check if number is valid.

```js
import { isValid } from 'tin';

isValid('xxxxxxxxx');
```

> Mask the number.

```js
import { mask } from 'tin';

mask('xxxxxxxxx');
```

> Get the number type.

```js
import { type } from 'tin';

type('xxxxxxxxx');
```

## Running tests

```sh
npm test
```

[npm-image]: https://img.shields.io/npm/v/tin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tin
[travis-image]: https://img.shields.io/travis/seegno/tin.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/tin
