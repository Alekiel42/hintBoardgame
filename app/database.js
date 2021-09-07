const {Pool} = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL
};

const pool = new Pool(config);

module.exports = pool;

/*
const { Client } = require('pg');
const client = new Client(process.env.PG_URL);

// mieux avec pool
client.connect();
module.exports = client;
*/