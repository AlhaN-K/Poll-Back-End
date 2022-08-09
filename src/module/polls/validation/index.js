const { celebrate, Joi, Segments } = require("celebrate");

class PollValidator {
  static createPollSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().max(64).required(),
      user_id: Joi.number().integer().required(),
      description: Joi.string().max(256).required(),
      link: Joi.string().required(),
    }),
  });
}
module.exports = PollValidator;
