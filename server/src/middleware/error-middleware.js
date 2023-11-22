import { RespondError } from "../error/ressponse-error.js";
import { TrasactionError } from "../error/transaction-error.js";

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof RespondError || err instanceof TrasactionError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        errors: err.message,
      })
      .end();
  }
};

export { errorMiddleware };
