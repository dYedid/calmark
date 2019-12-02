const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbqRouter = require('./routers/dbqRouter.js');
const testRouter = require('./routers/testRouter.js');

// const path = require('path');

const app = express();
const PORT = 3000;

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/test', testRouter);

app.use('/dbq', dbqRouter);

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.use((req, res) => res.status(404).send('unknown route'));

app.use((err, req, res, next) => res.status(404).json(`ERR: ${err}`));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
