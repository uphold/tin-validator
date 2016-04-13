# tin-validator
Validate and mask U.S. Employer Identification Numbers, Individual Taxpayer Identification Numbers and Social Security Numbers.

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install tin-validator --save
```

## Usage
### `isValid(value, [options])`
This method validates if the given value is a valid `Taxpayer Identification Number`.

#### Arguments
1. `value` _(*)_: The value to validate.
2. `[options]` _(Object)_: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
_(boolean)_:  Returns `true` if `value` is a valid Taxpayer Identification Number, else `false`.

#### Example

```js
isValid({});
// => false

isValid('123-12-3123');
// => false

isValid('1-2312312-3', { strict: false });
// => true

isValid('1-2312312-3', { strict: 'format' });
// => false

isValid('123-12-3123', { strict: 'format' });
// => true

isValid('123123123');
// => true
```

--------------------------------------------------------------------------------

### `mask(value, [options])`
This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments
1. `value` _(*)_: The value to mask.
2. `[options]` _(Object)_: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
_(string)_: Returns the masked value.

#### Example

```js
mask({});
// => undefined

mask('123-12-3123');
// => undefined

mask('1-2312312-3', { strict: false });
// => X-XXXX312-3

mask('1-2312312-3', { strict: 'format' });
// => undefined

mask('123-12-3123', { strict: 'format' });
// => XXX-XX-3123

mask('123123123');
// => XXXXX3123
```

--------------------------------------------------------------------------------

### `sanitize(value)`
This method will clean the value leaving only numbers.

#### Arguments
1. `value` _(*)_: The value to sanitize.

#### Returns
_(string)_: Returns the sanitized value.

#### Example

```js
sanitize({});
// ''

sanitize('123-12-3123');
// 123123123
```

--------------------------------------------------------------------------------

### `type(value, [options])`
This method will best guess if the document is either a `ein`, `itin` or `ssn`.

#### Arguments
1. `value` _(*)_: The value to check.
2. `[options]` _(Object)_: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
_(string)_: Returns the masked value.

#### Example

```js
type({});
// => undefined

type('123-12-3123');
// => undefined

type('1-2312312-3', { strict: false });
// => `ein`, `itin` or `ssn`.

type('1-2312312-3', { strict: 'format' });
// => undefined

type('123-12-3123', { strict: 'format' });
// => `ein`, `itin` or `ssn`.

type('123123123');
// => `ein`, `itin` or `ssn`.
```

--------------------------------------------------------------------------------

## Tests

```sh
npm test
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
