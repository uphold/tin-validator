'use strict';

/**
 * Module dependencies.
 */

const client = require('../../../src/clients/eu-tin-validator-client');

/**
 * Test `EUTinValidatorClient`.
 */

describe('EUTinValidatorClient', () => {
  describe('post()', () => {
    it('should call `_request()`', async () => {
      const response = { json: vi.fn(() => ({ foo: 'bar' })), status: 200 };

      vi.spyOn(client, '_request').mockReturnValue(response);

      const result = await client.post('/test', { foo: 'bar' });

      expect(client._request).toHaveBeenCalledTimes(1);
      expect(client._request).toHaveBeenCalledWith('/test', { foo: 'bar' });
      expect(result).toEqual({ foo: 'bar', status: 200 });
    });
  });
});
