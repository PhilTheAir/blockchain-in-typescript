import { Block, Transaction } from './index';
import { sha256 } from 'js-sha256';

export class Blockchain {
  blocks: Array<Block>;

  constructor(genesisBlock: Block) {
    this.blocks = [];
    this.addBlock(genesisBlock);
  }

  addBlock(block: Block) {
    if (this.blocks.length === 0) {
      block.previousHash = "0000000000000000";
      block.hash = this.generateHash(block);
    }
    this.blocks.push(block);
  }

  blockify(transactions: Array<Transaction>) {
    const block = new Block();
    block.index = this.blocks.length;
    block.hash = this.generateHash(block);
    block.transactions = transactions;
    const previousBlock = this.getPreviousBlock();
    block.previousHash = previousBlock.hash;
    return block;
  }

  generateHash(block: Block) {
    let hash = sha256(block.key);
    while (!hash.startsWith("0000")) {
      block.nonce += 1;
      hash = sha256(block.key);
      console.log(hash);
    }
    return hash;
  }

  getPreviousBlock() {
    return this.blocks[this.blocks.length - 1]
  }

}
