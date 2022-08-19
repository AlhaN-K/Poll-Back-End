const DatabaseManager = require("../../../core/database/databaseManager");

class ItemsReader {
  static getItems() {
    const read = `
    SELECT * 
    FROM poll_item;`;
    return DatabaseManager.query(read);
  }

  static getItemById(ItemId) {
    const readById = `
    SELECT * 
    FROM poll_item
    WHERE ID = ${ItemId};`;
    return DatabaseManager.query(readById);
  }

  static getItemByPollId(pollId) {
    const readByPollId = `
    SELECT *
    FROM poll INNER JOIN poll_item
    ON poll.ID = poll_item.poll_id 
    WHERE poll.ID = ${pollId};`;
    return DatabaseManager.query(readByPollId);
  }
}
module.exports = ItemsReader;
