const express = require('express');
const db = require('./models/queries');
const apiRouter = require('./routers/apiRouter.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(bodyParser.json());
// app.use(bodyParser());

app.use('/api', apiRouter);

app.get('/', (req, res) => res.status(200).send('Hello World!'));


app.use((req, res) => res.status(404).send('unknown route'));


app.use((err, req, res, next) => res.status(404).json(`ERR: ${err}`));


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
