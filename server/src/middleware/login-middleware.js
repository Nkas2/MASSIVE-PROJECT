import { RespondError } from "../error/ressponse-error.js";

export const loginMiddleware = async (req, res, next) => {
  const requestFrom = req.body.source;

  if (!requestFrom) {
    res
      .status(400)
      .json({
        errors: "Where you from website/mobile",
      })
      .end();
  } else {
    next();
  }
};
