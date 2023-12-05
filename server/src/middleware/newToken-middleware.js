import jwt from "jsonwebtoken";

export const newToken_middleware = async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    token = req.get("Authorization");
  }

  if (!token) {
    return res
      .status(400)
      .json({
        errors: "bad request",
      })
      .end();
  }

  jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({
          errors: "token is not valid",
        })
        .end();
    }
  });

  req.user = { token };
  next();
};
