import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  const accessToken = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "600s",
  });
  return accessToken;
};

const generateToken = (user) => {
  const accessToken = jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: "365d",
  });
  return accessToken;
};

export { generateAccessToken, generateToken };
