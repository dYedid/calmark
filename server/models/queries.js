const { Pool } = require('pg')

const PG_URI = 'postgres://yynfhxtu:zOK1Nesxl5XO6meFuoJ5pT67YlDZi0FQ@salt.db.elephantsql.com:5432/yynfhxtu';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('DB Query Executed:', text);
    return pool.query(text, params, callback);
  },
};
