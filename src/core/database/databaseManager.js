const mysql2 = require("mysql2/promise");
const secrets = require("../../config/index");

class Databasemanager {
  constructor() {
    this.poolConnection = mysql2.createPool(secrets.database);
  }
  async query(mysqlQuery) {
    const result = await this.poolConnection.query(mysqlQuery);
    return result[0];
  }
}
module.exports = new Databasemanager();
