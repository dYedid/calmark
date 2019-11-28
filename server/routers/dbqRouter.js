const express = require('express');
const dbController = require('../controllers/dbController.js');

const router = express.Router();

router.post('/new/:serialNum-:year.:month.:day', dbController.newTM,
  (req, res) => res.status(200).send(res.locals.result));

router.get('/get/:serialNum', dbController.getTM,
  (req, res) => res.status(200).send(res.locals.result));

router.delete('/delete/:serialNum', dbController.deleteTM,
  (req, res) => res.status(200).send(res.locals.result));

module.exports = router;
