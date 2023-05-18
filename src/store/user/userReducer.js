import { USER_INFO_TYPES } from "./userTypes";

const INITIAL_STATE = {
  userInfo: [],
};

export const userInfoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_INFO_TYPES.SET_USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};
