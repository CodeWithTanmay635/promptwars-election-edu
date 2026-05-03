const Joi = require('joi');

const validateChat = (req, res, next) => {
  const schema = Joi.object({
    message: Joi.string().required(),
    history: Joi.array().items(
      Joi.object({
        role: Joi.string().valid('user', 'model').required(),
        parts: Joi.array().items(
          Joi.object({
            text: Joi.string().required()
          })
        ).required()
      })
    ).optional().default([])
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: 'Validation Error', details: error.details.map(x => x.message) });
  }
  next();
};

const validateQuizCheck = (req, res, next) => {
  const schema = Joi.object({
    questionId: Joi.string().required(),
    answer: Joi.number().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: 'Validation Error', details: error.details.map(x => x.message) });
  }
  next();
};

module.exports = {
  validateChat,
  validateQuizCheck
};
