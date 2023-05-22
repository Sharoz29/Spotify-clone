import { SEARCH_TYPE } from "./searchTypes";

const INITIAL_STATE = {
  search: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TYPE.SET_SEARCH_TYPES:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
