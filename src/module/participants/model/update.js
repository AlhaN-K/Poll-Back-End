const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantEditor {
  static updateParticipant(participantId, participantData) {
    const { poll_id, name } = participantData;
    const update = `
    UPDATE participant 
    SET
    poll_id ='${poll_id}', name ='${name}'
    WHERE ID = ${participantId};`;
    return DatabaseManager.query(update);
  }
}

module.exports = ParticipantEditor;
