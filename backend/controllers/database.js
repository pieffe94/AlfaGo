const conf = {
    host: 'localhost',
    port: 5432,
    database: 'ecommerce_alfago',
    user: 'alfago',
    password: 'alfago'
};

const pgp = require('pg-promise')();
const db = pgp(conf);

module.exports = db;