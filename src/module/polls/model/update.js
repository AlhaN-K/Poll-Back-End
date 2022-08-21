const DatabaseManager = require("../../../core/database/databaseManager");

class PollEditor {
  static updatePollTitle(userId, pollId, pollData) {
    const { title } = pollData;
    const update = `
    UPDATE poll 
    SET
    title ='${title}', user_id =${userId}
    WHERE ID = ${pollId};`;
    return DatabaseManager.query(update);
  }

  static updatePollDescription(userId, pollId, pollData) {
    const { description } = pollData;
    const update = `
    UPDATE poll 
    SET
    description ='${description}', user_id =${userId}
    WHERE ID = ${pollId};`;
    return DatabaseManager.query(update);
  }
}

module.exports = PollEditor;
