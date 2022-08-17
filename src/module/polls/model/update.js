const DatabaseManager = require("../../../core/database/databaseManager");

class PollEditor {
  static updatePoll(pollId, pollData) {
    const { title, user_id, description } = pollData;
    const update = `
    UPDATE poll 
    SET
    title ='${title}', user_id =${user_id}, description ='${description}'
    WHERE ID = ${pollId};`;
    return DatabaseManager.query(update);
  }
}

module.exports = PollEditor;
