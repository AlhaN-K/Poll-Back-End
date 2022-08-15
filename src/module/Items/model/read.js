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
    WHERE poll_item.${ItemId};`;
    return DatabaseManager.query(readById);
  }
}
module.exports = ItemsReader;
