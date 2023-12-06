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

const emailValidation = Joi.string().email().required();

const editDetailUserValidation = Joi.object({
  name: Joi.string(),
  no_reg_pmi: Joi.string(),
  phone_number: Joi.string().pattern(new RegExp("^[0-9]{8,15}$")),
  gender: Joi.string().valid("pria", "perempuan"),
  blood_type: Joi.string().valid("A", "B", "AB", "O"),
  rhesus: Joi.string().valid("+", "-"),
  city: Joi.string(),
});

const codeValidation = Joi.string()
  .length(6)
  .regex(/^[A-Z0-9]+$/);

const resetPasswordValidation = Joi.object({
  password: Joi.string().min(6).required(),
  conf_password: Joi.string().valid(Joi.ref("password")).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } }) // Menetapkan bahwa email tidak perlu memiliki domain top-level (TLD)
    .required(),
});

export {
  registerUserValidation,
  loginUserValidation,
  changePasswordValidation,
  emailValidation,
  editDetailUserValidation,
  codeValidation,
  resetPasswordValidation,
};
