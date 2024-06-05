const joi = require("joi");
exports.UserValidation = (uv) => {
  const schema = joi.object({
    FullName: joi.string().required(),
    Email: joi.string().email().required(),
    Password: joi.string().required(),
    Gender: joi.string().required(),
  });
  return schema.validate(uv);
};

exports.Liibaan = (Liban) => {
  const schema = joi.object({
    Email: joi.string().email().required(),
    Password: joi.string().required(),
  });
  return schema.validate(Liban);
};
