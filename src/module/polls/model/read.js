const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static getPolls(userId) {
    const getParticipants = `
    SELECT poll.ID, poll.user_id, poll.title, poll.description,
    COUNT(participant.ID) AS totalParticipants
    FROM poll LEFT JOIN participant ON poll.ID = participant.poll_id
	  WHERE user_id = ${userId}
    GROUP BY poll.ID;`;
    return DatabaseManager.query(getParticipants);
  }
  static getPollById(pollId) {
    const readById = `SELECT * FROM poll WHERE ID = ${pollId};`;
    return DatabaseManager.query(readById);
  }
}
module.exports = PollReader;
