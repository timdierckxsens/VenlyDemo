const { verifyPrivateKey } = require('../assets/js/verify-private-key');
const { Wallet } = require('ethers');

describe('verifyPrivateKey', () => {
  test('valid private key returns expected address', () => {
    const pk = '0x0123456789012345678901234567890123456789012345678901234567890123';
    const expected = new Wallet(pk).address;
    expect(verifyPrivateKey(pk)).toBe(expected);
  });

  test('invalid key yields "invalid"', () => {
    expect(verifyPrivateKey('bad-key')).toBe('invalid');
  });
});
