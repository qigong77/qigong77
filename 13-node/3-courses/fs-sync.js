const {readFileSync, writeFileSync} = require('fs');
const  first = readFileSync('./content/first.txt', 'utf8');
const  second = readFileSync('./content/second.txt', 'utf8');
writFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
);
//
const {readFile, writeFile} = require('fs');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    return;
                }
            }
        )
    })
});
//
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})
server.listen(5000);
//
const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`);
})
customEmitter.on('response', () => {
    console.log('some other logic here');
})
customEmitter.emit('response', 'john', 34);
//
const server_1 = http.createServer();
server_1.on('request', (req, res) => {
    res.end('Welcome');
})
server_1.listen(5000);
//
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'});
}
//
const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt');
stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => console.log(err));
//
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })  
})
.listen(5000);