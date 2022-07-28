const DatabaseManager = require("../../../core/database/databaseManager");

class UserReader {
  static async getAllUsers() {
    const query = `select * from users;`;
    const result = await DatabaseManager.query(query);
    return result;
  }
  static getUserById(userId) {
    const query = `select * from users where ID = ${userId}`;
    return DatabaseManager.query(query);
  }
  static async getUserByUsername(username) {
    const query = `select * from users where username = '${username}';`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}
module.exports = UserReader;
