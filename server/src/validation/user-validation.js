import Joi from "joi";

const registerUserValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone_number: Joi.string().pattern(new RegExp("^[0-9]{12}$")).required(),
  password: Joi.string().min(6).required(),
  conf_password: Joi.string().valid(Joi.ref("password")).required(),
});

const loginUserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const changePasswordValidation = Joi.object({
  old_password: Joi.string().required(),
  new_password: Joi.string().min(6).required(),
  new_password_conf: Joi.string()
    .valid(Joi.ref("new_password"))
    .required()
    .messages({
      "any.only":
        "Confirm the new password must be the same as the new password",
    }),
});

export {
  registerUserValidation,
  loginUserValidation,
  changePasswordValidation,
};
