const { celebrate, Joi, Segments } = require("celebrate");

class ItemsValidator {
  static createItemSchema = celebrate({
    [Segments.BODY]: Joi.array().items(
      Joi.object().keys({
        poll_id: Joi.number().integer().required(),
        item_text: Joi.any().required(),
      })
    ),
  });
}
module.exports = ItemsValidator;
