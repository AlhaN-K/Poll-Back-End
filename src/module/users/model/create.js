const DatabaseManager = require("../../../core/database/databaseManager");

class UserCreator {
  static async createNewUser(userData) {
    const { username, first_name, last_name, password, email } = userData;
    const query = `INSERT INTO users
    (username , first_name, last_name, password, email) 
    VALUES ('${username}','${first_name}','${last_name}','${password}','${email}');`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}
module.exports = UserCreator;
