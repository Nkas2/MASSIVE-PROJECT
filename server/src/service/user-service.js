import { validate } from "../validation/validation.js";
import {
  changePasswordValidation,
  codeValidation,
  editDetailUserValidation,
  emailValidation,
  loginUserValidation,
  registerUserValidation,
  resetPasswordValidation,
} from "../validation/user-validation.js";
import { RespondError } from "../error/ressponse-error.js";
import { TrasactionError } from "../error/transaction-error.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateToken } from "../lib/token/token.js";
import { sendEmail } from "../lib/email/email.js";
import { generateResetCode } from "../lib/token/reset-token.js";
import getConnection from "../application/db.js";
import { generateCOdeToken } from "../lib/token/code-token.js";

const register = async (request, db) => {
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
  db.release();
};

const login = async (request, db) => {
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
    image: resultUser[0].image,
  });

  const accessToken = generateAccessToken({
    id: resultUser[0].id,
    email: resultUser[0].email,
    name: resultUser[0].name,
    phone_number: resultUser[0].phone_number,
    image: resultUser[0].image,
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

const chagePassword = async (request, email, db) => {
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

const getUserEdit = async (email, db) => {
  email = validate(emailValidation, email);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (emailInDb.length === 0) {
    throw new RespondError(404, "User Not Found");
  }

  const [user] = await db.execute(
    "SELECT user_details.name, user_details.no_reg_pmi, user_details.phone_number, user_details.gender, blood_types.blood_type, rhesus.rhs as rhesus, user_details.city, user_details.image FROM users left JOIN user_details ON users.id = user_details.user_id left JOIN blood_types ON user_details.id_blood_type = blood_types.id left JOIN rhesus ON user_details.id_rhesus = rhesus.id where users.email = ?",
    [email]
  );

  return user[0];
};

const editDetailUsers = async (req, email, db) => {
  req = validate(editDetailUserValidation, req);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (emailInDb.length === 0) {
    throw new RespondError("404", "User Not Found");
  }

  const [updateUserDetails] = await db.execute(
    "UPDATE user_details SET name = ?, phone_number = ?, city = ?, gender = ? , no_reg_pmi = COALESCE(?, NULL) , id_blood_type = COALESCE((SELECT id FROM blood_types WHERE blood_type = ?), NULL), id_rhesus = COALESCE((SELECT id FROM rhesus WHERE rhs = ?), NULL) WHERE user_id = ?",
    [
      req.name || null,
      req.phone_number || null,
      req.city || null,
      req.gender || null,
      req.no_reg_pmi || null,
      req.blood_type || null,
      req.rhesus || null,
      emailInDb[0].id,
    ]
  );

  const [selectedUser] = await db.execute(
    "SELECT usr.name, usr.no_reg_pmi, usr.phone_number, usr.gender, bts.blood_type, rhs.rhs as rhesus, usr.city FROM user_details usr left JOIN rhesus rhs ON usr.id_rhesus = rhs.id left JOIN blood_types bts ON usr.id_blood_type = bts.id WHERE user_id = ?",
    [emailInDb[0].id]
  );

  return selectedUser[0];
};

const getUser = async (email, db) => {
  email = validate(emailValidation, email);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (emailInDb.length === 0) {
    throw new RespondError("404", "User Not Found");
  }

  const [user] = await db.execute(
    "SELECT usr.name,usr.no_reg_pmi, usr.image, blood_types.blood_type, rhesus.rhs as rhesus, usr.city FROM user_details usr left JOIN users user ON user.id = usr.user_id left JOIN blood_types ON usr.id_blood_type = blood_types.id left JOIN rhesus ON usr.id_rhesus = rhesus.id WHERE user.email = ?",
    [email]
  );

  return user[0];
};

const sendEmailForResetPassword = async (email, db) => {
  email = validate(emailValidation, email);

  const [userInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (userInDb.length === 0) {
    throw new RespondError(404, "User not found");
  }

  const token = generateResetCode();

  await db.execute(
    "INSERT INTO reset_password_token (email, token) VALUES (?, ?)",
    [email, token]
  );

  sendEmail(email, token);

  return {
    email,
  };
};

const verifyCodeResetPassoword = async (code, db) => {
  code = validate(codeValidation, code);

  let [email] = await db.execute(
    "SELECT email FROM reset_password_token WHERE token = ?",
    [code]
  );

  if (email.length === 0) {
    throw new RespondError(400, "Wrong Reset Token");
  }

  await db.execute("DELETE FROM reset_password_token WHERE token = ?", [code]);

  email = email[0].email;

  const token = generateCOdeToken({ email: email });
  return {
    token,
  };
};

const resetPassword = async (req, db) => {
  req = validate(resetPasswordValidation, req);

  const [email] = await db.execute("SELECT * FROM users WHERE email = ?", [
    req.email,
  ]);

  if (email.length === 0) {
    throw new RespondError(400, "Email not found");
  }

  const newPassword = await bcrypt.hash(req.password, 10);

  await db.execute("UPDATE users SET password = ? WHERE email = ?", [
    newPassword,
    email[0].email,
  ]);
};

const logout = async (email, db) => {
  const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (!user[0]) {
    throw new RespondError(404, "Not Found");
  }

  if (user[0].token === null) {
    throw new RespondError(400, "Bad Request");
  }

  await db.execute("UPDATE users SET token = ? WHERE email = ?", [null, email]);
};

const uploadImageProfile = async (email, fileName, db) => {
  const [users] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (email.length === 0) {
    throw new RespondError(400, "Email not found");
  }

  await db.execute("UPDATE user_details SET image = ? WHERE user_id = ?", [
    fileName,
    users[0].id,
  ]);

  const [image] = await db.execute(
    "SELECT image FROM user_details WHERE user_id = ?",
    [users[0].id]
  );

  return image[0];
};

const getDonorHistory = async (email, db) => {
  if (!email) {
    throw new RespondError(404, "User not found");
  }

  const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (user.length === 0) {
    throw new RespondError(404, "NOT FOUND");
  }

  const [history] = await db.execute(
    `select DATE_FORMAT(dh.date, '%e %M %Y %H:%i') AS date, pmi.name, dh.status, concat_ws("", blood_types.blood_type, rhesus.rhs) as goldar from donor_history dh right join pmi on pmi.id = dh.pmi_id join users on dh.user_id = users.id join user_details on users.id = user_details.user_id left join blood_types on user_details.id_blood_type = blood_types.id left join rhesus on user_details.id_rhesus = rhesus.id where dh.user_id = (select id from users where email = ?)`,
    [email]
  );

  return history;
};

export default {
  register,
  login,
  chagePassword,
  getUserEdit,
  editDetailUsers,
  getUser,
  sendEmailForResetPassword,
  verifyCodeResetPassoword,
  resetPassword,
  logout,
  uploadImageProfile,
  getDonorHistory,
};
