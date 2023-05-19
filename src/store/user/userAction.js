import { USER_INFO_TYPES } from "./userTypes";

export const setUserInfo = (userInfo) => ({
  type: USER_INFO_TYPES.SET_USER_INFO,
  payload: userInfo,
});
