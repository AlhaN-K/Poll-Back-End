const { celebrate, Joi, Segments } = require("celebrate");

class ParticipantValidator {
  static createParticipantSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      poll_id: Joi.number().integer().required(),
      name: Joi.string().max(32).required(),
    }),
  });
}
module.exports = ParticipantValidator;
