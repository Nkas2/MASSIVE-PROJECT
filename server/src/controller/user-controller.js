import db from "../application/db.js";
import { RespondError } from "../error/ressponse-error.js";
import userService from "../service/user-service.js";
import tokenService from "../service/token-service.js";
import getConnection from "../application/db.js";

const register = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    await userService.register(req.body, connection);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const login = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const type = req.query.type;
    const result = await userService.login(req.body, connection);
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
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const changePassword = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    await userService.chagePassword(req.body, req.user.email, connection);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getUserEdit = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await userService.getUserEdit(req.user.email, connection);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const editDetailUsers = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await userService.editDetailUsers(
      req.body,
      req.user.email,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getUser = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await userService.getUser(req.user.email, connection);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const sendEmailForResetPassword = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await userService.sendEmailForResetPassword(
      req.body.email,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const verifyCodeResetPassoword = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await userService.verifyCodeResetPassoword(
      req.body.code,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const resetPassword = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    await userService.resetPassword(req.body, connection);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const logout = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const { type } = req.query;
    if (!type) {
      return res
        .status(400)
        .json({
          errors: "Bad Request",
        })
        .end();
    }
    await userService.logout(req.user.email, connection);

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
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const uploadImageProfile = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    if (!req.file) {
      throw new RespondError(400, "Insert image");
    }
    const email = req.user.email;
    const file = req.file.filename;
    const result = await userService.uploadImageProfile(
      email,
      file,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const newToken = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await tokenService.newToken(req.user.token, connection);
    res.status(200).json({
      data: {
        accessToken: result,
      },
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getDonorHistory = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await userService.getDonorHistory(
      req.user.email,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
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
  getDonorHistory,
};
