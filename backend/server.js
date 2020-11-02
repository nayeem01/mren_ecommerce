import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

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

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on ${PORT}`))