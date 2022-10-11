//
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');

//
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');

//
setInterval(() => {
    console.log('hello world')
}, 2000);
console.log('I will run first');

//
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello world');
});
server.listen(5000, () => {
    console.log('Server listening on port: 5000....');
});