import { Transaction } from './index';

export class Block {
  index: number;
  previousHash: string;
  hash: string;
  nonce: number;
  transactions: Array<Transaction>;

  constructor() {
    this.index = 0;
    this.previousHash = "";
    this.hash = "";
    this.nonce = 0;
    this.transactions = [];
  }

  get key() {
    return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce;
  }

}
