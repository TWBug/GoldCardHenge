// import { assert } from "console";
import knex from "knex";
import assert from "assert";
import path from 'path'

const env = process.env.NODE_ENV || "development";
console.log(path.resolve('../knexfile.js'))
const db_config = require("../knexfile.js")[env];

assert(db_config, `No db_config found for env "${env}"`);

const db = knex(db_config);

export default db;