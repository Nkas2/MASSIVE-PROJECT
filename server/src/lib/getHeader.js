import { RespondError } from "../error/ressponse-error.js";

export const getHeader = (req) => {
  const headerToken = req.get("Authorization");
  if (!headerToken) {
    throw new RespondError(401, "Unauthorization");
  }
  return headerToken;
};
