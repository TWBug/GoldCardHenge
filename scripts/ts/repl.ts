/**
 * Purposes of this file:
 * Use to create an interactive node repl that easily allows running db queries
 * in development. Much like the thing Rails and Django have. Basically it drops
 * you into a repl with your models. Similar idea here.
 *
 * Example: node -r ./dist/path/to/this/file.js
 *
 * Use the generated file, not this TS file.
 */

import db from "./db";

// @ts-ignore
global.db = db;

// Also include knex as a global so pasting examples from the docs works
// @ts-ignore
global.knex = db;

console.log("[INFO] - Access the db using the global `db` object.");
console.log("[INFO] - db is an instance of Knex: https://knexjs.org/#Builder-select");
console.log("[INFO] - Top-level await is available. Examples:");
console.log("[INFO]");
console.log(
  "[INFO]       var user = await db.select().from('user_metadata').where({ id: 1 }).first()",
);