const express = require('express');
const path = require('path');
const {products} = require('./data');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    // res.json(products);
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('response not found');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})