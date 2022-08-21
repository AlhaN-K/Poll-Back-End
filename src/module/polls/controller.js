const PollCreator = require("./model/create");
const PollDeleter = require("./model/delete");
const PollReader = require("./model/read");
const PollEditor = require("./model/update");

class PollController {
  static async getPolls(req, res, next) {
    try {
      const userId = req.loggedInUser.id;
      const result = await PollReader.getPolls(userId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async getPollById(req, res, next) {
    try {
      const pollId = req.params.id;
      const result = await PollReader.getPollById(pollId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async createPoll(req, res, next) {
    try {
      const pollData = req.body;
      const userId = req.loggedInUser.id;
      const result = await PollCreator.createPoll(userId, pollData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async updatePollTitle(req, res, next) {
    try {
      const pollId = req.params.id;
      const userId = req.loggedInUser.id;
      const pollData = req.body;
      console.log("pollData :>> ", pollData);
      const result = await PollEditor.updatePollTitle(userId, pollId, pollData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async updatePollDescription(req, res, next) {
    try {
      const pollId = req.params.id;
      const userId = req.loggedInUser.id;
      const pollData = req.body;
      console.log("pollData :>> ", pollData);
      const result = await PollEditor.updatePollDescription(
        userId,
        pollId,
        pollData
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async deletePoll(req, res, next) {
    try {
      const pollId = req.params.id;
      const result = await PollDeleter.deletePoll(pollId);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = PollController;
