const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connectToMongo = require('./config/mongoose');
const port = process.env.PORT || 9002;
app.use(express.static('public'));
app.use(cors());
connectToMongo();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.json());
app.use('/', require('./routes'));
app.listen(port, () => {
    console.log(`Fitlustarena listening at http://localhost:${port}`);
})