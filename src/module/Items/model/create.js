const DatabaseManager = require("../../../core/database/databaseManager");

class ItemsCreator {
  static createItems(ItemsData) {
    const { poll_id, item_text } = ItemsData;
    const create = `
    INSERT INTO poll_item 
    (poll_id, item_text)  
    VALUES
    ('${poll_id}','${item_text}');`;
    return DatabaseManager.query(create);
  }
}
module.exports = ItemsCreator;
