const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.locals.message = 'Welcome World!@#$%^&*()';
  console.log(res.locals.message);
  next();
}, (req, res) => res.status(200).json(res.locals.message));

module.exports = router;
