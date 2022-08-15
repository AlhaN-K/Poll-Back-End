const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantDeleter {
  static deleteParticipant(participantId) {
    const deleteQuery = `DELETE FROM participant WHERE ID = ${participantId};`;
    return DatabaseManager.query(deleteQuery);
  }
}
module.exports = ParticipantDeleter;
