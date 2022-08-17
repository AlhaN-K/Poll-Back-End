const DatabaseManager = require("../../../core/database/databaseManager");

class ChoiceCreator {
  static createChoice(choiceData) {
    const { item_id, participant_id } = choiceData;
    const create = `
    INSERT INTO participant_choice 
    (item_id, participant_id)  
    VALUES
    (${item_id}, ${participant_id});`;
    return DatabaseManager.query(create);
  }
}
module.exports = ChoiceCreator;
