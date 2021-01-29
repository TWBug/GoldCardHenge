/**
 * This file is a bit verbose. Do I really need to specify multiple configs for
 * this project?
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3",
    },
    useNullAsDefault: true,
    debug: false, // Gets pretty noisy if you're not actively debugging queries
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3",
    },
    useNullAsDefault: true,
  },
};

