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

  static getChoiceByItemId(itemId) {
    const readByItemId = `
    SELECT *
    FROM
	  participant_choice
	  INNER JOIN poll_item ON participant_choice.item_id = poll_item.ID 
    WHERE	poll_item.ID = ${itemId};`;
    return DatabaseManager.query(readByItemId);
  }
}
module.exports = ChoiceReader;
