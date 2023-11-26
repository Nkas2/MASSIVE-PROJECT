import { v4 as uuid } from "uuid";

export const generateResetCode = () => {
  let token = uuid();

  token = token.substring(0, 6);

  return token.toUpperCase();
};
