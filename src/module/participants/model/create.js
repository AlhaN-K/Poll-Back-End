const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantCreator {
  static createParticipant(participantData) {
    const { poll_id, name } = participantData;
    const create = `INSERT INTO participant 
    (poll_id, name)  
    VALUES
    ('${poll_id}','${name}');`;
    return DatabaseManager.query(create);
  }
}
module.exports = ParticipantCreator;
