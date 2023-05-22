import { TOKEN_TYPES } from "./tokenTypes";

export const setToken = (token) => ({
  type: TOKEN_TYPES.SET_TOKEN,
  payload: token,
});
