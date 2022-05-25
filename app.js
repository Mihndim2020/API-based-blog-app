require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: 'This is CORS-enabled for all origins! '});
})

app.post('/', (req, res) => {
    res.json(req.body);
});

app.listen(process.env.port, () => {
    console.log(`The app is listening on port ${process.env.port}`);
});
