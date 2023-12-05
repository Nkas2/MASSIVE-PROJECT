import db from "../application/db.js";
import { RespondError } from "../error/ressponse-error.js";
import userService from "../service/user-service.js";
import tokenService from "../service/token-service.js";

const register = async (req, res, next) => {
  try {
    await userService.register(req.body);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const login = async (req, res, next) => {
  try {
    const type = req.query.type;
    const result = await userService.login(req.body);
    if (type === "website") {
      res
        .status(200)
        .cookie("token", result.token, {
          httpOnly: true,
          maxAge: 365 * 24 * 60 * 60 * 1000,
        })
        .json({
          data: {
            accessToken: result.accessToken,
          },
        });
    } else if (type === "mobile") {
      res.status(200).json({
        data: result,
      });
    } else {
      res.status(400).json({
        errors: "Bad request",
      });
    }
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const changePassword = async (req, res, next) => {
  try {
    await userService.chagePassword(req.body, req.user.email);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const getUserEdit = async (req, res, next) => {
  try {
    const result = await userService.getUserEdit(req.user.email);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const editDetailUsers = async (req, res, next) => {
  try {
    const result = await userService.editDetailUsers(req.body, req.user.email);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await userService.getUser(req.user.email);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(e);
  } finally {
    db.release();
  }
};

const sendEmailForResetPassword = async (req, res, next) => {
  try {
    const result = await userService.sendEmailForResetPassword(req.body.email);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const verifyCodeResetPassoword = async (req, res, next) => {
  try {
    const result = await userService.verifyCodeResetPassoword(req.body.code);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    db.release;
  }
};

const resetPassword = async (req, res, next) => {
  try {
    await userService.resetPassword(req.body);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  } finally {
    db.release();
  }
};

const logout = async (req, res, next) => {
  try {
    const { type } = req.query;
    if (!type) {
      return res
        .status(400)
        .json({
          errors: "Bad Request",
        })
        .end();
    }
    await userService.logout(req.user.email);

    if (type === "website") {
      res.clearCookie("token");
      res.status(200).json({
        data: "OK",
      });
    } else {
      res.status(200).json({
        data: "OK",
      });
    }
  } catch (e) {
    next(e);
  } finally {
    db.release();
  }
};

const uploadImageProfile = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new RespondError(400, "Insert image");
    }
    const email = req.user.email;
    const file = req.file.filename;
    const result = await userService.uploadImageProfile(email, file);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    db.release();
  }
};

const newToken = async (req, res, next) => {
  try {
    const result = await tokenService.newToken(req.user.token);
    res.status(200).json({
      data: {
        accessToken: result,
      },
    });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
  login,
  changePassword,
  getUserEdit,
  editDetailUsers,
  getUser,
  sendEmailForResetPassword,
  verifyCodeResetPassoword,
  resetPassword,
  logout,
  uploadImageProfile,
  newToken,
};
