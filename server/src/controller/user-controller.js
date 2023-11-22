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
    const result = await userService.login(req.body);
    res.status(200).json({
      data: result,
    });
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

export default {
  register,
  login,
};
