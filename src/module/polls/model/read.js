const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static getPolls() {
    const read = `SELECT * FROM poll;`;
    return DatabaseManager.query(read);
  }

  static getPollById(pollId) {
    const readById = `SELECT * FROM poll WHERE ID = ${pollId};`;
    return DatabaseManager.query(readById);
  }
}
module.exports = PollReader;
