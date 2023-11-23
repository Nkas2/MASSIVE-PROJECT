import db from "../application/db.js";
import userService from "../service/user-service.js";

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
    const { source } = req.body;
    if (req.body.source) {
      delete req.body.source;
    }
    const result = await userService.login(req.body);
    if (source === "website") {
      res
        .status(200)
        .cookie("token", result.token, {
          httpOnly: true,
          maxAge: 90 * 24 * 60 * 60 * 1000,
        })
        .json({
          data: {
            accessToken: result.accessToken,
          },
        });
    } else if (source === "mobile") {
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
    next(e);
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

export default {
  register,
  login,
  changePassword,
  getUserEdit,
  editDetailUsers,
};
