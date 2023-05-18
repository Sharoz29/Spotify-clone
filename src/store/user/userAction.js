import { USER_INFO_TYPES } from "./userTypes";

export const setUSerInfo = (userInfo) => ({
  type: USER_INFO_TYPES.SET_USER_INFO,
  payload: userInfo,
});
