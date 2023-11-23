import { validate } from "../validation/validation.js";
import {
  changePasswordValidation,
  editDetailUserValidation,
  emailValidation,
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import { RespondError } from "../error/ressponse-error.js";
import { TrasactionError } from "../error/transaction-error.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../application/db.js";
import { generateAccessToken, generateToken } from "../lib/token/token.js";

const register = async (request) => {
  request = validate(registerUserValidation, request);
  if (request.password !== request.conf_password) {
    throw new RespondError(
      400,
      "Please enter same password and confirm password"
    );
  }

  const [emailInDatabase] = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [request.email]
  );

  if (emailInDatabase.length === 1) {
    throw new RespondError(400, "Email already exist");
  }

  try {
    await db.beginTransaction();

    request.password = await bcrypt.hash(request.password, 10);

    const [resultUser] = await db.execute(
      "INSERT INTO users (email, password, id_roles) values (?,?,?)",
      [request.email, request.password, 1]
    );

    const userId = resultUser.insertId;

    const [resutUserDetails] = await db.execute(
      "INSERT INTO user_details (name, phone_number, user_id) VALUES (?,?,?)",
      [request.name, request.phone_number, userId]
    );

    await db.commit();
  } catch (error) {
    throw new TrasactionError(500, "Server Error");
  }
};

const login = async (request) => {
  request = validate(loginUserValidation, request);

  const [resultUser] = await db.execute(
    "SELECT * FROM users  JOIN user_details ON users.id = user_details.user_id WHERE users.email = ?",
    [request.email]
  );

  if (resultUser.length === 0) {
    throw new RespondError(400, "Wrong Email or Password");
  }

  const comparePassword = await bcrypt.compare(
    request.password,
    resultUser[0].password
  );

  if (!comparePassword) {
    throw new RespondError(400, "Wrong Email or Password");
  }

  const token = generateToken({
    id: resultUser[0].id,
    email: resultUser[0].email,
    name: resultUser[0].name,
    phone_number: resultUser[0].phone_number,
  });

  const accessToken = generateAccessToken({
    id: resultUser[0].id,
    email: resultUser[0].email,
    name: resultUser[0].name,
    phone_number: resultUser[0].phone_number,
  });

  const result = await db.execute("UPDATE users SET token = ? WHERE id = ?", [
    token,
    resultUser[0].user_id,
  ]);

  return {
    token,
    accessToken,
  };
};

const chagePassword = async (request, email) => {
  request = validate(changePasswordValidation, request);

  const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (!user.length) {
    throw new RespondError(401, "Unauthorization");
  }

  let comparePassword = await bcrypt.compare(
    request.old_password,
    user[0].password
  );

  if (!comparePassword) {
    throw new RespondError(400, "Your password is wrong");
  }

  comparePassword = await bcrypt.compare(
    request.new_password,
    user[0].password
  );

  if (comparePassword) {
    throw new RespondError(
      400,
      "Enter a password that is different from the current password"
    );
  }

  const new_pass = await bcrypt.hash(request.new_password, 10);

  const asd = await db.execute(
    "UPDATE users SET password = ? WHERE email = ?",
    [new_pass, email]
  );
};

const getUserEdit = async (email) => {
  email = validate(emailValidation, email);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (email.length === 0) {
    throw new RespondError("404", "User Not Found");
  }

  const [user] = await db.execute(
    "SELECT user_details.name, user_details.no_reg_pmi, user_details.phone_number, user_details.gender, blood_types.blood_type, rhesus.rhs as rhesus, user_details.city FROM users JOIN user_details ON users.id = user_details.user_id JOIN blood_types ON user_details.id_blood_type = blood_types.id JOIN rhesus ON user_details.id_rhesus = rhesus.id where users.email = ?",
    [email]
  );

  return user[0];
};

const editDetailUsers = async (req, email) => {
  req = validate(editDetailUserValidation, req);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (email.length === 0) {
    throw new RespondError("404", "User Not Found");
  }

  const [updateUserDetails] = await db.execute(
    "UPDATE user_details SET name = ?, phone_number = ?, city = ?, gender = ? , no_reg_pmi = ? , id_blood_type = (SELECT id FROM blood_types WHERE blood_type = ? ), id_rhesus = (SELECT id FROM rhesus WHERE rhs = ? ) WHERE user_id = ?",
    [
      req.name,
      req.phone_number,
      req.city,
      req.gender,
      req.no_reg_pmi,
      req.blood_type,
      req.rhesus,
      emailInDb[0].id,
    ]
  );

  const [selectedUser] = await db.execute(
    "SELECT usr.name, usr.no_reg_pmi, usr.phone_number, usr.gender, bts.blood_type, rhs.rhs as rhesus, usr.city FROM user_details usr JOIN rhesus rhs ON usr.id_rhesus = rhs.id JOIN blood_types bts ON usr.id_blood_type = bts.id WHERE user_id = ?",
    [emailInDb[0].id]
  );

  return selectedUser[0];
};

export default {
  register,
  login,
  chagePassword,
  getUserEdit,
  editDetailUsers,
};
