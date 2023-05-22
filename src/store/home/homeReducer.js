import { HOME_TYPE } from "./homeTypes";

const INITIAL_STATE = {
  home: false,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_TYPE.SET_HOME_PAGE:
      return {
        ...state,
        home: payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
