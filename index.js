const express = require('express');

const app = express();

const products = ['Apple', 'Pen', 'Computer'];

app.get('/', (req, res, next) => {
    res.send('It is working');
});

app.get('/products', (req, res, next) => {
    console.log('Page', req.query.page);
    res.send({ products });
});

app.get('/products/:id', (req, res, next) => {
    if (products[req.params.id]) {
        res.send(products[req.params.id]);
    } else {
        res.status(404).send('Product not found');
    }

});

app.listen(5000, () => {
    console.log('it is started', new Date());
});
