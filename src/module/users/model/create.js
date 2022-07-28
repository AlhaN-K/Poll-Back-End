const DatabaseManager = require("../../../core/database/databaseManager");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserCreator {
  static async createNewUser(userData) {
    const { username, first_name, last_name, password, email } = userData;
    const dbPass = password;
    const hashPassword = bcrypt.hash(dbPass, saltRounds);
    const query = `INSERT INTO users
    (username , first_name, last_name, password, email) 
    VALUES ('${username}','${first_name}','${last_name}','${hashPassword}','${email}');`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}
module.exports = UserCreator;
