import express from 'express';
import data from './data';
const cors = require('cors')


const app = express();
const port = 5000;

app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.listen(port, () => {console.log(`server started at htttp://localhost:${port}`)})