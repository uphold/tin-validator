# tin-validator
Validate and mask a U.S. Taxpayer Identification Number (TIN). A TIN may be an Employer Identification Number (EIN), an Individual Taxpayer Identification Number (ITIN) or a Social Security number (SSN).

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install tin-validator --save
```

## Usage
### `isValid(value)`
This method validates if the given value is a valid `Taxpayer Identification Number`.

#### Arguments
1. `value` _(*)_: The value to validate.

#### Returns
_(boolean)_:  Returns whether the input value is a valid TIN or not.

#### Example

```js
isValid({});
// => false

isValid('9-0-0700000');
// => false

isValid('900-70-0000');
// => true

isValid('900700000');
// => true
```

--------------------------------------------------------------------------------

### `mask(value)`
This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments
1. `value` _(*)_: The value to mask.

#### Returns
_(string)_: Returns the masked value by replacing value certain digits by 'X'.

#### Example

```js
mask({});
// Throws an Error.

mask('9-0-0700000');
// Throws an Error.

mask('900-70-0000');
// => XXX-XX-0000

mask('900700000');
// => XXXXX0000
```

--------------------------------------------------------------------------------

### `sanitize(value)`
This method will remove all non numeric characters from the value.

#### Arguments
1. `value` _(*)_: The value to sanitize.

#### Returns
_(string)_: Returns the sanitized value containing only numeric characters.

#### Example

```js
sanitize('9-0 0700000');
// => 900700000

sanitize('900a7#$0foobar0000');
// => 900700000
```

--------------------------------------------------------------------------------

## Tests
To test using a local installation of `node.js`:

```sh
npm test
```

To test using Docker exclusively:

```sh
docker-compose run --rm sut
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/tin-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tin-validator
[travis-image]: https://img.shields.io/travis/seegno/tin-validator.svg?style=flat-square
[travis-url]: https://img.shields.io/travis/seegno/tin-validator.svg?style=flat-square
