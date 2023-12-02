import jwt from "jsonwebtoken";

export const eventMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!authHeader || !token) {
    next();
  } else {
    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({
            errors: "token is not valid",
          })
          .end();
      }
      req.user = decoded;
      next();
    });
  }
};
