const { celebrate, Joi, Segments } = require("celebrate");

class ChoiceValidator {
  static createChoiceSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      item_id: Joi.number().integer().required(),
      participant_id: Joi.number().integer().required(),
    }),
  });
}
module.exports = ChoiceValidator;
