const DatabaseManager = require("../../../core/database/databaseManager");

class ChoiceReader {
  static getChoices() {
    const read = `
    SELECT * 
    FROM participant_choice;`;
    return DatabaseManager.query(read);
  }

  static getChoiceById(choiceId) {
    const readById = `
    SELECT * 
    FROM participant_choice
    WHERE ID = ${choiceId};`;
    return DatabaseManager.query(readById);
  }
}
module.exports = ChoiceReader;
