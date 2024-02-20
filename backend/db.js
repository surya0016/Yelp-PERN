// require('dotenv').config();
// const { Pool } = require('pg');
// const pool = new Pool();

// module.exports = {
//     query:(text, params) => pool.query(text, params)
// };

require('dotenv').config();
const {Client} = require('pg');
const client = new Client();
 module.exports = client;