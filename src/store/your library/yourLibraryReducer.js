import { YOUR_LIBRARY_TYPE } from "./yourLibraryTypes";

const INITIAL_STATE = {
  yourLibrary: false,
};

export const yourLibraryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case YOUR_LIBRARY_TYPE.SET_YOUR_LIBRARY:
      return {
        ...state,
        yourLibrary: payload,
      };
    default:
      return state;
  }
};
