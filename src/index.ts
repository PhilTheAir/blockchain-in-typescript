import { Block, Transaction, Blockchain } from './models';

const transactions: Array<Transaction> = [];
const genesisBlock = new Block();
const blockchain = new Blockchain(genesisBlock);

const transaction1 = new Transaction('Mary', 'John', 100);
transactions.push(transaction1);
const block1 = blockchain.blockify(transactions);
blockchain.addBlock(block1);

const transaction2 = new Transaction("Azam", "Jerry", 10);
transactions.push(transaction2);
const block2 = blockchain.blockify(transactions);
blockchain.addBlock(block2);

console.log(blockchain);

console.log(JSON.stringify(blockchain));