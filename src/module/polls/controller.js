const PollCreator = require("./model/create");
const PollDeleter = require("./model/delete");
const PollReader = require("./model/read");
const PollEditor = require("./model/update");

class PollController {
  static async getPolls(req, res, next) {
    try {
      const polls = await PollReader.getPolls();
      res.send(polls);
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

  static async getParticipants(req, res, next) {
    try {
      const pollId = req.params.id;
      const result = await PollReader.getParticipants(pollId);
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
  static async updatePoll(req, res, next) {
    try {
      const pollId = req.params.id;
      const pollData = req.body;
      const result = await PollEditor.updatePoll(pollId, pollData);
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
