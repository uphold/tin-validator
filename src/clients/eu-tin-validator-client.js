'use strict';

/**
 * Module dependencies.
 */

const fetch = require('node-fetch');

/**
 * EUTinValidatorClient class.
 */

class EUTinValidatorClient {
  /**
   * Constructor.
   */

  constructor() {
    this.url = 'https://ec.europa.eu/taxation_customs/tin/rest-api';
  }

  /**
   * Post.
   */

  async post(path, data) {
    const response = await this._request(path, data);
    const body = await response.json();

    return { ...body, status: response.status };
  }

  _request(path, data) {
    return fetch(
      `${this.url}${path}`,
      {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        redirect: 'follow'
      }
    );
  }
}

/**
 * Exports.
 */

module.exports = new EUTinValidatorClient();
