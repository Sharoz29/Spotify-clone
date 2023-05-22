import { TOKEN_TYPES } from "./tokenTypes";

const INITIAL_STATE = {
  token: null,
};
export const tokenReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOKEN_TYPES.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
