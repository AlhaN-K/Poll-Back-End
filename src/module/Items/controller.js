const ItemsCreator = require("./model/create");
const ItemsReader = require("./model/read");

class ItemsController {
  static async getItems(req, res, next) {
    try {
      const items = await ItemsReader.getItems();
      res.send(items);
    } catch (error) {
      next(error);
    }
  }
  static async getItemById(req, res, next) {
    try {
      const ItemId = req.params.id;
      const itemsResult = await ItemsReader.getItemById(ItemId);
      res.send(itemsResult);
    } catch (error) {
      next(error);
    }
  }
  static async createItems(req, res, next) {
    try {
      const ItemsData = req.body;
      const result = await ItemsCreator.createItems(ItemsData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemsController;
