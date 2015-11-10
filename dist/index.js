
/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies
 */

'use strict';

exports.__esModule = true;
exports.isValid = isValid;
exports.mask = mask;
exports.sanitize = sanitize;
exports.type = type;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isValidEin = require('is-valid-ein');

var _isValidEin2 = _interopRequireDefault(_isValidEin);

var _isValidItin = require('is-valid-itin');

var _isValidItin2 = _interopRequireDefault(_isValidItin);

var _isValidSsn = require('is-valid-ssn');

var _isValidSsn2 = _interopRequireDefault(_isValidSsn);

/**
 * Export isValid function.
 */

function isValid(tin) {
  return _isValidEin2['default'](tin) || _isValidItin2['default'](tin) || _isValidSsn2['default'](tin);
}

/**
 * Export mask funtion.
 */

function mask(tin) {
  if (!isValid(tin)) {
    throw new Error('Invalid Taxpayer Identification Number');
  }

  var tinType = type(tin);

  if ('ein' === tinType) {
    return _isValidEin.mask(tin);
  }

  if ('itin' === tinType) {
    return _isValidItin.mask(tin);
  }

  if ('ssn' === tinType) {
    return _isValidSsn.maskSSN(tin);
  }
}

/**
 * Sanitize tin.
 */

function sanitize(tin) {
  return String(tin).replace(/[^0-9]+/g, '');
}

/**
 * Export type function.
 *
 * NOTE: This is a best effort type guess. There are numbers which are complient with multiple tin validators.
 */

function type(tin) {
  if (_isValidSsn2['default'](tin)) {
    return 'ssn';
  }

  if (_isValidItin2['default'](tin)) {
    return 'itin';
  }

  if (_isValidEin2['default'](tin)) {
    return 'ein';
  }

  return;
}