const DatabaseManager = require("../../../core/database/databaseManager");

class UserCreator {
  static async createNewUser(userData) {
    const { user_name, first_name, last_name, pasword, email } = userData;
    const query = `INSERT INTO users
    (user_name , first_name, last_name, pasword, email) 
    VALUES ('${user_name}','${first_name}','${last_name}','${pasword}','${email}');`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}
module.exports = UserCreator;
