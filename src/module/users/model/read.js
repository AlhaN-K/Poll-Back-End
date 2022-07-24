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
  static async getUserByUsernameAndPassword(user_name, password) {
    const query = `select * from users where user_name = ${user_name} and pasword = ${password};`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}
module.exports = UserReader;
