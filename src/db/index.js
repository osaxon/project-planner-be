const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || "development";
const pathToEnv = `${__dirname}/../.env.${ENV}`;
const dotenv = require("dotenv").config({ path: pathToEnv });

if (!process.env.PGDATABASE) {
    throw new Error("PGDATABASE not set");
}

module.exports = new Pool();
