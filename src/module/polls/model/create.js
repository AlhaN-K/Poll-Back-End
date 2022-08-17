const DatabaseManager = require("../../../core/database/databaseManager");

class PollCreator {
  static createPoll(userId, pollData) {
    const { title, description } = pollData;
    const create = `INSERT INTO poll 
    (title, user_id, description)  
    VALUES
    ('${title}',${userId},'${description}');`;
    return DatabaseManager.query(create);
  }
}
module.exports = PollCreator;
