const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/', (req, res) => {
    res.send('api is running')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/product/:id', (req, res) => {
    const x = products.find((a) => a._id === req.params.id)
    res.json(x)
})
app.listen(5000, console.log('server is running'))