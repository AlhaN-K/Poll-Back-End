const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantReader {
  static getParticipants() {
    const read = `SELECT * FROM participant;`;
    return DatabaseManager.query(read);
  }

  static getParticipantById(participantId) {
    const readById = `SELECT * FROM participant WHERE ID = ${participantId};`;
    return DatabaseManager.query(readById);
  }

  static getParticipantByPollId(pollId) {
    const readById = `
    SELECT *
    FROM poll INNER JOIN participant 
    ON poll.ID = participant.poll_id 
    WHERE poll.ID = ${pollId};`;
    return DatabaseManager.query(readById);
  }
}
module.exports = ParticipantReader;
