const DatabaseManager = require("../../core/database/databaseManager");
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

  static async getItemByPollId(req, res, next) {
    try {
      const pollId = req.params.id;
      const itemsResult = await ItemsReader.getItemByPollId(pollId);
      res.send(itemsResult);
    } catch (error) {
      next(error);
    }
  }

  static async createItems(req, res, next) {
    try {
      const itemsArrayData = req.body;
      itemsArrayData.forEach(async (item) => {
        await ItemsCreator.createItems(item);
      });
      const pollId = itemsArrayData[0].poll_id;
      const query = `SELECT ID FROM poll WHERE ID = ${pollId}`;
      const getPollById = await DatabaseManager.query(query);
      if (getPollById[0].length === 0) {
        res.status(404).send({ message: "Poll doesn't exist!" });
      }
      const result = await ItemsCreator.createItems(itemsArrayData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemsController;
