const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectdb = require('./server/database/connection');

const app = express();
dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));
connectdb();

app.use(bodyparser.urlencoded({ extended: true }));
app.use('/css', express.static(path.resolve(__dirname, 'asserts/css')));
app.use('/image', express.static(path.resolve(__dirname, 'asserts/image')));

app.set("view engine", "ejs");

app.use('/', require('./server/routes/routes'));

app.listen(PORT, () => {
    console.log('server is running on http://localhost:' + PORT)
});

