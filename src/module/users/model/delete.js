const DatabaseManager = require("../../../core/database/databaseManager");

class UserDeleter {
  static deleteUser(userId) {
    const deleteQuery = `DELETE FROM users WHERE ID = ${userId};`;
    return DatabaseManager.query(deleteQuery);
  }
}
module.exports = UserDeleter;
