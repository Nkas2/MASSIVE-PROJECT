import { RespondError } from "../error/ressponse-error.js";

export const getCookie = (req) => {
  const cookieToken = req.cookie.token;
  if (!cookieToken) {
    throw new RespondError(401, "Unauthorization");
  }
  return cookieToken;
};
