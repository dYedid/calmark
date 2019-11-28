const db = require('../models/queries.js');

const dbController = {};

dbController.newTM = (req, res, next) => {
  try {
    const {
      serialNum, month, day,
    } = req.params;
    const year = Number(req.params.year);

    const createTable = `CREATE TABLE IF NOT EXISTS trademarks
    (serial_number CHAR(8) UNIQUE, registration_day CHAR(2), registration_month CHAR(2),
    registration_year CHAR(4), maintenance_year CHAR(4),
    next_renewal_year CHAR(4), second_renewal CHAR(4));`;

    const queryString = `INSERT INTO trademarks (serial_number, 
      registration_day, registration_month, registration_year, 
      maintenance_year, next_renewal_year, second_renewal)
      VALUES (${serialNum}, ${day}, ${month}, ${year}, ${year + 6}, ${year + 10}, ${year + 20}) RETURNING *`;
    db.query(createTable + queryString, (error, result) => {
      if (error) {
        return next(`Error in DB QUERY of dbController.newTM: ${error}`);
      }
      if (!result) {
        res.locals.result = 'No result found in dbController.newTM';
        return next();
      }
      console.log(result);
      res.locals.result = `Rows affected: ${result[1].rowCount}`;
      return next();
    });
  } catch (err) {
    return next(`${err} in CATCH dbController.newTM`);
  }
};

dbController.getTM = (req, res, next) => {
  try {
    console.log(req.params);
    const { serialNum } = req.params;
    const queryString = `SELECT * FROM trademarks WHERE serial_number = '${serialNum}'`;
    db.query(queryString, (error, result) => {
      if (error) return next(`Error in DB QUERY of dbController.getTM: ${error}`);
      if (!result) {
        res.locals.result = 'No result found in dbController.getTM';
        return next();
      }
      console.log(result);
      res.locals.result = result.rows[0];
      return next();
    });
  } catch (err) {
    return next(` ${err} in CATCH dbController.getTM`);
  }
};

dbController.deleteTM = (req, res, next) => {
  try {
    const { serialNum } = req.params;

    const queryString = `DELETE FROM trademarks WHERE serial_number = '${serialNum}'`;
    db.query(queryString, (error, result) => {
      if (error) {
        return next(`Error in DB QUERY of dbController.deleteTM: ${error}`);
      }
      if (!result) {
        res.locals.result = 'No result found in dbController.deleteTM';
        return next();
      }
      console.log(result);
      res.locals.result = `Number of rows removed: ${result.rowCount}`;
      return next();
    });
  } catch (err) {
    return next(` ${err} in CATCH dbController.deleteTM`);
  }
};

module.exports = dbController;








    // const { serialNum, regDate } = req.params;
    // const parsedRegDate = new Date(regDate);
    // const year = parsedRegDate.getFullYear();
    // const month = parsedRegDate.getMonth();
    // const day = parsedRegDate.getDay();
