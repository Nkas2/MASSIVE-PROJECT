import { RespondError } from "../error/ressponse-error.js";
import { generateAccessToken } from "../lib/token/token.js";

const newToken = async (token, db) => {
  if (!token) {
    throw new RespondError(404, "Not found");
  }

  const [resultUser] = await db.execute(
    "SELECT * FROM users JOIN user_details ON users.id = user_details.user_id WHERE users.token = ?",
    [token]
  );

  if (resultUser.length === 0) {
    throw new RespondError(404, "Token is not found");
  }

  const accessToken = generateAccessToken({
    id: resultUser[0].id,
    email: resultUser[0].email,
    name: resultUser[0].name,
    phone_number: resultUser[0].phone_number,
    image: resultUser[0].image,
  });

  return accessToken;
};

export default {
  newToken,
};
