import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!authHeader || !token) {
    res
      .status(401)
      .json({
        errors: "Unauthorization",
      })
      .end();
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
