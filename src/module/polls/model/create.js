const DatabaseManager = require("../../../core/database/databaseManager");

class PollCreator {
  static createPoll(pollData) {
    const { title, user_id, description, link } = pollData;
    const create = `INSERT INTO poll 
    (title, user_id, description, link)  
    VALUES
    ('${title}','${user_id}','${description}','${link}');`;
    return DatabaseManager.query(create);
  }
}
module.exports = PollCreator;
