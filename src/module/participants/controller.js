const ParticipantCreator = require("./model/create");
const ParticipantReader = require("./model/read");
const ParticipantEditor = require("./model/update");
const ParticipantDeleter = require("./model/delete");

class ParticipantController {
  static async getParticipants(req, res, next) {
    try {
      const participants = await ParticipantReader.getParticipants();
      res.send(participants);
    } catch (error) {
      next(error);
    }
  }
  static async getParticipantById(req, res, next) {
    try {
      const participantId = req.params.id;
      const data = await ParticipantReader.getParticipantById(participantId);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  static async getParticipantByPollId(req, res, next) {
    try {
      const pollId = req.params.id;
      const data = await ParticipantReader.getParticipantByPollId(pollId);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  static async createParticipant(req, res, next) {
    try {
      const participantData = req.body;
      const result = await ParticipantCreator.createParticipant(
        participantData
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async updateParticipant(req, res, next) {
    try {
      const participantId = req.params.id;
      const participantData = req.body;
      const result = await ParticipantEditor.updateParticipant(
        participantId,
        participantData
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteParticipant(req, res, next) {
    try {
      const participantId = req.params.id;
      const result = await ParticipantDeleter.deleteParticipant(participantId);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ParticipantController;
