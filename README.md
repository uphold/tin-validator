# tin-validator
Validate and mask Taxpayer Identification Number (TIN) from US and EU countries. A TIN may be an Employer Identification Number (EIN), an Individual Taxpayer Identification Number (ITIN) or a Social Security number (SSN).

Most of the functions default to US country as you can see in the documentation below. Also for US country, `entityType` is not required. When trying to validate EU TIN we need to set both paramenters `country` and `entityType` as TIN format varies from ech country and entity types.

For EU TIN validation, we first try to validate by using an [online API](https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-taxation/taxpayer-identification-number-tin_en) provided by the European Commisision, if any error is received from this API (for example, if the API is down), then we run our internal validations instead.

## Status

[![npm version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]

## Installation

Install the package via `npm`:

```sh
npm install tin-validator --save
```

## Usage
### `isValid(value)`
This method validates if the given value is a valid `Taxpayer Identification Number`.

#### Arguments
- `value` _(*)_: The string value to validate.
- `options` (object, optional):
  - `country` (string, optional): Country of document to validate (by default, `US`).
  - `entityType` (string, optional): Possible values: `natural-person` and `legal-entity`. By default: `natural-person`.

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

isValid('123456789', { country: 'PT', entityType: 'natural-person' });
// => true
```

--------------------------------------------------------------------------------

### `mask(value)`
This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments
- `value` _(*)_: The value to mask.
- `options` (object, optional):
  - `country` (string, optional): Country of document to mask (by default, `US`).
  - `entityType` (string, optional): Regulation entity type (by default, `natural-person`).

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
- `value` _(*)_: The value to sanitize.
- `options` (object, optional):
  - `country` (string, optional): Country of document to sanitize (by default, `US`).
  - `entityType` (string, optional): Regulation entity type (by default, `natural-person`).

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

## Release process

The release of a version is automated via the [release](https://github.com/uphold/tin-validator/actions/workflows/release.yaml) GitHub workflow. Run it by clicking the "Run workflow" button.

## Upgrading from version 1 to version 2

The methods on version 1 are the same as on version 2. The only change is that the methods were sync, while now they are async.

## License
MIT

[npm-image]: https://img.shields.io/npm/v/tin-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tin-validator
[ci-image]: https://github.com/uphold/tin-validator/actions/workflows/ci.yaml/badge.svg?branch=master
[ci-url]: https://github.com/uphold/tin-validator/actions/workflows/ci.yaml
