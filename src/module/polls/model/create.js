const DatabaseManager = require("../../../core/database/databaseManager");

class PollCreator {
  static createPoll(userId, pollData) {
    const { title, description, link } = pollData;
    const create = `INSERT INTO poll 
    (title, user_id, description, link)  
    VALUES
    ('${title}','${userId}','${description}','${link}');`;
    return DatabaseManager.query(create);
  }
}
module.exports = PollCreator;
