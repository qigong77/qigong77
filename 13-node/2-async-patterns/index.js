//
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    if (req.url === '/about') {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page');
    }
    res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....')
})

//
const {readFile, writeFile} = require('fs').promises;

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
            './content/resul-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            {flag: 'a'}
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start();