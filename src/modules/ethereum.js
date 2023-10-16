import { Wallet } from 'ethers';
import { randomBytes } from 'crypto';

// Exports -------------------------------------------------------

export function createWallet(pk = null) {
  var privateKey = pk || '0x' + randomBytes(32).toString('hex');
  var wallet = new Wallet(privateKey);
  console.log(wallet._signingKey());
  return wallet;
}

export function createPrivateKey() {
  return '0x' + randomBytes(32).toString('hex');
}
