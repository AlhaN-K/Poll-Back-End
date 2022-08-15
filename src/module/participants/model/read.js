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
}
module.exports = ParticipantReader;
