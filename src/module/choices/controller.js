const ChoiceCreator = require("./model/create");
const ChoiceReader = require("./model/read");

class ChoiceController {
  static async getChoices(req, res, next) {
    try {
      const choices = await ChoiceReader.getChoices();
      res.send(choices);
    } catch (error) {
      next(error);
    }
  }
  static async getChoiceById(req, res, next) {
    try {
      const choiceId = req.params.id;
      const result = await ChoiceReader.getChoiceById(choiceId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async createChoice(req, res, next) {
    try {
      const choiceData = req.body;
      const result = await ChoiceCreator.createChoice(choiceData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ChoiceController;
