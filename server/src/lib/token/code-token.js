export const generateCOdeToken = (user) => {
  const accessToken = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "6000s",
  });
  return accessToken;
};
