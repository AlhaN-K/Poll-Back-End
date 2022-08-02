const DatabaseManager = require("../../../core/database/databaseManager");

class PollEditor {
  static updatePoll(pollId, pollData) {
    const { title, user_id, description, link } = pollData;
    const update = `
    UPDATE poll 
    SET
    title ='${title}', user_id ='${user_id}', description ='${description}', link ='${link}'
    WHERE ID = ${pollId};`;
    return DatabaseManager.query(update);
  }
}

module.exports = PollEditor;
