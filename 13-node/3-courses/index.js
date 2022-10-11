console.log(__dirname);
//
const names = require('./04-names');
const sayHi = require('./05-utils');
require('./07-mind-grenade');
sayHi('susan');
sayHi(names.john);
//
const secret = 'SUPER SECRET';
const join = 'john';
const peter = 'peter';

module.exports = {john, peter};
//
const sayHi = (name) => {
    console.log(`Hello there ${name}`)
};
module.exports = sayHi;
//
module.exports.item = ['item1', 'item2'];
const person = {
    name: 'bob'
}
module.exports.singlePerson = person;
//
const os = require('os');

const user = os.userInfo();
console.log(`The System Uptime is ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
//
const path = require('path');
console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);