const { celebrate, Joi, Segments } = require("celebrate");

class ItemsValidator {
  static createItemSchema = celebrate({
    [Segments.BODY]: Joi.array().items(
      Joi.object().keys({
        item_text: Joi.string().max(64).required(),
      })
    ),
  });
}
module.exports = ItemsValidator;
