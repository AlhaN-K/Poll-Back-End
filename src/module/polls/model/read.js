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

  static getParticipants(userId) {
    const getParticipants = `
    SELECT COUNT(*) "total"
    FROM participant INNER JOIN poll ON participant.poll_id = poll.ID 
	  WHERE user_id = ${userId}
    GROUP BY poll.ID;`;

    return DatabaseManager.query(getParticipants);
  }
}
module.exports = PollReader;
