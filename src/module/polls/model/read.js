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

  static getParticipants(pollId) {
    const getParticipants = `
    SELECT COUNT(*) "participant Numbers"
    FROM participant INNER JOIN poll ON participant.poll_id = poll.ID 
	  WHERE poll.ID = ${pollId}
    GROUP BY poll_id;`;

    return DatabaseManager.query(getParticipants);
  }
}
module.exports = PollReader;
