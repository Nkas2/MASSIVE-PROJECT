import jwt from "jsonwebtoken";

export const resetPasswordMiddleware = async (req, res, next) => {
  const token = req.body.email;
  if (!token) {
    return res
      .status(400)
      .json({
        errors: "bad request",
      })
      .end();
  }
  jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({
          errors: "token is not valid",
        })
        .end();
    }
    req.body.email = decoded.email;
    console.log(req.body.emai);
    next();
  });
};
