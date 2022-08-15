const { celebrate, Joi, Segments } = require("celebrate");

class ParticipantValidator {
  static createParticipantSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().max(32).required(),
    }),
  });
}
module.exports = ParticipantValidator;
