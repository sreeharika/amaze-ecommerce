import express from 'express';
import data from './data';
const cors = require('cors')


const app = express();
const port = 5000;

app.use(cors())

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;      
    const product = data.products.find(product => product._id === productId);
    if (product)
    res.send(product);
    else
    res.status(404).send({msg: 'Product Not Found.'})

})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.listen(port, () => {console.log(`server started at htttp://localhost:${port}`)})