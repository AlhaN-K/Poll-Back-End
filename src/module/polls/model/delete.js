const DatabaseManager = require("../../../core/database/databaseManager");

class PollDeleter {
  static deletePoll(pollId) {
    const deleteQuery = `DELETE FROM poll WHERE ID = ${pollId};`;
    return DatabaseManager.query(deleteQuery);
  }
}
module.exports = PollDeleter;
