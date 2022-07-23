const { database } = require("./envManager");

module.exports = {
  host: database.host,
  user: database.user,
  database: database.databaseName,
  password: database.password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
