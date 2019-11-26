const db = require('../models/queries.js');

const dbController = {};

dbController.newTM = async (req, res, next) => {
  const { serialNum, regdate } = req.body;
  // const maintenenceDue = regdate +6 years
  // const renewalDue = regdate +10 years
  

  const queryString = `INSERT INTO trademarks (serial_number, registration_date, maintenence_due_date, next_renewal_date)
  VALUES ${serialNum, regdate}`;
  const result = await db.query(queryString);
  if (!result) {
    res.locals.result = 'No result found in dbController.getDueDates';
    return next();
  }
  res.locals.result = result;
  return next();
};


dbController.getDueDates = async (req, res, next) => {
  const { serialNum, type } = req.body;

  const queryString = `GET ${type} FROM trademarks WHERE serialnumber ="${serialNum}"`;
  const result = await db.query(queryString);
  if (!result) {
    res.locals.result = 'No result found in dbController.getDueDates';
    return next();
  }
  res.locals.result = result;
  return next();
};

