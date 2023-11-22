import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateAccessToken = (user) => {
  const accessToken = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "60s",
  });
  return accessToken;
};

const generateToken = (user) => {
  const accessToken = jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: "90d",
  });
  return accessToken;
};

export { generateAccessToken, generateToken };
