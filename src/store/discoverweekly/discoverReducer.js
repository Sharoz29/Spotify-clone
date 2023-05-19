import { DISCOVER_WEEKLY_TYPES } from "./discoverTypes";

const INITIAL_STATE = {
  discoverWeekly: [],
};

export const discoverReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DISCOVER_WEEKLY_TYPES.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: payload,
      };
    default:
      return state;
  }
};
